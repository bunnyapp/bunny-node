import assert = require("assert");
import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from "axios";
import Webhooks from "./webhooks";
// Import your generated GraphQL types
import subscriptionCreate from "./helpers/subscription-create";
import subscriptionCancel from "./helpers/subscription-cancel";
import tenantByCode from "./helpers/tenant-by-code";
import tenantCreate from "./helpers/tenant-create";
import tenantUpdate from "./helpers/tenant-update";
import featureUsageCreate from "./helpers/feature-usage-create";
import portalSessionCreate from "./helpers/portal-session-create";
import accountUpdateByTenantCode from "./helpers/account-update-by-tenant-code";
import tenantMetricsUpdate from "./helpers/tenant-metrics-update";

// Export all types for consumers
export * from './types';

declare module 'axios' {
  interface InternalAxiosRequestConfig {
    retry?: boolean;
  }
}

interface BunnyOptions {
  baseUrl?: string;
  accessToken?: string;
  clientId?: string;
  clientSecret?: string;
  scope?: string;
  webhookSigningToken?: string;
}

interface BunnyErrorResponse {
  error_description?: string;
}

class Bunny {
  options!: BunnyOptions;
  retryEnabled!: boolean;
  client!: AxiosInstance;
  webhooks!: Webhooks;

  // Properly type the helper methods
  subscriptionCreate!: typeof subscriptionCreate;
  subscriptionCancel!: typeof subscriptionCancel;
  tenantByCode!: typeof tenantByCode;
  tenantCreate!: typeof tenantCreate;
  tenantUpdate!: typeof tenantUpdate;
  featureUsageCreate!: typeof featureUsageCreate;
  portalSessionCreate!: typeof portalSessionCreate;
  accountUpdateByTenantCode!: typeof accountUpdateByTenantCode;
  tenantMetricsUpdate!: typeof tenantMetricsUpdate;

  constructor(options: BunnyOptions = {}) {
    if (!(this instanceof Bunny)) return new Bunny(options);
    assert(options.baseUrl, "Bunny base url required");

    this.options = options;
    this.retryEnabled = false;

    if (!options.accessToken) {
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

    this.client.interceptors.response.use(null, async (error: AxiosError<BunnyErrorResponse>) => {
      if (
        this.retryEnabled &&
        error.config &&
        error.response &&
        error.response.status === 401 &&
        !error.config.retry &&
        error.config.url !== "/oauth/token"
      ) {
        const accessToken = await this.fetchAccessToken();
        error.config.retry = true;
        error.config.headers["Authorization"] = `bearer ${accessToken}`;
        return axios.request(error.config);
      }

      if (error.response?.data?.error_description) {
        return Promise.reject(error.response.data.error_description);
      }

      return Promise.reject(error.response?.data);
    });

    this.webhooks = new Webhooks(options.webhookSigningToken);
  }

  async fetchAccessToken(): Promise<string> {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: this.options.clientId!,
      client_secret: this.options.clientSecret!,
      scope: this.options.scope!,
    });

    const res = await this.client.post("/oauth/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return res?.data?.access_token;
  }

  /**
   * Execute a GraphQL query against the Bunny API
   * @template TData The expected shape of the response data
   * @template TVariables The shape of the variables object
   * @param {string} query The GraphQL query string
   * @param {TVariables} [variables] Optional variables for the query
   * @returns {Promise<{ data?: TData; errors?: Array<{ message: string }> }>}
   */
  async query<TData = unknown, TVariables = Record<string, unknown>>(
    query: string,
    variables?: TVariables
  ): Promise<{ data?: TData; errors?: Array<{ message: string }> }> {
    const body = {
      query,
      variables,
    };

    if (!this.options.accessToken) {
      this.options.accessToken = await this.fetchAccessToken();
    }

    const res = await this.client.post("/graphql", body, {
      headers: {
        Authorization: `bearer ${this.options.accessToken}`,
      },
    });

    return res.data;
  }
}

// Attach helper methods (you'll need to type these too, see below)
Bunny.prototype.subscriptionCreate = subscriptionCreate;
Bunny.prototype.subscriptionCancel = subscriptionCancel;
Bunny.prototype.tenantByCode = tenantByCode;
Bunny.prototype.tenantCreate = tenantCreate;
Bunny.prototype.tenantUpdate = tenantUpdate;
Bunny.prototype.featureUsageCreate = featureUsageCreate;
Bunny.prototype.portalSessionCreate = portalSessionCreate;
Bunny.prototype.accountUpdateByTenantCode = accountUpdateByTenantCode;
Bunny.prototype.tenantMetricsUpdate = tenantMetricsUpdate;

// Support both default export and CommonJS module.exports
export default Bunny;
module.exports = Bunny;
module.exports.default = Bunny;