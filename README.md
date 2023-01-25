# bunny-node

A node sdk for Bunny CRM

## Setup

Install the latest package.

```sh
npm install @bunnyapp/api-client --save
```

Create a Bunny api client using either a valid access token or client credentials.

### Access Token

The benefit of providing an accessToken is the request will be faster as an access token does not need to be generated. The
downside of this approach is that if the token expires then your requests will start to fail.

```js
const BunnyClient = require("@bunnyapp/api-client");
const bunny = new BunnyClient({
  baseUrl: "https://<subdomain>.bunny.com",
  accessToken: "<bunny-access-token>",
});
```

### Client Credentials

Alternately you can provide clientId, clientSecret, & scope. In this case the client will generate an access token and if the token expires it will generate another one.

```js
const BunnyClient = require("@bunnyapp/api-client");
const bunny = new BunnyClient({
  baseUrl: "https://<subdomain>.bunny.com",
  clientId: "<bunny-client-id>",
  clientSecret: "<bunny-client-secret>",
  scope: "standard:read standard:write",
});
```

## Convenience methods

This SDK wrappers several of the common Bunny API requests.

```js
// Create a new subscription
bunny.createSubscription("priceListCode", {
  trial: true,
  accountName: "accountName",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  tenantCode: "remoteId",
});

// Get a session token for the Bunny customer portal
bunny.createPortalSession("tenantCode");

// Track usage for billing
bunny.trackUsage(featureCode, quantity, tenantCode, usageAt);
```

## Perform a query

If the convenience methods on this SDK are not enough and you need more control over queries or mutations then you can make an async request against the Bunny GraphQL API.

```js
let query = `query tenants ($filter: String, $limit: Int) {
    tenants (filter: $filter, limit: $limit) {
        platform {
            id
            name
            code
        }
        id
        name
        code
    }
}`;

let variables = {
  filter: "",
  limit: 10,
};

let res = await bunny.query(query, variables);
```

## Validate a webhook payload

When Bunny sends a webhook request it includes a `x-bunny-signature` header which can be used to validate the authenticity of the payload body.

Bunny will provide a signing token which you will need to store in your application and use for validating the webhook.

```js
let signature = req.headers["x-bunny-signature"];
let payload = req.body;
let signingToken = "<secret signing token>";

let valid = bunny.webhooks.validate(signature, payload, signingToken);
```

## Test

Run unit tests

```sh
npm test
```
