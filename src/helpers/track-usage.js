const query = `mutation featureUsageCreate ($attributes: FeatureUsageAttributes!) {
    featureUsageCreate (attributes: $attributes) {
        errors
        featureUsage {
            id
            quantity
            usageAt
            environment {
                id
                code
                name
            }
            feature {
                id
                code
                name
            }
        }
    }
}`;

module.exports = async function (
  quantity,
  usageAt,
  environmentCode,
  featureCode
) {
  let variables = {
    attributes: {
      quantity: quantity,
      usageAt: usageAt,
      environmentCode: environmentCode,
      featureCode: featureCode,
    },
  };
  return this.query(query, variables);
};
