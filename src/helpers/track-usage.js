const query = `mutation featureUsageCreate ($attributes: FeatureUsageAttributes!) {
    featureUsageCreate (attributes: $attributes) {
        errors
        featureUsage {
            id
            quantity
            usageAt
            tenant {
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
  tenantCode,
  usageAt = null
) {
  let variables = {
    attributes: {
      quantity: quantity,
      tenantCode: tenantCode,
      featureCode: featureCode,
    },
  };

  if (usageAt) {
    variables["attributes"]["usageAt"] = usageAt;
  }

  return this.query(query, variables);
};
