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

/**
 * Record feature usage for a tenant
 * @param {string} featureCode Code for the feature that is being used
 * @param {number} quantity Amount of usage to record
 * @param {string} tenantCode Code for the tenant that has the usage
 * @param {string} usageAt ISO8601 date string. Deafults to now
 * @returns
 */
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

  const res = await this.query(query, variables);
  const featureUsageCreate = res?.data?.featureUsageCreate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (featureUsageCreate?.errors) {
    throw new Error(featureUsageCreate.errors.join());
  }

  return featureUsageCreate?.featureUsage;
};
