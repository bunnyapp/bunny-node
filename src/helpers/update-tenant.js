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
  }
}`;

module.exports = async function (id, code, name) {
  let variables = {
    id: id,
    attributes: {
      name: name,
      code: code,
    },
  };
  return this.query(query, variables);
};
