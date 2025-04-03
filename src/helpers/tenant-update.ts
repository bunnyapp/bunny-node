import Bunny from '../';
import { Mutation, TenantAttributes } from '../types/graphql';

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

/**
 * Updates an existing tenant
 * @param {string} id The ID of the tenant to update
 * @param {string} code New code for the tenant
 * @param {string} name New name for the tenant
 * @returns {Promise<NonNullable<Mutation['tenantUpdate']>['tenant']>} The updated tenant
 */
export default async function tenantUpdate(
  this: Bunny,
  id: string,
  code?: string,
  name?: string
): Promise<NonNullable<NonNullable<Mutation['tenantUpdate']>['tenant']> | undefined> {
  const variables = {
    id,
    attributes: {
      code: code?.toString(),
      name,
    } as TenantAttributes,
  };

  const res = await this.query<{
    tenantUpdate: NonNullable<Mutation['tenantUpdate']>
  }>(query, variables);

  const tenantUpdate = res?.data?.tenantUpdate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (tenantUpdate?.errors) {
    throw new Error(tenantUpdate.errors.join());
  }

  return tenantUpdate?.tenant ?? undefined;
}
