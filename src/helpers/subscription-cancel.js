const query = `mutation subscriptionCancel ($ids: [ID!]!) {
  subscriptionCancel (ids: $ids) {
      errors
  }
}`;

/**
 * Cancel a subsription
 * @param {number} subscriptionId
 * @returns {boolean} Success
 */
module.exports = async function (subscriptionId) {
  let variables = {
    ids: [subscriptionId],
  };

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return true;
};
