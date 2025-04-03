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

This SDK provides helper methods for common Bunny API operations. The response types match the GraphQL schema.

**TypeScript:**

```typescript
import {
  SubscriptionOptions,
  Subscription,
  Mutation,
  Tenants,
} from "@bunnyapp/api-client";

// Create a new subscription
const subscription: Subscription = await bunny.subscriptionCreate(
  "priceListCode",
  {
    // Subscription settings
    trial: false, // Optional: Start with a trial period
    evergreen: true, // Optional: Auto-renew subscription

    // Account identification (Must use either accountId OR account details)
    accountId: "existing-123", // Required unless using accountName: Use existing account

    // Account details (used if accountId is not provided)
    accountName: "Acme Corp", // Required unless using accountId: Company/Account name
    ownerUserId: "user-123",
    phone: "555-0123",
    fax: "555-0124",
    website: "www.acme.com",

    // Optional: Billing address
    billingStreet: "123 Main St",
    billingCity: "San Francisco",
    billingZip: "94105",
    billingState: "CA",
    billingCountry: "US",

    // Billing contact information
    firstName: "John", // Required
    lastName: "Doe",
    email: "john@acme.com", // Required
    mobile: "555-0125",
    salutation: "Mr",
    title: "CEO",

    // Optional: Billing contact mailing address
    mailingStreet: "456 Market St",
    mailingCity: "San Francisco",
    mailingZip: "94105",
    mailingState: "CA",
    mailingCountry: "US",

    // Optional: Tenant information
    tenantCode: "tenant-123",
    tenantName: "Acme Team",
  }
);

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
  // Subscription settings
  trial: false, // Optional: Start with a trial period
  evergreen: true, // Optional: Auto-renew subscription

  // Account identification (Must use either accountId OR account details)
  accountId: "existing-123", // Required unless using accountName: Use existing account

  // Account details (used if accountId is not provided)
  accountName: "Acme Corp", // Required unless using accountId: Company/Account name
  ownerUserId: "user-123",
  phone: "555-0123",
  fax: "555-0124",
  website: "www.acme.com",

  // Optional: Billing address
  billingStreet: "123 Main St",
  billingCity: "San Francisco",
  billingZip: "94105",
  billingState: "CA",
  billingCountry: "US",

  // Billing contact information
  firstName: "John", // Required
  lastName: "Doe",
  email: "john@acme.com", // Required
  mobile: "555-0125",
  salutation: "Mr",
  title: "CEO",

  // Optional: Billing contact mailing address
  mailingStreet: "456 Market St",
  mailingCity: "San Francisco",
  mailingZip: "94105",
  mailingState: "CA",
  mailingCountry: "US",

  // Optional: Tenant information
  tenantCode: "tenant-123",
  tenantName: "Acme Team",
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
import { Subscription } from "@bunnyapp/api-client";

try {
  const subscription: Subscription = await bunny.subscriptionCreate(
    "priceListCode",
    {
      trial: true,
      evergreen: true,
      accountName: "Test Account",
    }
  );
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
  .then((subscription: Subscription) => {
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

## Direct GraphQL queries

If the helper methods don't cover your needs, you can make direct GraphQL queries. The SDK provides full TypeScript support for the GraphQL schema.

**TypeScript:**

```typescript
import { Tenants } from "@bunnyapp/api-client";

// Example using generated GraphQL types
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

// Use the generated Tenants type instead of custom TenantsResponse interface
const response = await bunny.query<{ data: { tenants: Tenants[] } }>(
  query,
  variables
);
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
