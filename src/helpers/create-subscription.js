const query = `mutation subscriptionCreate ($attributes: SubscriptionAttributes!) {
  subscriptionCreate (attributes: $attributes) {
    subscription {
      id
      account {
        id
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
      plan {
        code
        name
      }
      priceList {
        code
        name
      }
      tenant {
        id
        code
        name
      }
    }
    errors
  }
}`;

module.exports = async function (priceListCode, options = {}) {
  let variables = {
    attributes: {
      priceListCode: priceListCode,
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
