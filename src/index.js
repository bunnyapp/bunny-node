var assert = require("assert");
var axios = require("axios");

var Webhooks = require("./webhooks");

class Recur {
  constructor(options = {}) {
    if (!(this instanceof Recur)) return new Recur();
    assert(options.baseUrl, "Recur base url required");
    assert(options.accessToken, "Recur access token required");

    this.client = axios.create({
      headers: {
        "User-Agent": "Recur-node",
        Authorization: `bearer ${options.accessToken}`,
      },
      baseUrl: options.baseUrl,
      validateStatus: function (status) {
        return status >= 200 && status < 500; // only throw errors on 5xx
      },
    });

    this.webhooks = new Webhooks(options.webhookSigningToken);
  }
  async query(query, variables) {
    let body = {
      query,
      variables,
    };

    let res = await this.client.post("/graphql", body);

    return res.data;
  }
}

module.exports = Recur;
