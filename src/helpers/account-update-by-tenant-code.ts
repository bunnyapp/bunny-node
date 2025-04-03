import { Account, AccountAttributes, Mutation } from '../generated/graphql';
import Bunny from '../';

const query = `mutation accountUpdate ($id: ID!, $attributes: AccountAttributes!) {
  accountUpdate (id: $id, attributes: $attributes) {
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
      errors
  }
}`;

/**
 * Update an account by tenant code
 * @param {string} tenantCode The unique code that represents the tenant
 * @param {AccountAttributes} attributes The attributes to update the account with
 * @returns {Promise<NonNullable<NonNullable<Mutation['accountUpdate']>['account']> | undefined>} The updated account
 */
export default async function accountUpdateByTenantCode(this: Bunny, tenantCode: string, attributes: AccountAttributes): Promise<NonNullable<NonNullable<Mutation['accountUpdate']>['account']> | undefined> {
  const tenant = await this.tenantByCode(tenantCode);
  if (!tenant) {
    throw new Error('Tenant not found');
  }

  const variables = {
    id: tenant.account.id,
    attributes: attributes,
  };

  const res = await this.query<{
    accountUpdate: NonNullable<Mutation['accountUpdate']>
  }>(query, variables);

  const accountUpdate = res?.data?.accountUpdate;

  if (res?.errors) {
    throw new Error(Array.isArray(res.errors) ? res.errors.map(e => e.message).join() : res.errors);
  }

  if (accountUpdate?.errors) {
    throw new Error(Array.isArray(accountUpdate.errors) ? accountUpdate.errors.join() : accountUpdate.errors);
  }

  return accountUpdate?.account ?? undefined;
}
