import { Tenant, TenantAttributes } from '../generated/graphql';

const query = `mutation tenantUpdate ($id: ID!, $attributes: TenantAttributes!) {
  tenantUpdate (id: $id, attributes: $attributes) {
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

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

interface TenantUpdateResponse {
  tenantUpdate?: {
    tenant?: Tenant;
    errors?: string[];
  };
}

export default async function tenantUpdate(
  this: { query: (query: string, variables: any) => Promise<GraphQLResponse<TenantUpdateResponse>> },
  id: string,
  code?: string,
  name?: string
): Promise<Tenant | undefined> {
  const variables = {
    id,
    attributes: {
      code: code?.toString(),
      name,
    } as TenantAttributes,
  };

  const res = await this.query(query, variables);
  const tenantUpdate = res?.data?.tenantUpdate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (tenantUpdate?.errors) {
    throw new Error(tenantUpdate.errors.join());
  }

  return tenantUpdate?.tenant;
}
