const query = `mutation trialCreate ($attributes: TrialAttributes!) {
  trialCreate (attributes: $attributes) {
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
    },
  };
  return this.query(query, variables);
};
