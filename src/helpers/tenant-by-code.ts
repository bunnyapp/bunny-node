import Bunny from '../';
import { Query, Tenant } from '../types/graphql';

const query = `query tenant ($code: String!) {
  tenant (code: $code) {
    id
    code
    name
    subdomain
    account {
      accountTypeId
      addressValidated
      annualRevenue
      billingCity
      billingContactId
      billingCountry
      billingDay
      billingState
      billingStreet
      billingZip
      code
      createdAt
      currencyId
      description
      duns
      employees
      entityUseCode
      fax
      groupId
      id
      industryId
      name
      netPaymentDays
      ownerUserId
      phone
      shippingCity
      shippingCountry
      shippingState
      shippingStreet
      shippingZip
      taxNumber
      timezone
      updatedAt
      website
    }
  }
}`;

/**
 * Fetches tenant information by code
 * @param {string} code - Unique code for the tenant
 * @returns {Promise<NonNullable<Query['tenant']>>} Tenant object
 */
export default async function getTenantByCode(
  this: Bunny,
  code: string
): Promise<NonNullable<Query['tenant']> | undefined> {
  const variables = {
    code,
  };

  const res = await this.query<{
    tenant: NonNullable<Query['tenant']>
  }>(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.tenant;
}
