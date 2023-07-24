const query = `query tenant ($code: String!) {
  tenant (code: $code) {
    id
    code
    name
    subdomain
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
