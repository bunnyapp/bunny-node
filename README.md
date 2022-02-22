# recur-node

A node sdk for Recur CRM

## Setup

Install the latest package.

```sh
npm install recurcrm --save
```

Create a client providing baseUrl and accessToken.

```js
const Recur = require("recurcrm");
const recur = new Recur({
  baseUrl: "https://<subdomain>.recurcrm.com",
  accessToken: "<recur-access-token>",
});
```

## Convenience methods

- Not implemented yet

This SDK wrappers several of the common Recur API requests.

```
recur.createTrial()
recur.updateSubscription()
```

## Perform a query

If the convenience methods on this SDK are not enough and you need more control over queries or mutations then you can make an async request against the Recur GraphQL API.

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

let res = await recur.query(query, variables);
```

## Validate a webhook payload

When Recur sends a webhook request it includes a `x-recur-signature` header which can be used to validate the authenticity of the payload body.

Recur will provide a signing token which you will need to store in your application and use for validating the webhook.

```js
let signature = req.headers["x-recur-signature"];
let payload = req.body;
let signingToken = "<secret signing token>";

let valid = recur.webhooks.validate(actualSignature, payload, signingToken);
```

## Test

Run unit tests

```sh
npm test
```
