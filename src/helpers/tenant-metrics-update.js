const query = `mutation tenantMetricsUpdate ($code: String!, $attributes:   TenantMetricsAttributes!){
  tenantMetricsUpdate (code: $code, attributes: $attributes) {
    errors
  }
}`;

module.exports = async function (
  code,
  lastLogin,
  userCount,
  utilizationMetrics
) {
  let variables = {
    code: code?.toString(),
    attributes: {
      lastLogin: lastLogin,
      userCount: userCount,
      utilizationMetrics: utilizationMetrics,
    },
  };

  const res = await this.query(query, variables);

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  return true;
};
