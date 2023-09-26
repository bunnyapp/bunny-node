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
        timezone
        updatedAt
        website
      }
      errors
  }
}`;

module.exports = async function (tenantCode, attributes) {
  let tenant = await this.tenantByCode(tenantCode);

  let variables = {
    id: tenant.account.id,
    attributes: attributes,
  };

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.accountUpdate?.account;
};
