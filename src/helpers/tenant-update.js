const query = `mutation tenantUpdate ($id: ID!, $attributes: TenantAttributes!) {
  tenantUpdate (id: $id, attributes: $attributes) {
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

module.exports = async function (id, code, name) {
  let variables = {
    id: id,
    attributes: {
      code: code?.toString(),
      name: name,
    },
  };

  const res = await this.query(query, variables);
  const tenantUpdate = res?.data?.tenantUpdate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (tenantUpdate?.errors) {
    throw new Error(tenantUpdate.errors.join());
  }

  return tenantUpdate?.tenant;
};
