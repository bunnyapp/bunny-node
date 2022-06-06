var assert = require("assert");
var axios = require("axios");

var Webhooks = require("./webhooks");

class Bunny {
  constructor(options = {}) {
    if (!(this instanceof Bunny)) return new Bunny();
    assert(options.baseUrl, "Bunny base url required");

    this.options = options;

    if (options.accessToken == undefined) {
      assert(options.clientId, "Bunny API clientId required");
      assert(options.clientSecret, "Bunny API clientSecret required");
      assert(options.scope, "Bunny API scope required");
    }

    this.client = axios.create({
      headers: {
        "User-Agent": "Bunny-node",
      },
      baseURL: options.baseUrl,
    });

    this.client.interceptors.response.use(null, async (error) => {
      if (
        error.config &&
        error.response &&
        error.response.status === 401 &&
        !error.config.retry &&
        error.config.url != "/oauth/token"
      ) {
        const accessToken = await this.fetchAccessToken();

        error.config.retry = true;
        error.config.headers["Authorization"] = `bearer ${accessToken}`;

        return axios.request(error.config);
      }

      return Promise.reject(error);
    });

    this.webhooks = new Webhooks(options.webhookSigningToken);
  }

  async fetchAccessToken() {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      scope: this.options.scope,
    });

    let res = await this.client.post("/oauth/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return res?.data?.access_token;
  }

  async query(query, variables) {
    let body = {
      query,
      variables,
    };

    if (this.options.accessToken == undefined) {
      this.options.accessToken = await this.fetchAccessToken();
    }

    let res = await this.client.post("/graphql", body, {
      headers: {
        Authorization: `bearer ${this.options.accessToken}`,
      },
    });

    return res.data;
  }
}

Bunny.prototype.createSubscription = require("./helpers/create-subscription.js");
Bunny.prototype.createEnvironment = require("./helpers/create-environment.js");
Bunny.prototype.trackUsage = require("./helpers/track-usage.js");

module.exports = Bunny;
