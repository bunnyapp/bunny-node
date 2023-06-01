const query = `mutation portalSessionCreate ($tenantCode: String!, $expiry: Int!, $returnUrl: String!) {
  portalSessionCreate (tenantCode: $tenantCode, expiry: $expiry, returnUrl: $returnUrl) {
      errors
      token
  }
}`;

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
  return this.query(query, variables);
};
