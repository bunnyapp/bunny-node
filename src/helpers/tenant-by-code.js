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
 *
 * @param {string} code Unique code for the tenant
 * @returns {object} Tenant object
 */
module.exports = async function (code) {
  let variables = {
    code: code,
  };

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.tenant;
};
