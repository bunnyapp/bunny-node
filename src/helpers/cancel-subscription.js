const query = `mutation subscriptionCancel ($ids: [ID!]!) {
  subscriptionCancel (ids: $ids) {
      errors
  }
}`;

module.exports = async function (subscriptionId) {
  let variables = {
    ids: [subscriptionId],
  };

  const res = await this.query(query, variables);

  return (
    res.data &&
    res.data.subscriptionCancel &&
    res.data.subscriptionCancel.errors == null
  );
};
