const query = `mutation subscriptionCreate ($attributes: SubscriptionAttributes!) {
  subscriptionCreate (attributes: $attributes) {
      errors
      subscription {
          id
          trialStartDate
          trialEndDate
          startDate
          endDate
          state
          productPlan {
            name
          }
      }
  }
}`;

module.exports = async function (
  accountName,
  firstName,
  lastName,
  email,
  productPlanCode,
  trial = false,
  platformCode = null,
  environmentCode = null,
  trialStartDate = null
) {
  let variables = {
    attributes: {
      accountName: accountName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      productPlanCode: productPlanCode,
      platformCode: platformCode,
      environmentCode: environmentCode,
      trialStartDate: trialStartDate,
      trial: trial,
    },
  };
  return this.query(query, variables);
};
