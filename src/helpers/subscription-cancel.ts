import Bunny from '../';
import { Mutation } from '../types/graphql';

const query = `mutation subscriptionCancel ($ids: [ID!]!) {
  subscriptionCancel (ids: $ids) {
      errors
  }
}`;

/**
 * Cancel a subscription
 * @param {number} subscriptionId The subscription ID
 * @returns {Promise<boolean>} True if the subscription was cancelled, false otherwise
 */
export default async function subscriptionCancel(
  this: Bunny,
  subscriptionId: number
): Promise<boolean> {
  const variables = {
    id: subscriptionId,
  };

  const res = await this.query<{
    subscriptionCancel: NonNullable<Mutation['subscriptionCancel']>
  }>(query, variables);

  const subscriptionCancel = res?.data?.subscriptionCancel;

  if (res?.errors) {
    throw new Error(Array.isArray(res.errors) ? res.errors.map(e => e.message).join() : res.errors);
  }

  if (subscriptionCancel?.errors) {
    throw new Error(Array.isArray(subscriptionCancel.errors) ? subscriptionCancel.errors.join() : subscriptionCancel.errors);
  }

  return true;
}
