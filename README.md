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

**TypeScript:**

```typescript
import Bunny from "@bunnyapp/api-client";

const bunny = new Bunny({
  baseUrl: "https://<subdomain>.bunny.com",
  accessToken: "<bunny-access-token>",
});
```

**JavaScript:**

```javascript
const BunnyClient = require("@bunnyapp/api-client");

const bunny = new BunnyClient({
  baseUrl: "https://<subdomain>.bunny.com",
  accessToken: "<bunny-access-token>",
});
```

### Client Credentials

Alternately you can provide clientId, clientSecret, & scope. In this case the client will generate an access token and if the token expires it will generate another one.

**TypeScript:**

```typescript
import Bunny from "@bunnyapp/api-client";

const bunny = new Bunny({
  baseUrl: "https://<subdomain>.bunny.com",
  clientId: "<bunny-client-id>",
  clientSecret: "<bunny-client-secret>",
  scope: "standard:read standard:write",
});
```

**JavaScript:**

```javascript
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

**TypeScript:**

```typescript
interface BillingContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  salutation?: string;
  title?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingZip?: string;
  mailingState?: string;
  mailingCountry?: string;
}

interface SubscriptionOptions {
  trial?: boolean;
  evergreen?: boolean;
  accountId?: string;
  accountName?: string;
  ownerUserId?: string;
  phone?: string;
  fax?: string;
  website?: string;
  billingStreet?: string;
  billingCity?: string;
  billingZip?: string;
  billingState?: string;
  billingCountry?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  salutation?: string;
  title?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingZip?: string;
  mailingState?: string;
  mailingCountry?: string;
  tenantCode?: string;
  tenantName?: string;
}

interface SubscriptionResponse {
  id: string;
  account: {
    id: string;
    name: string;
    contacts: Array<{
      id: string;
      firstName: string;
      lastName: string;
    }>;
  };
  trialStartDate: string;
  trialEndDate: string;
  startDate: string;
  endDate: string;
  state: string;
  plan: {
    code: string;
    name: string;
  };
  priceList: {
    code: string;
    name: string;
  };
  tenant: {
    id: string;
    code: string;
    name: string;
    account: {
      id: string;
      name: string;
      billingDay: number;
    };
  };
}

// Create a new subscription
const subscription = await bunny.subscriptionCreate("priceListCode", {
  trial: true,
  evergreen: true,
  accountName: "accountName",
  firstName: "firstName",
  lastName: "lastName",
  email: "email@example.com",
  tenantCode: "remoteId",
});

// Get a session token for the Bunny customer portal
const portalSession = await bunny.portalSessionCreate("tenantCode");

// Optionally supply a return url to get back to your app
const portalSessionWithUrl = await bunny.portalSessionCreate(
  "tenantCode",
  "https://example.com"
);

// Default session length is 24 hours but you can change it. e.g 12 hours
const portalSessionWithDuration = await bunny.portalSessionCreate(
  "tenantCode",
  "https://example.com",
  12
);

// Track usage for billing
const usageTracking = await bunny.featureUsageCreate(
  "featureCode",
  1,
  "subscriptionId",
  new Date()
);

// Update account details including billing address for account
const updatedAccount = await bunny.accountUpdateByTenantCode("tenantCode", {
  billingStreet: "123 Main Street",
  billingCity: "Pleasantville",
  billingState: "CA",
  billingZip: "90210",
  billingCountry: "US",
});
```

**JavaScript:**

```javascript
// Create a new subscription
const subscription = await bunny.subscriptionCreate("priceListCode", {
  trial: true,
  evergreen: true,
  accountName: "accountName",
  firstName: "firstName",
  lastName: "lastName",
  email: "email@example.com",
  tenantCode: "remoteId",
});

// Get a session token for the Bunny customer portal
const portalSession = await bunny.portalSessionCreate("tenantCode");

// Optionally supply a return url to get back to your app
const portalSessionWithUrl = await bunny.portalSessionCreate(
  "tenantCode",
  "https://example.com"
);

// Default session length is 24 hours but you can change it. e.g 12 hours
const portalSessionWithDuration = await bunny.portalSessionCreate(
  "tenantCode",
  "https://example.com",
  12
);

// Track usage for billing
const usageTracking = await bunny.featureUsageCreate(
  "featureCode",
  1,
  "subscriptionId",
  new Date()
);

// Update account details including billing address for account
const updatedAccount = await bunny.accountUpdateByTenantCode("tenantCode", {
  billingStreet: "123 Main Street",
  billingCity: "Pleasantville",
  billingState: "CA",
  billingZip: "90210",
  billingCountry: "US",
});
```

## Error handling

If there is an error with a helper method an exception will be raised.

**TypeScript:**

```typescript
try {
  const subscription = await bunny.subscriptionCreate("priceListCode", {
    trial: true,
    evergreen: true,
    accountName: "Test Account",
  });
  // Handle successful subscription
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

// Or using promises
bunny
  .subscriptionCreate("priceListCode", {
    trial: true,
    evergreen: true,
    accountName: "Test Account",
  })
  .then((subscription) => {
    // Handle successful subscription
  })
  .catch((error: Error) => {
    console.error(error.message);
  });
```

**JavaScript:**

```javascript
try {
  const subscription = await bunny.subscriptionCreate("priceListCode", {
    trial: true,
    evergreen: true,
    accountName: "Test Account",
  });
  // Handle successful subscription
} catch (error) {
  console.error(error.message);
}

// Or using promises
bunny
  .subscriptionCreate("priceListCode", {
    trial: true,
    evergreen: true,
    accountName: "Test Account",
  })
  .then((subscription) => {
    // Handle successful subscription
  })
  .catch((error) => {
    console.error(error.message);
  });
```

## Perform a query

If the convenience methods on this SDK are not enough and you need more control over queries or mutations then you can make an async request against the Bunny GraphQL API.

The response will contain the raw graphql json.

**TypeScript:**

```typescript
interface QueryVariables {
  filter: string;
  limit: number;
}

interface TenantsResponse {
  data: {
    tenants: Array<{
      platform: {
        id: string;
        name: string;
        code: string;
      };
      id: string;
      name: string;
      code: string;
    }>;
  };
}

const query = `query tenants ($filter: String, $limit: Int) {
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

const variables: QueryVariables = {
  filter: "",
  limit: 10,
};

const response = await bunny.query<TenantsResponse>(query, variables);
```

**JavaScript:**

```javascript
const query = `query tenants ($filter: String, $limit: Int) {
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

const variables = {
  filter: "",
  limit: 10,
};

const response = await bunny.query(query, variables);
```

## Validate a webhook payload

When Bunny sends a webhook request it includes a `x-bunny-signature` header which can be used to validate the authenticity of the payload body.

Bunny will provide a signing token which you will need to store in your application and use for validating the webhook.

**TypeScript:**

```typescript
interface WebhookRequest {
  headers: {
    "x-bunny-signature": string;
  };
  body: unknown;
}

const signature: string = req.headers["x-bunny-signature"];
const payload: unknown = req.body;
const signingToken: string = "<secret signing token>";

const valid: boolean = bunny.webhooks.validate(
  signature,
  payload,
  signingToken
);
```

**JavaScript:**

```javascript
const signature = req.headers["x-bunny-signature"];
const payload = req.body;
const signingToken = "<secret signing token>";

const valid = bunny.webhooks.validate(signature, payload, signingToken);
```

## Test

Run unit tests

```sh
npm test
```
