import Bunny from '../';

const query = `mutation subscriptionCancel ($ids: [ID!]!) {
  subscriptionCancel (ids: $ids) {
      errors
  }
}`;

interface SubscriptionCancelResponse {
  data?: {
    subscriptionCancel?: {
      errors?: string[];
    };
  };
  errors?: Array<{ message: string }>;
}

/**
 * Cancel a subscription
 * @param {number} subscriptionId - The ID of the subscription to cancel
 * @returns {Promise<boolean>} Success
 */
export default async function subscriptionCancel(
  this: Bunny,
  subscriptionId: number
): Promise<boolean> {
  const variables = {
    ids: [subscriptionId],
  };

  const res: SubscriptionCancelResponse = await this.query(query, variables);
  const subscriptionCancel = res?.data?.subscriptionCancel;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (subscriptionCancel?.errors) {
    throw new Error(subscriptionCancel.errors.join());
  }

  return true;
}
