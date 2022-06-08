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
  featureCode,
  quantity,
  environmentCode,
  usageAt = null
) {
  let variables = {
    attributes: {
      quantity: quantity,
      environmentCode: environmentCode,
      featureCode: featureCode,
    },
  };

  if (usageAt) {
    variables["attributes"]["usageAt"] = usageAt;
  }

  return this.query(query, variables);
};
