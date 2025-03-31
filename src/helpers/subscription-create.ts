import Bunny from '../';

interface BillingContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  salutation?: string;
  title?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingZip?: string;
  mailingState?: string;
  mailingCountry?: string;
}

interface Account {
  name?: string;
  ownerUserId?: string;
  phone?: string;
  fax?: string;
  website?: string;
  billingStreet?: string;
  billingCity?: string;
  billingZip?: string;
  billingState?: string;
  billingCountry?: string;
  billingContact?: BillingContact;
}

interface Tenant {
  code: string;
  name?: string;
}

interface SubscriptionAttributes {
  priceListCode: string;
  trial: boolean;
  evergreen: boolean;
  accountId?: string;
  account?: Account;
  tenant?: Tenant;
}

interface SubscriptionOptions {
  trial?: boolean;
  evergreen?: boolean;
  accountId?: string;
  accountName?: string;
  ownerUserId?: string;
  phone?: string;
  fax?: string;
  website?: string;
  billingStreet?: string;
  billingCity?: string;
  billingZip?: string;
  billingState?: string;
  billingCountry?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  salutation?: string;
  title?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingZip?: string;
  mailingState?: string;
  mailingCountry?: string;
  tenantCode?: string;
  tenantName?: string;
}

interface SubscriptionResponse {
  subscription?: {
    id: string;
    account: {
      id: string;
      name: string;
      contacts: Array<{
        id: string;
        firstName: string;
        lastName: string;
      }>;
    };
    trialStartDate: string;
    trialEndDate: string;
    startDate: string;
    endDate: string;
    state: string;
    plan: {
      code: string;
      name: string;
    };
    priceList: {
      code: string;
      name: string;
    };
    tenant: {
      id: string;
      code: string;
      name: string;
      account: {
        id: string;
        name: string;
        billingDay: number;
      };
    };
  };
  errors?: string[];
}

interface QueryResponse {
  data?: {
    subscriptionCreate: SubscriptionResponse;
  };
  errors?: Array<{ message: string }>;
}

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
 * @param {SubscriptionOptions} options
 * @returns {Promise<SubscriptionResponse['subscription']>} The subscription object
 */
export default async function subscriptionCreate(
  this: Bunny,
  priceListCode: string,
  options: SubscriptionOptions = {}
): Promise<SubscriptionResponse['subscription']> {
  const variables: { attributes: SubscriptionAttributes } = {
    attributes: {
      priceListCode,
      trial: options.trial ?? false,
      evergreen: options.evergreen ?? true,
    },
  };

  if (options.accountId) {
    variables.attributes.accountId = options.accountId;
  } else {
    variables.attributes.account = {
      name: options.accountName,
      ownerUserId: options.ownerUserId,
      phone: options.phone,
      fax: options.fax,
      website: options.website,
      billingStreet: options.billingStreet,
      billingCity: options.billingCity,
      billingZip: options.billingZip,
      billingState: options.billingState,
      billingCountry: options.billingCountry,
      billingContact: {
        firstName: options.firstName,
        lastName: options.lastName,
        email: options.email,
        phone: options.phone,
        mobile: options.mobile,
        salutation: options.salutation,
        title: options.title,
        mailingStreet: options.mailingStreet,
        mailingCity: options.mailingCity,
        mailingZip: options.mailingZip,
        mailingState: options.mailingState,
        mailingCountry: options.mailingCountry,
      },
    };
  }

  if (options.tenantCode) {
    variables.attributes.tenant = {
      code: options.tenantCode,
      name: options.tenantName,
    };
  }

  const res: QueryResponse = await this.query(query, variables);

  const subscriptionCreate = res?.data?.subscriptionCreate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (subscriptionCreate?.errors) {
    throw new Error(subscriptionCreate.errors.join());
  }

  return subscriptionCreate?.subscription;
}
