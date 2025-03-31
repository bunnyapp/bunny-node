import Bunny from '../';

interface Account {
  accountTypeId: string;
  addressValidated: boolean;
  annualRevenue: number;
  billingCity: string;
  billingContactId: string;
  billingCountry: string;
  billingDay: number;
  billingState: string;
  billingStreet: string;
  billingZip: string;
  code: string;
  createdAt: string;
  currencyId: string;
  description: string;
  duns: string;
  employees: number;
  entityUseCode: string;
  fax: string;
  groupId: string;
  id: string;
  industryId: string;
  name: string;
  netPaymentDays: number;
  ownerUserId: string;
  phone: string;
  shippingCity: string;
  shippingCountry: string;
  shippingState: string;
  shippingStreet: string;
  shippingZip: string;
  taxNumber: string;
  timezone: string;
  updatedAt: string;
  website: string;
}

interface ProvisioningChange {
  change: string;
  createdAt: string;
  features: string[];
  id: string;
  updatedAt: string;
}

interface Tenant {
  id: string;
  code: string;
  name: string;
  subdomain: string;
  account: Account;
  latestProvisioningChange: ProvisioningChange;
}

interface QueryResponse {
  data?: {
    tenant: Tenant;
  };
  errors?: Array<{ message: string }>;
}

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
    latestProvisioningChange {
        change
        createdAt
        features
        id
        updatedAt
    }
  }
}`;

/**
 * Fetches tenant information by code
 * @param {string} code - Unique code for the tenant
 * @returns {Promise<Tenant | undefined>} Tenant object
 */
export default async function getTenantByCode(
  this: Bunny,
  code: string
): Promise<Tenant | undefined> {
  const variables = {
    code,
  };

  const res: QueryResponse = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.tenant;
}
