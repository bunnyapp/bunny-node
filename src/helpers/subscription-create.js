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
      ownerUserId: options["ownerUserId"]?.toString(),
      phone: options["phone"]?.toString(),
      fax: options["fax"]?.toString(),
      website: options["website"]?.toString(),
      billingStreet: options["billingStreet"]?.toString(),
      billingCity: options["billingCity"]?.toString(),
      billingZip: options["billingZip"]?.toString(),
      billingState: options["billingState"]?.toString(),
      billingCountry: options["billingCountry"]?.toString(),
      billingContact: {
        firstName: options["firstName"]?.toString(),
        lastName: options["lastName"]?.toString(),
        email: options["email"]?.toString(),
        phone: options["phone"]?.toString(),
        mobile: options["mobile"]?.toString(),
        salutation: options["salutation"]?.toString(),
        title: options["title"]?.toString(),
        mailingStreet: options["mailingStreet"]?.toString(),
        mailingCity: options["mailingCity"]?.toString(),
        mailingZip: options["mailingZip"]?.toString(),
        mailingState: options["mailingState"]?.toString(),
        mailingCountry: options["mailingCountry"]?.toString(),
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
  const subscriptionCreate = res?.data?.subscriptionCreate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (subscriptionCreate?.errors) {
    throw new Error(subscriptionCreate.errors.join());
  }

  return subscriptionCreate?.subscription;
};
