import Bunny from '../';
import { Mutation, TenantAttributes } from '../types/graphql';

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
 * @param {string} accountId Id of the account that the tenant is being created for
 * @param {string} subscriptionId Id of the subscription that the tenant is being created for
 * @returns {Promise<NonNullable<Mutation['tenantCreate']>['tenant']>} The created tenant
 */
export default async function tenantCreate(
  this: Bunny,
  name: string,
  code: string,
  platformCode: string,
  accountId: string,
  subscriptionId: string
): Promise<NonNullable<NonNullable<Mutation['tenantCreate']>['tenant']>> {
  const variables = {
    attributes: {
      name,
      code,
      accountId,
      platformCode,
    } as TenantAttributes,
    subscriptionId,
  };

  const res = await this.query<{
    tenantCreate: NonNullable<Mutation['tenantCreate']>
  }>(query, variables);

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
