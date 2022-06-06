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
  options = {}
) {
  let variables = {
    attributes: {
      accountName: accountName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      productPlanCode: productPlanCode,
      platformCode: options["platformCode"],
      environmentCode: options["environmentCode"],
      trialStartDate: options["trialStartDate"],
      trial: options["trial"],
    },
  };
  return this.query(query, variables);
};
