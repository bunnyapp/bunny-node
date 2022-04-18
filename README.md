# bunny-node

A node sdk for Bunny CRM

## Setup

Install the latest package.

```sh
npm install bunny --save
```

Create a client providing baseUrl and accessToken.

```js
const Bunny = require("bunny");
const bunny = new Bunny({
  baseUrl: "https://<subdomain>.bunny.com",
  accessToken: "<bunny-access-token>",
});
```

## Convenience methods

- Not implemented yet

This SDK wrappers several of the common Bunny API requests.

```
bunny.createTrial()
bunny.updateSubscription()
```

## Perform a query

If the convenience methods on this SDK are not enough and you need more control over queries or mutations then you can make an async request against the Bunny GraphQL API.

```js
let query = `query environments ($filter: String, $limit: Int) {
    environments (filter: $filter, limit: $limit) {
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
