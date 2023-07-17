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
 * @param {number} expiryInHours Length of time in hours before the token expires. Deafults to 24
 * @returns {string} The session token
 */
module.exports = async function (
  tenantCode,
  returnUrl = null,
  expiryInHours = 24
) {
  let variables = {
    tenantCode: tenantCode,
    returnUrl: returnUrl,
    expiry: expiryInHours,
  };

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.portalSessionCreate?.token;
};
