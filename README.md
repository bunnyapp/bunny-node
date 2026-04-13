# bunny-node

A Node.js SDK for the [Bunny CRM](https://bunny.com) API.

## Installation

```sh
npm install @bunnyapp/api-client --save
```

## Setup

Create a Bunny client using either an access token or client credentials.

### Access Token

Requests are faster since no token exchange is required. However, if the token expires your requests will fail.

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
const Bunny = require("@bunnyapp/api-client");

const bunny = new Bunny({
  baseUrl: "https://<subdomain>.bunny.com",
  accessToken: "<bunny-access-token>",
});
```

### Client Credentials

The client automatically fetches and refreshes access tokens using OAuth2 client credentials.

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
const Bunny = require("@bunnyapp/api-client");

const bunny = new Bunny({
  baseUrl: "https://<subdomain>.bunny.com",
  clientId: "<bunny-client-id>",
  clientSecret: "<bunny-client-secret>",
  scope: "standard:read standard:write",
});
```

### Webhook Signing Token (optional)

If you plan to validate incoming webhook signatures, you can provide your signing token at construction time so you don't need to pass it on every call:

```typescript
const bunny = new Bunny({
  baseUrl: "https://<subdomain>.bunny.com",
  accessToken: "<bunny-access-token>",
  webhookSigningToken: "<secret-signing-token>",
});
```

---

## Helper methods

The SDK exposes helper methods for common operations. All methods return typed objects matching the Bunny GraphQL schema and throw an `Error` on failure.

### Subscriptions

#### `subscriptionCreate(priceListCode, options)`

Create a new subscription. Either `accountId` (to attach to an existing account) or `accountName` (to create a new account) is required.

```typescript
import { Subscription } from "@bunnyapp/api-client";

// Using an existing account
const subscription: Subscription = await bunny.subscriptionCreate(
  "price-list-code",
  {
    accountId: "account-123",
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@acme.com",
  }
);

// Creating a new account
const subscription = await bunny.subscriptionCreate("price-list-code", {
  // Subscription settings
  trial: false,      // Optional: start with a trial period (default: false)
  evergreen: true,   // Optional: auto-renew the subscription (default: true)

  // New account details
  accountName: "Acme Corp",
  ownerUserId: "user-123",
  phone: "555-0123",
  fax: "555-0124",
  website: "www.acme.com",

  // Billing address
  billingStreet: "123 Main St",
  billingCity: "San Francisco",
  billingState: "CA",
  billingZip: "94105",
  billingCountry: "US",

  // Billing contact
  firstName: "John",
  lastName: "Doe",
  email: "john@acme.com",
  mobile: "555-0125",
  salutation: "Mr",
  title: "CEO",

  // Billing contact mailing address
  mailingStreet: "456 Market St",
  mailingCity: "San Francisco",
  mailingState: "CA",
  mailingZip: "94105",
  mailingCountry: "US",

  // Tenant to create alongside the subscription
  tenantCode: "acme-team",
  tenantName: "Acme Team",
});

console.log(subscription.id);        // subscription ID
console.log(subscription.state);     // e.g. "active"
console.log(subscription.tenant.id); // tenant ID
```

#### `subscriptionCancel(subscriptionId)`

Cancel an existing subscription.

```typescript
const cancelled = await bunny.subscriptionCancel("subscription-123");
// Returns true on success, throws on failure
```

---

### Tenants

#### `tenantByCode(code)`

Fetch a tenant and its associated account by tenant code.

```typescript
import { Tenant } from "@bunnyapp/api-client";

const tenant = await bunny.tenantByCode("acme-team");

console.log(tenant.id);                  // tenant ID
console.log(tenant.name);               // tenant name
console.log(tenant.subdomain);          // tenant subdomain
console.log(tenant.account.id);         // account ID
console.log(tenant.account.billingCity); // billing city
```

#### `tenantCreate(name, code, platformCode, accountId, subscriptionId)`

Create a new tenant and associate it with a subscription.

```typescript
const tenant = await bunny.tenantCreate(
  "Acme Team",       // name
  "acme-team",       // unique code
  "platform-code",   // platform code
  "account-123",     // account ID
  "subscription-123" // subscription ID
);

console.log(tenant.id);           // tenant ID
console.log(tenant.platform.code); // platform code
```

#### `tenantUpdate(id, code?, name?)`

Update a tenant's code and/or name.

```typescript
const tenant = await bunny.tenantUpdate(
  "tenant-123",  // tenant ID
  "new-code",    // optional: new code
  "New Name"     // optional: new name
);

console.log(tenant?.id);   // tenant ID
console.log(tenant?.name); // updated name
```

#### `tenantMetricsUpdate(code, lastLogin?, userCount?, utilizationMetrics?)`

Push usage metrics for a tenant. Useful for tracking engagement data in Bunny.

```typescript
await bunny.tenantMetricsUpdate(
  "acme-team",           // tenant code
  new Date(),            // lastLogin: Date or ISO string (optional)
  42,                    // userCount (optional)
  { activeProjects: 10 } // utilizationMetrics: any key/value object (optional)
);
// Returns true on success, throws on failure
```

---

### Accounts

#### `accountUpdateByTenantCode(tenantCode, attributes)`

Update an account's details by looking it up via its tenant code. Accepts any `AccountAttributes` fields.

```typescript
import { AccountAttributes } from "@bunnyapp/api-client";

const account = await bunny.accountUpdateByTenantCode("acme-team", {
  // Billing address
  billingStreet: "123 Main Street",
  billingCity: "Pleasantville",
  billingState: "CA",
  billingZip: "90210",
  billingCountry: "US",

  // Other updatable fields
  name: "Acme Corp",
  phone: "555-0123",
  fax: "555-0124",
  website: "www.acme.com",
  description: "A leading provider of widgets",
  employees: 250,
  annualRevenue: 5000000,
  netPaymentDays: 30,
  currencyId: "currency-id",
  taxNumber: "TAX-12345",
  duns: "123456789",
  entityUseCode: "use-code",
});

console.log(account?.id);          // account ID
console.log(account?.billingCity); // updated city
```

---

### Portal Sessions

#### `portalSessionCreate(tenantCode, returnUrl?, expiryInHours?)`

Generate a session token to embed the Bunny customer portal within your application.

```typescript
// Basic — 24-hour token, no return URL
const token = await bunny.portalSessionCreate("acme-team");

// With a return URL
const token = await bunny.portalSessionCreate(
  "acme-team",
  "https://app.example.com/billing"
);

// Custom expiry (e.g. 4 hours)
const token = await bunny.portalSessionCreate(
  "acme-team",
  "https://app.example.com/billing",
  4
);

// Redirect the user to the portal
res.redirect(`https://<subdomain>.bunny.com/portal?token=${token}`);
```

---

### Feature Usage

#### `featureUsageCreate(featureCode, quantity, subscriptionId, usageAt?)`

Record metered feature usage against a subscription for billing.

```typescript
// Record usage now
const usage = await bunny.featureUsageCreate(
  "api-calls",        // featureCode
  100,                // quantity
  "subscription-123"  // subscriptionId
);

// Record usage at a specific point in time (ISO 8601 string)
const usage = await bunny.featureUsageCreate(
  "api-calls",
  100,
  "subscription-123",
  "2024-03-15T10:00:00Z"
);

console.log(usage.id);              // usage record ID
console.log(usage.quantity);        // 100
console.log(usage.feature.code);    // "api-calls"
console.log(usage.subscription.id); // "subscription-123"
```

---

### Webhooks

#### `bunny.webhooks.validate(signature, rawBody, signingToken?)`

Verify the authenticity of an incoming Bunny webhook. Bunny signs every request with a `x-bunny-signature` header.

> **Important:** Pass the **raw request body** (a `Buffer`), not the parsed JSON. Re-serialising the body can alter characters like `&`, `<`, and `>` causing validation to fail.

**Express example:**

```typescript
import express from "express";

// Capture the raw body before any JSON parsing
app.use("/webhook", express.raw({ type: "application/json" }));

app.post("/webhook", (req, res) => {
  const signature = req.headers["x-bunny-signature"] as string;
  const rawBody = req.body; // Buffer

  // Using the signing token passed at construction time
  const valid = bunny.webhooks.validate(signature, rawBody);

  // Or pass the signing token explicitly
  const valid = bunny.webhooks.validate(signature, rawBody, "<signing-token>");

  if (!valid) {
    return res.status(401).send("Invalid signature");
  }

  const event = JSON.parse(rawBody.toString());
  // process event...
  res.status(200).send("OK");
});
```

**JavaScript:**

```javascript
const express = require("express");

app.use("/webhook", express.raw({ type: "application/json" }));

app.post("/webhook", (req, res) => {
  const signature = req.headers["x-bunny-signature"];
  const rawBody = req.body;

  const valid = bunny.webhooks.validate(signature, rawBody, "<signing-token>");

  if (!valid) {
    return res.status(401).send("Invalid signature");
  }

  const event = JSON.parse(rawBody.toString());
  res.status(200).send("OK");
});
```

---

### Direct GraphQL queries

If a helper doesn't cover your use case, execute any GraphQL query directly. Full TypeScript support is available for all generated schema types.

```typescript
import { Tenant } from "@bunnyapp/api-client";

const query = `
  query tenants($filter: String, $limit: Int) {
    tenants(filter: $filter, limit: $limit) {
      id
      name
      code
      platform {
        id
        name
        code
      }
    }
  }
`;

const response = await bunny.query<{ tenants: Tenant[] }>(query, {
  filter: "",
  limit: 10,
});

const tenants = response.data?.tenants;
```

**JavaScript:**

```javascript
const query = `
  query tenants($filter: String, $limit: Int) {
    tenants(filter: $filter, limit: $limit) {
      id
      name
      code
      platform {
        id
        name
        code
      }
    }
  }
`;

const response = await bunny.query(query, { filter: "", limit: 10 });
const tenants = response.data?.tenants;
```

---

## Error handling

All helper methods throw an `Error` if the request fails or if the API returns errors. Wrap calls in `try/catch` or chain `.catch()`.

**TypeScript:**

```typescript
import { Subscription } from "@bunnyapp/api-client";

// async/await
try {
  const subscription: Subscription = await bunny.subscriptionCreate(
    "price-list-code",
    { accountName: "Acme Corp", firstName: "John", email: "john@acme.com" }
  );
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

// Promise chain
bunny
  .subscriptionCreate("price-list-code", {
    accountName: "Acme Corp",
    firstName: "John",
    email: "john@acme.com",
  })
  .then((subscription: Subscription) => {
    // handle success
  })
  .catch((error: Error) => {
    console.error(error.message);
  });
```

**JavaScript:**

```javascript
try {
  const subscription = await bunny.subscriptionCreate("price-list-code", {
    accountName: "Acme Corp",
    firstName: "John",
    email: "john@acme.com",
  });
} catch (error) {
  console.error(error.message);
}
```

---

## Tests

```sh
npm test
```
