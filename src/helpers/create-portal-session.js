const query = `mutation portalSessionCreate ($tenantCode: String!) {
  portalSessionCreate (tenantCode: $tenantCode) {
    token
    errors
  }
}`;

module.exports = async function (tenantCode) {
  let variables = {
    tenantCode: tenantCode,
  };
  return this.query(query, variables);
};
