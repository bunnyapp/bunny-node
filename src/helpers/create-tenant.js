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
  }
}`;

module.exports = async function (name, code, platformCode, subscriptionId) {
  let variables = {
    attributes: {
      name: name,
      code: code,
      platformCode: platformCode,
    },
    subscriptionId: subscriptionId,
  };
  return this.query(query, variables);
};
