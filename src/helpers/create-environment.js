const query = `mutation environmentCreate ($attributes: EnvironmentAttributes!, $subscriptionId: ID!) {
  environmentCreate (attributes: $attributes, subscriptionId: $subscriptionId) {
    environment {
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
