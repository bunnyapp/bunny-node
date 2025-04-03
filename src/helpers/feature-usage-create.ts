import Bunny from '../';
import { Mutation, FeatureUsageAttributes } from '../types/graphql';

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
 * @param {string} subscriptionId ID of the subscription that has the usage
 * @param {string} usageAt ISO8601 date string. Defaults to now
 * @returns {Promise<NonNullable<NonNullable<Mutation['featureUsageCreate']>['featureUsage']>>}
 */
export default async function featureUsageCreate(
  this: Bunny,
  featureCode: string,
  quantity: number,
  subscriptionId: string,
  usageAt: string | null = null
): Promise<NonNullable<NonNullable<Mutation['featureUsageCreate']>['featureUsage']>> {
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

  const res = await this.query<{
    featureUsageCreate: NonNullable<Mutation['featureUsageCreate']>
  }>(query, variables);

  const featureUsageCreate = res?.data?.featureUsageCreate;

  if (res?.errors) {
    throw new Error(Array.isArray(res.errors) ? res.errors.map(e => e.message).join() : res.errors);
  }

  if (featureUsageCreate?.errors) {
    throw new Error(Array.isArray(featureUsageCreate.errors) ? featureUsageCreate.errors.join() : featureUsageCreate.errors);
  }

  if (!featureUsageCreate?.featureUsage) {
    throw new Error('Feature usage not created');
  }

  return featureUsageCreate.featureUsage;
}
