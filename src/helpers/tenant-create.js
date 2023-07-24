const query = `mutation tenantCreate ($attributes: TenantAttributes!, $subscriptionId: ID!) {
  tenantCreate (attributes: $attributes, subscriptionId: $subscriptionId) {
    tenant {
      code
      id
      name
      platform {
        id
        name
        code
      }
    }
    errors
  }
}`;

/**
 *
 * @param {string} name Account name of the tenant
 * @param {string} code Unique code for the tenant
 * @param {string} platformCode Code for the platform that the tenant is on
 * @param {number} accountId Id of the account that the tenant is being created for
 * @param {number} subscriptionId Id of the subscription that the tenant is being created for
 * @returns
 */
module.exports = async function (
  name,
  code,
  platformCode,
  accountId,
  subscriptionId
) {
  let variables = {
    attributes: {
      name: name,
      code: code,
      accountId: accountId,
      platformCode: platformCode,
    },
    subscriptionId: subscriptionId,
  };

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return res?.data?.tenantCreate?.tenant;
};
