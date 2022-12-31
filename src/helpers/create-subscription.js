const query = `mutation subscriptionCreate ($attributes: SubscriptionAttributes!) {
  subscriptionCreate (attributes: $attributes) {
    errors
    subscription {
      id
      account {
          name
          contacts {
              id
              firstName
              lastName
          }
      }
      trialStartDate
      trialEndDate
      startDate
      endDate
      state
      productPlan {
        name
      }
      tenant {
          code
          name
      }
    }
  }
}`;

module.exports = async function (productPlanCode, options = {}) {
  let variables = {
    attributes: {
      productPlanCode: productPlanCode,
      trial: options["trial"] || false,
    },
  };

  if (options["accountId"]) {
    variables.attributes.accountId = options["accountId"];
  } else {
    variables.attributes.account = {
      name: options["accountName"]?.toString(),
      billingContact: {
        firstName: options["firstName"]?.toString(),
        lastName: options["lastName"]?.toString(),
        email: options["email"]?.toString(),
      },
    };
  }

  if (options["tenantCode"]) {
    variables.attributes.tenant = {
      code: options["tenantCode"]?.toString(),
      name: options["tenantName"]?.toString(),
    };
  }

  return this.query(query, variables);
};
