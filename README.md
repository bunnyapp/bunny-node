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

## Helper methods

This SDK wrappers several of the common Bunny API requests. The response varies based on the method that is used.

```js
// Create a new subscription
const res = await bunny.subscriptionCreate("priceListCode", {
  trial: true,
  accountName: "accountName",
  firstName: "firstName",
  lastName: "lastName",
  email: "email@example.com",
  tenantCode: "remoteId",
});

// On success res will be a subscription object
{
  id: '17',
  account: { id: '18', name: 'accountName', contacts: [ [Object] ] },
  trialStartDate: '2023-07-17',
  trialEndDate: '2023-07-30',
  startDate: '2023-07-31',
  endDate: '2024-07-30',
  state: 'TRIAL',
  plan: { code: 'bunny_medium', name: 'Medium' },
  priceList: { code: 'bunny_medium_monthly', name: 'Monthly' },
  tenant: { id: '12', code: 'remoteId', name: 'accountName' }
}


// Get a session token for the Bunny customer portal
const res = await bunny.portalSessionCreate("tenantCode");

// Optionally supply a return url to get back to your app
const res = await bunny.portalSessionCreate(
  "tenantCode",
  "https://example.com"
);

// Default session length is 24 hours but you can change it. e.g 12 hours
const res = await bunny.portalSessionCreate(
  "tenantCode",
  "https://example.com",
  12
);

// Track usage for billing
const res = await bunny.featureUsageCreate(
  featureCode,
  quantity,
  tenantCode,
  usageAt
);
```

## Error handling

If there is an error with a helper method an exception will be raised.

```js
try {
  const res = await bunny.subscriptionCreate(...);
  // Do something
} catch (error) {
  console.log(error);
}

or

bunny.subscriptionCreate(...).then((res) => {
  // Do something
}).catch((error) => {
  console.log(error);
})
```

## Perform a query

If the convenience methods on this SDK are not enough and you need more control over queries or mutations then you can make an async request against the Bunny GraphQL API.

The response will contain the raw graphql json.

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
