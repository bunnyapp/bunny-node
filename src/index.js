var assert = require("assert");
var axios = require("axios");

var Webhooks = require("./webhooks");

class Bunny {
  constructor(options = {}) {
    if (!(this instanceof Bunny)) return new Bunny();
    assert(options.baseUrl, "Bunny base url required");

    this.options = options;
    this.retryEnabled = false;

    if (options.accessToken == undefined) {
      assert(options.clientId, "Bunny API clientId required");
      assert(options.clientSecret, "Bunny API clientSecret required");
      assert(options.scope, "Bunny API scope required");
      this.retryEnabled = true;
    }

    this.client = axios.create({
      headers: {
        "User-Agent": "Bunny-node",
      },
      baseURL: options.baseUrl,
    });

    this.client.interceptors.response.use(null, async (error) => {
      if (
        this.retryEnabled &&
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

      console.log("Authorization error: ", error);

      if (error.response?.data?.error_description) {
        return Promise.reject(error.response.data.error_description);
      }

      return Promise.reject("Invalid access token");
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

Bunny.prototype.subscriptionCreate = require("./helpers/subscription-create.js");
Bunny.prototype.subscriptionCancel = require("./helpers/subscription-cancel.js");
Bunny.prototype.tenantByCode = require("./helpers/tenant-by-code.js");
Bunny.prototype.tenantCreate = require("./helpers/tenant-create.js");
Bunny.prototype.tenantUpdate = require("./helpers/tenant-update.js");
Bunny.prototype.featureUsageCreate = require("./helpers/feature-usage-create.js");
Bunny.prototype.portalSessionCreate = require("./helpers/portal-session-create.js");
Bunny.prototype.accountUpdateByTenantCode = require("./helpers/account-update-by-tenant-code.js");
Bunny.prototype.tenantMetricsUpdate = require("./helpers/tenant-metrics-update.js");

module.exports = Bunny;
