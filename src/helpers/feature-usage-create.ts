import { FeatureUsage, FeatureUsageAttributes } from '../generated/graphql';
import Bunny from '../';

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

interface QueryResponse {
  data?: {
    featureUsageCreate?: {
      featureUsage?: FeatureUsage;
      errors?: string[];
    };
  };
  errors?: Array<{ message: string }>;
}

/**
 * Record feature usage for a subscription
 * @param {string} featureCode Code for the feature that is being used
 * @param {number} quantity Amount of usage to record
 * @param {number} subscriptionId ID of the subscription that has the usage
 * @param {string} usageAt ISO8601 date string. Defaults to now
 * @returns {Promise<FeatureUsage>}
 */
export default async function featureUsageCreate(
  this: Bunny,
  featureCode: string,
  quantity: number,
  subscriptionId: string,
  usageAt: string | null = null
): Promise<FeatureUsage> {
  const variables: {
    attributes: FeatureUsageAttributes;
  } = {
    attributes: {
      quantity,
      subscriptionId,
      featureCode,
    },
  };

  if (usageAt) {
    variables.attributes.usageAt = usageAt;
  }

  const res: QueryResponse = await this.query(query, variables);
  const featureUsageCreate = res?.data?.featureUsageCreate;

  if (res?.errors) {
    throw new Error(res.errors.map((e: { message: string }) => e.message).join());
  }

  if (featureUsageCreate?.errors) {
    throw new Error(featureUsageCreate.errors.join());
  }

  if (!featureUsageCreate?.featureUsage) {
    throw new Error('Feature usage not created');
  }

  return featureUsageCreate.featureUsage;
}
