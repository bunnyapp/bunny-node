import Bunny from '../';
import { Mutation } from '../types/graphql';

const query = `mutation portalSessionCreate ($tenantCode: String!, $expiry: Int!, $returnUrl: String!) {
  portalSessionCreate (tenantCode: $tenantCode, expiry: $expiry, returnUrl: $returnUrl) {
      errors
      token
  }
}`;

/**
 * Generate a session token for customer portal
 * @param {string} tenantCode The unique code that represents the tenant
 * @param {string} returnUrl A URL to redirect the user back to the original app after using the portal
 * @param {number} expiryInHours Length of time in hours before the token expires. Defaults to 24
 * @returns {Promise<string>} The session token
 */
export default async function portalSessionCreate(
  this: Bunny,
  tenantCode: string,
  returnUrl: string = '',
  expiryInHours: number = 24
): Promise<string> {
  const variables = {
    tenantCode,
    returnUrl,
    expiry: expiryInHours,
  };

  const res = await this.query<{
    portalSessionCreate: NonNullable<Mutation['portalSessionCreate']>
  }>(query, variables);

  const portalSessionCreate = res?.data?.portalSessionCreate;

  if (res?.errors) {
    throw new Error(Array.isArray(res.errors) ? res.errors.map(e => e.message).join() : res.errors);
  }

  if (portalSessionCreate?.errors) {
    throw new Error(Array.isArray(portalSessionCreate.errors) ? portalSessionCreate.errors.join() : portalSessionCreate.errors);
  }

  if (!portalSessionCreate?.token) {
    throw new Error('No token returned from portal session creation');
  }

  return portalSessionCreate.token;
}
