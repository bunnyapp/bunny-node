import Bunny from '../';

interface TenantAttributes {
  name: string;
  code: string;
  accountId: number;
  platformCode: string;
}

interface Platform {
  id: string;
  name: string;
  code: string;
}

interface Tenant {
  code: string;
  id: string;
  name: string;
  platform: Platform;
}

interface TenantCreateResponse {
  tenant: Tenant;
  errors?: string[];
}

interface GraphQLResponse {
  data?: {
    tenantCreate?: TenantCreateResponse;
  };
  errors?: Array<{ message: string }>;
}

const query = `mutation tenantCreate ($attributes: TenantAttributes!, $subscriptionId: ID!) {
  tenantCreate (attributes: $attributes, subscriptionId: $subscriptionId) {
    tenant {
      code
      id
      name
      platform {
        id
        name
        code
      }
    }
    errors
  }
}`;

/**
 * Creates a new tenant with the specified attributes
 * @param {string} name Account name of the tenant
 * @param {string} code Unique code for the tenant
 * @param {string} platformCode Code for the platform that the tenant is on
 * @param {number} accountId Id of the account that the tenant is being created for
 * @param {number} subscriptionId Id of the subscription that the tenant is being created for
 * @returns {Promise<Tenant>} The created tenant
 */
export default async function tenantCreate(
  this: Bunny,
  name: string,
  code: string,
  platformCode: string,
  accountId: number,
  subscriptionId: number
): Promise<Tenant> {
  const variables = {
    attributes: {
      name,
      code,
      accountId,
      platformCode,
    },
    subscriptionId,
  };

  const res: GraphQLResponse = await this.query(query, variables);
  const tenantCreate = res?.data?.tenantCreate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (tenantCreate?.errors) {
    throw new Error(tenantCreate.errors.join());
  }

  if (!tenantCreate?.tenant) {
    throw new Error('Tenant not created');
  }
  return tenantCreate.tenant;
}
