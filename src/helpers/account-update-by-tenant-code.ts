import { Account, AccountAttributes } from '../generated/graphql';
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

interface QueryResponse {
  data?: {
    accountUpdate?: {
      account?: Account;
      errors?: string[];
    };
  };
  errors?: Array<{ message: string }>;
}

export default async function accountUpdateByTenantCode(this: Bunny, tenantCode: string, attributes: AccountAttributes): Promise<Account | undefined> {
  const tenant = await this.tenantByCode(tenantCode);

  const variables = {
    id: tenant.account.id,
    attributes: attributes,
  };

  const res: QueryResponse = await this.query(query, variables);
  const accountUpdate = res?.data?.accountUpdate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (accountUpdate?.errors) {
    throw new Error(accountUpdate.errors.join());
  }

  return accountUpdate?.account;
};
