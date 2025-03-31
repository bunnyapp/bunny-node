import Bunny from '../';

interface PortalSessionCreateResponse {
  data?: {
    portalSessionCreate?: {
      errors?: string[];
      token?: string;
    };
  };
  errors?: Array<{ message: string }>;
}

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
  returnUrl: string | null = null,
  expiryInHours: number = 24
): Promise<string> {
  const variables = {
    tenantCode,
    returnUrl,
    expiry: expiryInHours,
  };

  const res: PortalSessionCreateResponse = await this.query(query, variables);
  const portalSessionCreate = res?.data?.portalSessionCreate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (portalSessionCreate?.errors) {
    throw new Error(portalSessionCreate.errors.join());
  }

  if (!portalSessionCreate?.token) {
    throw new Error('No token returned from portal session creation');
  }

  return portalSessionCreate.token;
}
