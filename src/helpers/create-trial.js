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
  trialStartDate
) {
  let variables = {
    attributes: {
      company: accountName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      productPlanCode: productPlanCode,
      trialStartDate: trialStartDate,
    },
  };
  return this.query(query, variables);
};
