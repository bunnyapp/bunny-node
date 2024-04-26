const query = `mutation featureUsageCreate ($attributes: FeatureUsageAttributes!) {
    featureUsageCreate (attributes: $attributes) {
        errors
        featureUsage {
            id
            quantity
            usageAt
            subscription {
                id
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
 * Record feature usage for a subscription
 * @param {string} featureCode Code for the feature that is being used
 * @param {number} quantity Amount of usage to record
 * @param {number} subscriptionId ID of the subscription that has the usage
 * @param {string} usageAt ISO8601 date string. Deafults to now
 * @returns
 */
module.exports = async function (
  featureCode,
  quantity,
  subscriptionId,
  usageAt = null
) {
  let variables = {
    attributes: {
      quantity: quantity,
      subscriptionId: subscriptionId,
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
