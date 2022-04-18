var assert = require("assert");
var axios = require("axios");

var Webhooks = require("./webhooks");

class Bunny {
  constructor(options = {}) {
    if (!(this instanceof Bunny)) return new Bunny();
    assert(options.baseUrl, "Bunny base url required");
    assert(options.accessToken, "Bunny access token required");

    this.client = axios.create({
      headers: {
        "User-Agent": "Bunny-node",
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

module.exports = Bunny;
