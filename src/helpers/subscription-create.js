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
        account {
          id
          name
          billingDay
        }
      }
    }
    errors
  }
}`;

/**
 * Create a new subscription for a tenant
 * @param {string} priceListCode The code for the plan to subscribe to
 * @param {Object} options
 * @returns {Object} The subscription object
 */
module.exports = async function (priceListCode, options = {}) {
  let variables = {
    attributes: {
      priceListCode: priceListCode,
      trial: options["trial"] || false,
      evergreen: options["evergreen"] || true,
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

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.subscriptionCreate?.subscription;
};
