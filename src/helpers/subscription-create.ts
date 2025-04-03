import Bunny from '../';
import { Mutation } from '../types/graphql';

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
 * Create a subscription
 * @param {string} priceListCode The unique code that represents the price list
 * @param {SubscriptionOptions} [options={}] Additional options for subscription creation
 * @returns {Promise<NonNullable<NonNullable<Mutation['subscriptionCreate']>['subscription']>>} The created subscription
 */
export default async function subscriptionCreate(
  this: Bunny,
  priceListCode: string,
  options: SubscriptionOptions = {}
): Promise<NonNullable<NonNullable<Mutation['subscriptionCreate']>['subscription']>> {
  const variables: { attributes: Record<string, any> } = {
    attributes: {
      priceListCode,
      trial: options.trial || false,
      evergreen: options.evergreen ?? true,
    },
  };

  if (options.accountId) {
    variables.attributes.accountId = options.accountId;
  } else {
    const billingContact: Record<string, string | undefined> = {
      firstName: options.firstName?.toString(),
      lastName: options.lastName?.toString(),
      email: options.email?.toString(),
      phone: options.phone?.toString(),
      mobile: options.mobile?.toString(),
      salutation: options.salutation?.toString(),
      title: options.title?.toString(),
      mailingStreet: options.mailingStreet?.toString(),
      mailingCity: options.mailingCity?.toString(),
      mailingZip: options.mailingZip?.toString(),
      mailingState: options.mailingState?.toString(),
      mailingCountry: options.mailingCountry?.toString(),
    };

    // Only include non-empty billing contact
    const filteredBillingContact = Object.fromEntries(
      Object.entries(billingContact).filter(([_, value]) => value !== undefined)
    );

    variables.attributes.account = {
      name: options.accountName?.toString(),
      ownerUserId: options.ownerUserId?.toString(),
      phone: options.phone?.toString(),
      fax: options.fax?.toString(),
      website: options.website?.toString(),
      billingStreet: options.billingStreet?.toString(),
      billingCity: options.billingCity?.toString(),
      billingZip: options.billingZip?.toString(),
      billingState: options.billingState?.toString(),
      billingCountry: options.billingCountry?.toString(),
      ...(Object.keys(filteredBillingContact).length > 0 && { billingContact: filteredBillingContact }),
    };
  }

  if (options.tenantCode) {
    variables.attributes.tenant = {
      code: options.tenantCode.toString(),
      name: options.tenantName?.toString(),
    };
  }

  const res = await this.query<{
    subscriptionCreate: NonNullable<Mutation['subscriptionCreate']>
  }>(query, variables);

  const subscriptionCreate = res?.data?.subscriptionCreate;

  if (res?.errors) {
    throw new Error(Array.isArray(res.errors) ? res.errors.map(e => e.message).join() : res.errors);
  }

  if (subscriptionCreate?.errors) {
    throw new Error(Array.isArray(subscriptionCreate.errors) ? subscriptionCreate.errors.join() : subscriptionCreate.errors);
  }

  if (!subscriptionCreate?.subscription) {
    throw new Error('No subscription returned from subscription creation');
  }

  return subscriptionCreate.subscription;
}
