/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Big decimal of up to 12 digits and 21 decimals, transported as a string */
  BigDecimal: { input: any; output: any; }
  /** Dynamic component value */
  DynamicComponentValue: { input: any; output: any; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
};

/** An account record is used to represent a customer or trialist */
export type Account = {
  __typename?: 'Account';
  /** The type of account */
  accountType?: Maybe<AccountType>;
  /** Type of account */
  accountTypeId: Scalars['ID']['output'];
  /** Address validated status */
  addressValidated: Scalars['Boolean']['output'];
  /** Annual revenue */
  annualRevenue?: Maybe<Scalars['Int']['output']>;
  /** ARR (Annual Recurring Revenue) amount */
  arr?: Maybe<Scalars['Float']['output']>;
  balances: Array<AccountBalance>;
  /** City for billing */
  billingCity?: Maybe<Scalars['String']['output']>;
  /** Contact for billing correspondence */
  billingContact?: Maybe<Contact>;
  /** Contact for billing correspondence */
  billingContactId?: Maybe<Scalars['ID']['output']>;
  /** Country for billing */
  billingCountry?: Maybe<Scalars['String']['output']>;
  /** Day of the month to process billing */
  billingDay?: Maybe<Scalars['Int']['output']>;
  /** State for billing */
  billingState?: Maybe<Scalars['String']['output']>;
  /** Street address for billing */
  billingStreet?: Maybe<Scalars['String']['output']>;
  /** Zip/PostalCode for billing */
  billingZip?: Maybe<Scalars['String']['output']>;
  /** Custom unique identifier for the account */
  code?: Maybe<Scalars['String']['output']>;
  /** List of contacts for the account */
  contacts?: Maybe<Array<Contact>>;
  /** Datetime the account was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Primary currency for billing */
  currency?: Maybe<Currency>;
  /** Primary currency for billing */
  currencyId?: Maybe<Scalars['ID']['output']>;
  /** Default values for a new deal */
  dealDefaults?: Maybe<Deal>;
  /** List of deals for the account */
  deals?: Maybe<Array<Deal>>;
  /** Description of the account */
  description?: Maybe<Scalars['String']['output']>;
  /** Send new invoices to draft state */
  draftInvoices: Scalars['Boolean']['output'];
  /** Dun & Bradstreet Number */
  duns?: Maybe<Scalars['String']['output']>;
  /** Enable sending emails to account contacts */
  emailsEnabled: Scalars['Boolean']['output'];
  /** Number of employees */
  employees?: Maybe<Scalars['Int']['output']>;
  /** The entity this account belongs to */
  entity?: Maybe<Entity>;
  /** The ID of the entity this account belongs to */
  entityId?: Maybe<Scalars['ID']['output']>;
  /** Tax entity use code */
  entityUseCode?: Maybe<Scalars['String']['output']>;
  /** Primary fax number for the account */
  fax?: Maybe<Scalars['String']['output']>;
  /** Group that the account belongs to */
  groupId?: Maybe<Scalars['ID']['output']>;
  /** Unique identifier for the account */
  id: Scalars['ID']['output'];
  /** The industry the account belongs to */
  industry?: Maybe<Industry>;
  /** Industry the account belongs to */
  industryId?: Maybe<Scalars['ID']['output']>;
  /** Invoice template to be used for invoice generation */
  invoiceTemplate?: Maybe<InvoiceTemplate>;
  /** Invoice template to be used for invoice generation */
  invoiceTemplateId?: Maybe<Scalars['ID']['output']>;
  /** Invoices for the account */
  invoices?: Maybe<Array<Invoice>>;
  /** Link to the account's LinkedIn profile */
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  /** MRR (Monthly Recurring Revenue) amount */
  mrr?: Maybe<Scalars['Float']['output']>;
  /** MUR (Monthly Usage Revenue) amount */
  mur?: Maybe<Scalars['Float']['output']>;
  /** Name of the account */
  name?: Maybe<Scalars['String']['output']>;
  /** Payment terms in days */
  netPaymentDays?: Maybe<Scalars['Int']['output']>;
  /** Account owner */
  owner?: Maybe<User>;
  /** Account owner */
  ownerUserId?: Maybe<Scalars['ID']['output']>;
  /** Paying status */
  payingStatus?: Maybe<PayingStatus>;
  /** Payment methods associated with this account */
  paymentMethods?: Maybe<Array<PaymentMethod>>;
  /** Primary phone number for the account */
  phone?: Maybe<Scalars['String']['output']>;
  /** Recurring revenues for the account */
  recurringRevenues?: Maybe<Array<RecurringRevenue>>;
  revenueMovements?: Maybe<Array<RevenueMovement>>;
  /** Secondary billing contact IDs */
  secondaryBillingContactIds?: Maybe<Array<Scalars['ID']['output']>>;
  /** Secondary billing contact IDs */
  secondaryBillingContacts?: Maybe<Array<Contact>>;
  /** City for shipping */
  shippingCity?: Maybe<Scalars['String']['output']>;
  /** Country for shipping */
  shippingCountry?: Maybe<Scalars['String']['output']>;
  /** State for shipping */
  shippingState?: Maybe<Scalars['String']['output']>;
  /** Street address for shipping */
  shippingStreet?: Maybe<Scalars['String']['output']>;
  /** Zip/PostalCode for shipping */
  shippingZip?: Maybe<Scalars['String']['output']>;
  /** List of subscriptions */
  subscriptions?: Maybe<Array<Subscription>>;
  /** Tax number */
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** The tax number supplied has been validated with an official source */
  taxNumberValidated?: Maybe<Scalars['Boolean']['output']>;
  /** Time zone for the account */
  timezone?: Maybe<Scalars['String']['output']>;
  transactions?: Maybe<Array<Transaction>>;
  /** Datetime the account was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Website of the account */
  website?: Maybe<Scalars['String']['output']>;
};


/** An account record is used to represent a customer or trialist */
export type AccountInvoicesArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


/** An account record is used to represent a customer or trialist */
export type AccountRecurringRevenuesArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


/** An account record is used to represent a customer or trialist */
export type AccountSubscriptionsArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

/** Attributes for creating and updating an account */
export type AccountAttributes = {
  /** The type of account */
  accountTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Annual revenue */
  annualRevenue?: InputMaybe<Scalars['Int']['input']>;
  /** City for billing */
  billingCity?: InputMaybe<Scalars['String']['input']>;
  /** Contact for billing correspondence */
  billingContact?: InputMaybe<ContactAttributes>;
  /** Contact id for billing correspondence */
  billingContactId?: InputMaybe<Scalars['ID']['input']>;
  /** Country for billing */
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  /** State for billing */
  billingState?: InputMaybe<Scalars['String']['input']>;
  /** Street address for billing */
  billingStreet?: InputMaybe<Scalars['String']['input']>;
  /** Zip/PostalCode for billing */
  billingZip?: InputMaybe<Scalars['String']['input']>;
  /** Custom unique identifier for the account */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Primary currency for billing */
  currencyId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of the account */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Send new invoices to draft state */
  draftInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dun & Bradstreet Number */
  duns?: InputMaybe<Scalars['String']['input']>;
  /** Enable sending emails to account contacts */
  emailsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of employees */
  employees?: InputMaybe<Scalars['Int']['input']>;
  /** The entity this account belongs to */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** Tax entity use code */
  entityUseCode?: InputMaybe<Scalars['String']['input']>;
  /** Primary fax number for the account */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** Group that the account belongs to */
  groupId?: InputMaybe<Scalars['ID']['input']>;
  /** Industry the account belongs to */
  industryId?: InputMaybe<Scalars['ID']['input']>;
  /** Invoice template to be used for invoice generation */
  invoiceTemplateId?: InputMaybe<Scalars['ID']['input']>;
  /** Remote IP address of the lead */
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  /** Link to the account's LinkedIn profile */
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of the account */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Payment terms in days */
  netPaymentDays?: InputMaybe<Scalars['Int']['input']>;
  /** Account owner */
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Primary phone number for the account */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Secondary billing contact IDs */
  secondaryBillingContactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** City for shipping */
  shippingCity?: InputMaybe<Scalars['String']['input']>;
  /** Country for shipping */
  shippingCountry?: InputMaybe<Scalars['String']['input']>;
  /** State for shipping */
  shippingState?: InputMaybe<Scalars['String']['input']>;
  /** Street address for shipping */
  shippingStreet?: InputMaybe<Scalars['String']['input']>;
  /** Zip/PostalCode for shipping */
  shippingZip?: InputMaybe<Scalars['String']['input']>;
  /** Tax number */
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  /** Time zone */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** Website of the account */
  website?: InputMaybe<Scalars['String']['input']>;
};

/** An account balance represents the money debited or credited in a given currency */
export type AccountBalance = {
  __typename?: 'AccountBalance';
  /** Account the balance is associated with */
  accountId: Scalars['ID']['output'];
  /** The amount credited or debited */
  balance: Scalars['Float']['output'];
  /** Currency of the amount */
  currencyId: Scalars['String']['output'];
  /** Unique identifier for the account balance */
  id: Scalars['ID']['output'];
};

/** The connection type for AccountBalance. */
export type AccountBalanceConnection = {
  __typename?: 'AccountBalanceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountBalanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AccountBalance>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type AccountBalanceEdge = {
  __typename?: 'AccountBalanceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AccountBalance>;
};

/** The connection type for Account. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Account>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of AccountCreate. */
export type AccountCreatePayload = {
  __typename?: 'AccountCreatePayload';
  account?: Maybe<Account>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of AccountDelete. */
export type AccountDeletePayload = {
  __typename?: 'AccountDeletePayload';
  account?: Maybe<Account>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Account>;
};

/** Autogenerated return type of AccountReset. */
export type AccountResetPayload = {
  __typename?: 'AccountResetPayload';
  errors?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of AccountSignup. */
export type AccountSignupPayload = {
  __typename?: 'AccountSignupPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

/** The type of account */
export type AccountType = {
  __typename?: 'AccountType';
  /** Code for the account type */
  code?: Maybe<Scalars['String']['output']>;
  /** Datetime the account type was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the account type */
  id: Scalars['ID']['output'];
  /** Label for the account type */
  name: Scalars['String']['output'];
  /** Datetime the account type was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for AccountType. */
export type AccountTypeConnection = {
  __typename?: 'AccountTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountTypeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AccountType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type AccountTypeEdge = {
  __typename?: 'AccountTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AccountType>;
};

/** Autogenerated return type of AccountUpdate. */
export type AccountUpdatePayload = {
  __typename?: 'AccountUpdatePayload';
  account?: Maybe<Account>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of AccountValidateAddress. */
export type AccountValidateAddressPayload = {
  __typename?: 'AccountValidateAddressPayload';
  account?: Maybe<Account>;
};

export type AccountingTable = {
  __typename?: 'AccountingTable';
  rows: Array<AccountingTableRow>;
};

export type AccountingTableCell = {
  __typename?: 'AccountingTableCell';
  alignment?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  span?: Maybe<Scalars['Int']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type AccountingTableRow = {
  __typename?: 'AccountingTableRow';
  cells: Array<AccountingTableCell>;
  style?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of ApiAccessTokenCreate. */
export type ApiAccessTokenCreatePayload = {
  __typename?: 'ApiAccessTokenCreatePayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type ApiClient = {
  __typename?: 'ApiClient';
  /** Number of seconds that access tokens will be issued for */
  accessTokenExpiresIn?: Maybe<Scalars['Int']['output']>;
  /** Lets authorization code grant be used to generate access tokens */
  authorizationCodeEnabled: Scalars['Boolean']['output'];
  /** Lets client credentials grant be used to generate access tokens */
  clientCredentialsEnabled: Scalars['Boolean']['output'];
  /** The client_id to use when making authorization requests */
  clientId?: Maybe<Scalars['String']['output']>;
  /** Only returned on creation of an api client */
  clientSecret?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the api client */
  id: Scalars['ID']['output'];
  /** Name of the api client */
  name?: Maybe<Scalars['String']['output']>;
  /** The ID of the user that created the application */
  ownerId?: Maybe<Scalars['ID']['output']>;
  /** Required for authorization_code grant. The callback url of the client. */
  redirectUri?: Maybe<Scalars['String']['output']>;
  /** The scopes that this application can request */
  scopes?: Maybe<Array<Scalars['String']['output']>>;
};

/** Attributes for creating and updating an api client */
export type ApiClientAttributes = {
  /** Number of seconds that access tokens will be issued for */
  accessTokenExpiresIn?: InputMaybe<Scalars['Int']['input']>;
  /** Lets authorization code grant be used to generate access tokens */
  authorizationCodeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lets client credentials grant be used to generate access tokens */
  clientCredentialsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the api client */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Required for authorization_code grant. The callback url of the client. */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  /** The scopes that this application can request */
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The connection type for ApiClient. */
export type ApiClientConnection = {
  __typename?: 'ApiClientConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ApiClientEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ApiClient>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ApiClientCreate. */
export type ApiClientCreatePayload = {
  __typename?: 'ApiClientCreatePayload';
  apiClient?: Maybe<ApiClient>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of ApiClientDelete. */
export type ApiClientDeletePayload = {
  __typename?: 'ApiClientDeletePayload';
  apiClient?: Maybe<ApiClient>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type ApiClientEdge = {
  __typename?: 'ApiClientEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ApiClient>;
};

/** Autogenerated return type of ApiClientSecretRenew. */
export type ApiClientSecretRenewPayload = {
  __typename?: 'ApiClientSecretRenewPayload';
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of ApiClientUpdate. */
export type ApiClientUpdatePayload = {
  __typename?: 'ApiClientUpdatePayload';
  apiClient?: Maybe<ApiClient>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type ApprovalDecision = {
  __typename?: 'ApprovalDecision';
  /** Approval request */
  approvalRequest: ApprovalRequest;
  /** ID of approval request */
  approvalRequestId: Scalars['ID']['output'];
  /** Approver associated with this decision */
  approver: Approver;
  /** ID of approver */
  approverId: Scalars['ID']['output'];
  /** Unique ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Additional notes to this decision */
  notes?: Maybe<Scalars['String']['output']>;
  state: ApprovalRequestState;
};

export type ApprovalRequest = {
  __typename?: 'ApprovalRequest';
  /** List of decisions from approvers reviewing this quote */
  approvalDecisions: Array<ApprovalDecision>;
  /** List of approvers to review this quote */
  approvers: Array<Approver>;
  /** Unique ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Requested quote for approval */
  quote: Quote;
  /** ID of requested quote for approval */
  quoteId: Scalars['ID']['output'];
  state: ApprovalRequestState;
  /** Total amount of users approving this quote */
  totalApprovals: Scalars['Int']['output'];
  /** Total amount of approvers for this quote */
  totalApprovers: Scalars['Int']['output'];
  /** Total amount of users rejecting this quote */
  totalRejections: Scalars['Int']['output'];
  /** List of triggered approval rules for this quote */
  triggeredApprovalRules: Array<ApprovalRule>;
};

export enum ApprovalRequestState {
  /** Approved */
  Approved = 'APPROVED',
  /** Pending */
  Pending = 'PENDING',
  /** Rejected */
  Rejected = 'REJECTED'
}

export type ApprovalRule = {
  __typename?: 'ApprovalRule';
  /** Rule will be applied when active */
  active?: Maybe<Scalars['Boolean']['output']>;
  anyDiscount?: Maybe<Scalars['Int']['output']>;
  anyDiscountEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Approver for this rule */
  approver?: Maybe<Approver>;
  /** ID of approver for this rule */
  approverId?: Maybe<Scalars['ID']['output']>;
  billingPeriod?: Maybe<BillingPeriod>;
  billingPeriodEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** First date the rule will apply */
  fromDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** Unique ID */
  id?: Maybe<Scalars['ID']['output']>;
  isRampEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Rule name */
  name?: Maybe<Scalars['String']['output']>;
  overallQuoteDiscount?: Maybe<Scalars['Int']['output']>;
  overallQuoteDiscountEnabled?: Maybe<Scalars['Boolean']['output']>;
  plan?: Maybe<Plan>;
  planId?: Maybe<Scalars['ID']['output']>;
  planIdEnabled?: Maybe<Scalars['Boolean']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['ID']['output']>;
  productIdEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Last date the rule will apply */
  toDate?: Maybe<Scalars['ISO8601Date']['output']>;
  totalQuoteAmount?: Maybe<Scalars['Int']['output']>;
  totalQuoteAmountEnabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Attributes for creating and updating an approval rule */
export type ApprovalRuleAttributes = {
  /** Rule will be applied when active */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  anyDiscount?: InputMaybe<Scalars['Int']['input']>;
  anyDiscountEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of approver for this rule */
  approverId?: InputMaybe<Scalars['ID']['input']>;
  billingPeriod?: InputMaybe<BillingPeriod>;
  billingPeriodEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** First date the rule will apply */
  fromDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  isRampEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the approval rule */
  name?: InputMaybe<Scalars['String']['input']>;
  overallQuoteDiscount?: InputMaybe<Scalars['Int']['input']>;
  overallQuoteDiscountEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  planId?: InputMaybe<Scalars['ID']['input']>;
  planIdEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  productIdEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Late date the rule will apply */
  toDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  totalQuoteAmount?: InputMaybe<Scalars['Int']['input']>;
  totalQuoteAmountEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The connection type for ApprovalRule. */
export type ApprovalRuleConnection = {
  __typename?: 'ApprovalRuleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ApprovalRuleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ApprovalRule>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ApprovalRuleCreate. */
export type ApprovalRuleCreatePayload = {
  __typename?: 'ApprovalRuleCreatePayload';
  approvalRule?: Maybe<ApprovalRule>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of ApprovalRuleDelete. */
export type ApprovalRuleDeletePayload = {
  __typename?: 'ApprovalRuleDeletePayload';
  approvalRule?: Maybe<ApprovalRule>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type ApprovalRuleEdge = {
  __typename?: 'ApprovalRuleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ApprovalRule>;
};

/** Autogenerated return type of ApprovalRuleUpdate. */
export type ApprovalRuleUpdatePayload = {
  __typename?: 'ApprovalRuleUpdatePayload';
  approvalRule?: Maybe<ApprovalRule>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Approver = {
  __typename?: 'Approver';
  approvalRules?: Maybe<Array<ApprovalRule>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

/** Attributes for creating and updating an approver */
export type ApproverAttributes = {
  /** Name of the approver */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Single-user approver */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for Approver. */
export type ApproverConnection = {
  __typename?: 'ApproverConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ApproverEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Approver>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ApproverCreate. */
export type ApproverCreatePayload = {
  __typename?: 'ApproverCreatePayload';
  approver?: Maybe<Approver>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of ApproverDelete. */
export type ApproverDeletePayload = {
  __typename?: 'ApproverDeletePayload';
  approver?: Maybe<Approver>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type ApproverEdge = {
  __typename?: 'ApproverEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Approver>;
};

/** Autogenerated return type of ApproverUpdate. */
export type ApproverUpdatePayload = {
  __typename?: 'ApproverUpdatePayload';
  approver?: Maybe<Approver>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Attachment = {
  __typename?: 'Attachment';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** The Authorized Object represents the entity for which the authorization was granted */
export type AuthObject = Invoice | Quote;

export type BatchMutation = {
  __typename?: 'BatchMutation';
  mutation: BatchMutationName;
  result: Scalars['JSON']['output'];
};

export type BatchMutationAttributes = {
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  mutation: BatchMutationName;
};

export enum BatchMutationName {
  QuoteChangeAdd = 'QUOTE_CHANGE_ADD',
  QuoteChangeDelete = 'QUOTE_CHANGE_DELETE',
  QuoteChangeUpdate = 'QUOTE_CHANGE_UPDATE',
  SubscriptionCancel = 'SUBSCRIPTION_CANCEL'
}

export type BillRun = {
  __typename?: 'BillRun';
  accountsProcessed?: Maybe<Scalars['Int']['output']>;
  amountInvoiced?: Maybe<Scalars['Float']['output']>;
  billingDate: Scalars['ISO8601Date']['output'];
  currencyId: Scalars['ID']['output'];
  endedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  entity?: Maybe<Entity>;
  entityId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  invoiceSeqEnd?: Maybe<Scalars['Int']['output']>;
  invoiceSeqStart?: Maybe<Scalars['Int']['output']>;
  invoicesGenerated?: Maybe<Scalars['Int']['output']>;
  lastAccountId?: Maybe<Scalars['ID']['output']>;
  startedAt: Scalars['ISO8601DateTime']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

/** The connection type for BillRun. */
export type BillRunConnection = {
  __typename?: 'BillRunConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BillRunEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BillRun>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type BillRunEdge = {
  __typename?: 'BillRunEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<BillRun>;
};

export type BillingCycle = {
  __typename?: 'BillingCycle';
  endDate: Scalars['ISO8601Date']['output'];
  startDate: Scalars['ISO8601Date']['output'];
};

/** Billing details for an account */
export type BillingDetails = {
  __typename?: 'BillingDetails';
  /** City for billing */
  billingCity?: Maybe<Scalars['String']['output']>;
  /** Billing contact */
  billingContact?: Maybe<Contact>;
  /** Country for billing */
  billingCountry?: Maybe<Scalars['String']['output']>;
  /** State for billing */
  billingState?: Maybe<Scalars['String']['output']>;
  /** Street address for billing */
  billingStreet?: Maybe<Scalars['String']['output']>;
  /** Zip/PostalCode for billing */
  billingZip?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency?: Maybe<Currency>;
  /** Name of the account */
  name?: Maybe<Scalars['String']['output']>;
  /** Tax number */
  taxNumber?: Maybe<Scalars['String']['output']>;
};

/** Attributes for creating and updating billing details */
export type BillingDetailsAttributes = {
  /** City for billing */
  billingCity?: InputMaybe<Scalars['String']['input']>;
  /** Email of the billing contact */
  billingContactEmail?: InputMaybe<Scalars['String']['input']>;
  /** Country for billing */
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  /** State for billing */
  billingState?: InputMaybe<Scalars['String']['input']>;
  /** Street address for billing */
  billingStreet?: InputMaybe<Scalars['String']['input']>;
  /** Zip/PostalCode for billing */
  billingZip?: InputMaybe<Scalars['String']['input']>;
  /** Name of the account */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tax number */
  taxNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of BillingDetailsUpdate. */
export type BillingDetailsUpdatePayload = {
  __typename?: 'BillingDetailsUpdatePayload';
  billingDetails?: Maybe<BillingDetails>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export enum BillingPeriod {
  /** Billed Annual */
  Annual = 'ANNUAL',
  /** Billed Monthly */
  Monthly = 'MONTHLY',
  /** Billed Once */
  Once = 'ONCE',
  /** Billed Quarterly */
  Quarterly = 'QUARTERLY',
  /** Billed Semi_annual */
  SemiAnnual = 'SEMI_ANNUAL'
}

export type BillingPeriodAmount = {
  __typename?: 'BillingPeriodAmount';
  /** Total amount to pay for the period duration */
  amount?: Maybe<Scalars['Float']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Proration percentage */
  prorationRate?: Maybe<Scalars['Float']['output']>;
};

/** Campaigns are used to track where contacts and leads originate from */
export type Campaign = {
  __typename?: 'Campaign';
  /** Human-readable, unique reference */
  code?: Maybe<Scalars['String']['output']>;
  /** Number of contacts in this campaign */
  contactCount: Scalars['Int']['output'];
  /** End date of campaign */
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** Unique identifier for the campaign */
  id: Scalars['ID']['output'];
  /** Number of leads in this campaign */
  leadCount: Scalars['Int']['output'];
  /** Campaign name */
  name?: Maybe<Scalars['String']['output']>;
  /** Campaign owner */
  owner?: Maybe<User>;
  /** ID of the user owning this campaign */
  ownerUserId?: Maybe<Scalars['ID']['output']>;
  /** Start date of campaign */
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
};

export type CampaignAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['ISO8601Date']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  /** Account owner */
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  startDate: Scalars['ISO8601Date']['input'];
};

/** The connection type for Campaign. */
export type CampaignConnection = {
  __typename?: 'CampaignConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CampaignEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Campaign>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of CampaignCreate. */
export type CampaignCreatePayload = {
  __typename?: 'CampaignCreatePayload';
  campaign?: Maybe<Campaign>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of CampaignDelete. */
export type CampaignDeletePayload = {
  __typename?: 'CampaignDeletePayload';
  campaign?: Maybe<Campaign>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type CampaignEdge = {
  __typename?: 'CampaignEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Campaign>;
};

/** Autogenerated return type of CampaignUpdate. */
export type CampaignUpdatePayload = {
  __typename?: 'CampaignUpdatePayload';
  campaign?: Maybe<Campaign>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Charge = QuoteCharge | SubscriptionCharge;

export enum ChargeType {
  /** One_time charge */
  OneTime = 'ONE_TIME',
  /** Recurring charge */
  Recurring = 'RECURRING',
  /** Usage charge */
  Usage = 'USAGE'
}

/** Autogenerated return type of Checkout. */
export type CheckoutPayload = {
  __typename?: 'CheckoutPayload';
  invoice?: Maybe<Invoice>;
  payment?: Maybe<Payment>;
  paymentApplication?: Maybe<PaymentApplication>;
  transaction?: Maybe<Transaction>;
};

export type CheckoutPaymentMethodAttributes = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pluginGuid: Scalars['ID']['input'];
  savePaymentMethod?: InputMaybe<Scalars['Boolean']['input']>;
  token: Scalars['String']['input'];
};

export type Company = {
  __typename?: 'Company';
  /** Datetime that the company was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Default role to assign to new users */
  defaultRoleId?: Maybe<Scalars['ID']['output']>;
  inactivityTimeout?: Maybe<Scalars['Int']['output']>;
  /** Whether the company is in migration mode */
  migrationMode: Scalars['Boolean']['output'];
  /** Name of the company */
  name?: Maybe<Scalars['String']['output']>;
  /** Whether outbound email is enabled */
  outboundEmailsEnabled: Scalars['Boolean']['output'];
  /** Identity Provider Issuer */
  samlIssuer?: Maybe<Scalars['String']['output']>;
  /** X.509 Certificate */
  samlSignatureCertificate?: Maybe<Scalars['String']['output']>;
  /** Identity Provider Single Sign-On URL */
  samlSsoUrl?: Maybe<Scalars['String']['output']>;
  ssoEnabled: Scalars['Boolean']['output'];
  ssoGoogleEnabled: Scalars['Boolean']['output'];
  ssoMode: SsoMode;
  /** Datetime that the company was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Whitelisted origin for API requests */
  whitelistedOrigin: Scalars['String']['output'];
};

/** Attributes the company that owns this Bunny account */
export type CompanyAttributes = {
  /** Base currency for the company */
  baseCurrencyId?: InputMaybe<Scalars['String']['input']>;
  /** Default role to assign to new users */
  defaultRoleId?: InputMaybe<Scalars['ID']['input']>;
  inactivityTimeout?: InputMaybe<Scalars['Int']['input']>;
  /** Whether the company is in migration mode */
  migrationMode?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether outbound email is enabled */
  outboundEmailsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identity Provider Issuer */
  samlIssuer?: InputMaybe<Scalars['String']['input']>;
  /** X.509 Certificate */
  samlSignatureCertificate?: InputMaybe<Scalars['String']['input']>;
  /** Identity Provider Single Sign-On URL */
  samlSsoUrl?: InputMaybe<Scalars['String']['input']>;
  ssoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  ssoGoogleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  ssoMode?: InputMaybe<SsoMode>;
  /** Whitelisted origin for API requests */
  whitelistedOrigin?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CompanyUpdate. */
export type CompanyUpdatePayload = {
  __typename?: 'CompanyUpdatePayload';
  company?: Maybe<Company>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** The contact record for a person on an account */
export type Contact = {
  __typename?: 'Contact';
  /** The account the contact belongs to */
  account?: Maybe<Account>;
  /** The account the contact belongs to */
  accountId?: Maybe<Scalars['ID']['output']>;
  /** The campaigns the contact is a member of */
  campaigns: Array<Campaign>;
  /** Custom unique identifier for the contact */
  code?: Maybe<Scalars['String']['output']>;
  /** Datetime the contact was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** A description of the contact */
  description?: Maybe<Scalars['String']['output']>;
  /** Email address of the contact */
  email?: Maybe<Scalars['String']['output']>;
  /** The entity the contact belongs to */
  entityId?: Maybe<Scalars['ID']['output']>;
  /** First name of the contact */
  firstName: Scalars['String']['output'];
  /** Full name of the contact */
  fullName: Scalars['String']['output'];
  /** Unique ID for the contact */
  id: Scalars['ID']['output'];
  /** Last name of the contact */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Link to the contact's LinkedIn profile */
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  /** City for the contact */
  mailingCity?: Maybe<Scalars['String']['output']>;
  /** Country of the contact */
  mailingCountry?: Maybe<Scalars['String']['output']>;
  /** State for the contact */
  mailingState?: Maybe<Scalars['String']['output']>;
  /** Street address for the contact */
  mailingStreet?: Maybe<Scalars['String']['output']>;
  /** Zip/PostalCode for the contact */
  mailingZip?: Maybe<Scalars['String']['output']>;
  /** Primary mobile number for the contact */
  mobile?: Maybe<Scalars['String']['output']>;
  /** Primary phone number for the contact */
  phone?: Maybe<Scalars['String']['output']>;
  /** Allow portal access */
  portalAccess?: Maybe<Scalars['Boolean']['output']>;
  /** Salutation for the contact */
  salutation?: Maybe<Scalars['String']['output']>;
  /** Job title of the contact */
  title?: Maybe<Scalars['String']['output']>;
  /** Datetime the contact was last updated */
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** Attributes for creating and updating a contact */
export type ContactAttributes = {
  /** The account the contact belongs to */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** Campaign code */
  campaignCode?: InputMaybe<Scalars['String']['input']>;
  /** Custom unique identifier for the contact */
  code?: InputMaybe<Scalars['String']['input']>;
  /** A description of the contact */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email address of the contact */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First name of the contact */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Last name of the contact */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Link to the contact's LinkedIn profile */
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  /** City for the contact */
  mailingCity?: InputMaybe<Scalars['String']['input']>;
  /** Country of the contact */
  mailingCountry?: InputMaybe<Scalars['String']['input']>;
  /** State for the contact */
  mailingState?: InputMaybe<Scalars['String']['input']>;
  /** Street address for the contact */
  mailingStreet?: InputMaybe<Scalars['String']['input']>;
  /** Zip/PostalCode of the contact */
  mailingZip?: InputMaybe<Scalars['String']['input']>;
  /** Primary mobile number for the contact */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** Primary phone number for the contact */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Portal access allowed */
  portalAccess?: InputMaybe<Scalars['Boolean']['input']>;
  /** Salutation for the contact */
  salutation?: InputMaybe<Scalars['String']['input']>;
  /** Job title of the contact */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Contact. */
export type ContactConnection = {
  __typename?: 'ContactConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContactEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Contact>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ContactCreate. */
export type ContactCreatePayload = {
  __typename?: 'ContactCreatePayload';
  contact?: Maybe<Contact>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of ContactDelete. */
export type ContactDeletePayload = {
  __typename?: 'ContactDeletePayload';
  contact?: Maybe<Contact>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Contact>;
};

/** Autogenerated return type of ContactUpdate. */
export type ContactUpdatePayload = {
  __typename?: 'ContactUpdatePayload';
  contact?: Maybe<Contact>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** The coupon record that can be applied to a subscription */
export type Coupon = {
  __typename?: 'Coupon';
  /** Is the coupon active */
  active: Scalars['Boolean']['output'];
  /** Unique coupon code */
  couponCode: Scalars['String']['output'];
  /** Datetime the coupon was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Currency ID of the coupon */
  currencyId?: Maybe<Scalars['ID']['output']>;
  /** Description of the coupon */
  description?: Maybe<Scalars['String']['output']>;
  /** Amount of the discount */
  discountAmount?: Maybe<Scalars['Float']['output']>;
  /** Type of discount the coupon applies */
  discountKind: CouponDiscountKind;
  /** Percent of the discount */
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  /** Unique ID for the coupon */
  id: Scalars['ID']['output'];
  /** Name of the coupon */
  name: Scalars['String']['output'];
  /** Plan ID the coupon applies to */
  planId?: Maybe<Scalars['ID']['output']>;
  /** Date the coupon expires */
  redemptionEndDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** Number of times the coupon has been redeemed */
  redemptionsCount?: Maybe<Scalars['Int']['output']>;
  /** Maximum number of times the coupon can be redeemed */
  redemptionsMax?: Maybe<Scalars['Int']['output']>;
  /** Datetime the coupon was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating a coupon */
export type CouponAttributes = {
  /** Is the coupon active */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique coupon code */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /** Currency ID of the coupon */
  currencyId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of the coupon */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Amount of the discount */
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Type of discount the coupon applies */
  discountKind?: InputMaybe<CouponDiscountKind>;
  /** Percent of the discount */
  discountPercentage?: InputMaybe<Scalars['Float']['input']>;
  /** Name of the coupon */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Date the coupon expires */
  redemptionEndDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /** Maximum number of times the coupon can be redeemed */
  redemptionsMax?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Coupon. */
export type CouponConnection = {
  __typename?: 'CouponConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CouponEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Coupon>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of CouponCreate. */
export type CouponCreatePayload = {
  __typename?: 'CouponCreatePayload';
  coupon?: Maybe<Coupon>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of CouponDelete. */
export type CouponDeletePayload = {
  __typename?: 'CouponDeletePayload';
  coupon?: Maybe<Coupon>;
  errors?: Maybe<Scalars['String']['output']>;
};

export enum CouponDiscountKind {
  /** Amount */
  Amount = 'AMOUNT',
  /** Percentage */
  Percentage = 'PERCENTAGE'
}

/** An edge in a connection. */
export type CouponEdge = {
  __typename?: 'CouponEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Coupon>;
};

/** Autogenerated return type of CouponUpdate. */
export type CouponUpdatePayload = {
  __typename?: 'CouponUpdatePayload';
  coupon?: Maybe<Coupon>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type CouponValidate = {
  __typename?: 'CouponValidate';
  couponIsValid: Scalars['Boolean']['output'];
};

export type CreditItemAttributes = {
  amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};

export type CreditNote = {
  __typename?: 'CreditNote';
  account: Account;
  accountId: Scalars['ID']['output'];
  amount: Scalars['Float']['output'];
  amountApplied: Scalars['Float']['output'];
  amountUnapplied: Scalars['Float']['output'];
  appliedToInvoices?: Maybe<InvoiceConnection>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  creditNoteItems?: Maybe<Array<CreditNoteItem>>;
  creditedInvoice?: Maybe<Invoice>;
  creditedInvoiceId?: Maybe<Scalars['ID']['output']>;
  currencyId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  disputeReason?: Maybe<DisputeReason>;
  disputeReasonId?: Maybe<Scalars['ID']['output']>;
  entity: Entity;
  entityId: Scalars['ID']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  isCredit: Scalars['Boolean']['output'];
  isLegacy: Scalars['Boolean']['output'];
  issuedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  kind: CreditNoteKind;
  number?: Maybe<Scalars['String']['output']>;
  operations: Array<Scalars['String']['output']>;
  state: CreditNoteState;
  subtotal: Scalars['Float']['output'];
  taxAmount: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  uuid: Scalars['ID']['output'];
  warren: Warren;
  warrenId: Scalars['ID']['output'];
};


export type CreditNoteAppliedToInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of CreditNoteApplyToInvoices. */
export type CreditNoteApplyToInvoicesPayload = {
  __typename?: 'CreditNoteApplyToInvoicesPayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  paidInvoices?: Maybe<Array<Invoice>>;
  paymentApplications?: Maybe<Array<PaymentApplication>>;
  removedInvoices?: Maybe<Array<Invoice>>;
};

export type CreditNoteAttributes = {
  creditNoteItems?: InputMaybe<Array<CreditNoteItemAttributes>>;
  disputeReasonId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<CreditNoteKind>;
};

/** The connection type for CreditNote. */
export type CreditNoteConnection = {
  __typename?: 'CreditNoteConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreditNoteEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CreditNote>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of CreditNoteCreate. */
export type CreditNoteCreatePayload = {
  __typename?: 'CreditNoteCreatePayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of CreditNoteDelete. */
export type CreditNoteDeletePayload = {
  __typename?: 'CreditNoteDeletePayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** An edge in a connection. */
export type CreditNoteEdge = {
  __typename?: 'CreditNoteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<CreditNote>;
};

/** Autogenerated return type of CreditNoteIssue. */
export type CreditNoteIssuePayload = {
  __typename?: 'CreditNoteIssuePayload';
  /** The issued credit note */
  creditNote?: Maybe<Invoice>;
};

export type CreditNoteItem = {
  __typename?: 'CreditNoteItem';
  amount: Scalars['Float']['output'];
  currencyId: Scalars['String']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoiceItem?: Maybe<InvoiceItem>;
  invoiceItemId?: Maybe<Scalars['ID']['output']>;
  lineText?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priceDecimals: Scalars['Int']['output'];
  priceTiers?: Maybe<Array<FormattedChargePriceTier>>;
  prorationRate?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  subtotal: Scalars['Float']['output'];
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  vatCode?: Maybe<Scalars['String']['output']>;
};

export type CreditNoteItemAttributes = {
  amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};

export enum CreditNoteKind {
  /** Credit credit note */
  Credit = 'CREDIT',
  /** Refund credit note */
  Refund = 'REFUND',
  /** Write_off credit note */
  WriteOff = 'WRITE_OFF'
}

export enum CreditNoteState {
  /** Applied credit note */
  Applied = 'APPLIED',
  /** Draft credit note */
  Draft = 'DRAFT',
  /** Partially_applied credit note */
  PartiallyApplied = 'PARTIALLY_APPLIED',
  /** Preparing credit note */
  Preparing = 'PREPARING',
  /** Ready credit note */
  Ready = 'READY'
}

/** Autogenerated return type of CreditNoteUpdate. */
export type CreditNoteUpdatePayload = {
  __typename?: 'CreditNoteUpdatePayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of CreditNoteUpdateTaxes. */
export type CreditNoteUpdateTaxesPayload = {
  __typename?: 'CreditNoteUpdateTaxesPayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Currency = {
  __typename?: 'Currency';
  conversionRate?: Maybe<Scalars['BigDecimal']['output']>;
  conversionType?: Maybe<CurrencyConversionType>;
  enabled: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  isoCode: Scalars['String']['output'];
  isoNumeric?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  symbolFirst?: Maybe<Scalars['Boolean']['output']>;
};

export type CurrencyAttributes = {
  conversionRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  conversionType?: InputMaybe<CurrencyConversionType>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  isoCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  realtime?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The connection type for Currency. */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CurrencyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Currency>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum CurrencyConversionType {
  /** Convert to base currency via fixed conversion rate */
  Fixed = 'fixed',
  /** Convert to base currency using conversion rate lookup */
  Lookup = 'lookup'
}

/** Autogenerated return type of CurrencyCreate. */
export type CurrencyCreatePayload = {
  __typename?: 'CurrencyCreatePayload';
  currency: Currency;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Currency>;
};

/** Autogenerated return type of CurrencyUpdate. */
export type CurrencyUpdatePayload = {
  __typename?: 'CurrencyUpdatePayload';
  currency: Currency;
  errors?: Maybe<Scalars['String']['output']>;
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  accountName?: Maybe<Scalars['String']['output']>;
  authObject?: Maybe<AuthObject>;
  authObjectName?: Maybe<Scalars['String']['output']>;
  entityId?: Maybe<Scalars['ID']['output']>;
  featureFlags: Array<FeatureFlag>;
  payload?: Maybe<CurrentUserPayload>;
  plugins?: Maybe<Array<Plugin>>;
  privacyUrl?: Maybe<Scalars['String']['output']>;
  scopes: Array<Scalars['String']['output']>;
  tabnameIsSubdomain?: Maybe<Scalars['Boolean']['output']>;
  /** List of account fields required for taxation */
  taxationRequiredAccountFields?: Maybe<Array<Scalars['String']['output']>>;
  termsUrl?: Maybe<Scalars['String']['output']>;
  user: User;
  warren: Warren;
};

export type CurrentUserAttributes = {
  entityId?: InputMaybe<Scalars['ID']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UserProfileAttributes>;
};

export type CurrentUserPayload = {
  __typename?: 'CurrentUserPayload';
  /** URL used as home location */
  returnUrl?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of CurrentUserUpdate. */
export type CurrentUserUpdatePayload = {
  __typename?: 'CurrentUserUpdatePayload';
  entityId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  profile?: Maybe<UserProfile>;
};

export type DateOption = {
  __typename?: 'DateOption';
  /** Suggested quote date end */
  endDate: Scalars['ISO8601Date']['output'];
  /** Suggested quote date title */
  label: Scalars['String']['output'];
};

/** A deal represents an opportunity to increase revenue */
export type Deal = {
  __typename?: 'Deal';
  /** Account the deal belongs to */
  account?: Maybe<Account>;
  /** Account that the deal belongs to */
  accountId?: Maybe<Scalars['ID']['output']>;
  /** Total value of the deal */
  amount?: Maybe<Scalars['Float']['output']>;
  /** Datetime the deal closed */
  closeDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** Unique code */
  code?: Maybe<Scalars['String']['output']>;
  /** Primary contact for the deal */
  contact?: Maybe<Contact>;
  /** Primary contact for the deal */
  contactId?: Maybe<Scalars['ID']['output']>;
  /** Datetime the deal was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Primary currency for billing */
  currency?: Maybe<Currency>;
  /** Primary currency for billing */
  currencyId?: Maybe<Scalars['ID']['output']>;
  /** Current stage of the deal */
  dealStage: Deal;
  /** Current stage of the deal */
  dealStageId: Scalars['ID']['output'];
  /** Description of the deal */
  description?: Maybe<Scalars['String']['output']>;
  /** The entity this deal belongs to */
  entity?: Maybe<Entity>;
  /** The ID of the entity this deal belongs to */
  entityId?: Maybe<Scalars['ID']['output']>;
  /** Unique identifier for the deal */
  id: Scalars['ID']['output'];
  /** The kind of deal */
  kind?: Maybe<DealKind>;
  /** Lead source for the deal */
  leadSourceId?: Maybe<Scalars['ID']['output']>;
  /** Name of the deal */
  name: Scalars['String']['output'];
  /** Will exclude this deal from analytics */
  notForRevenue?: Maybe<Scalars['Boolean']['output']>;
  /** Describes the origin of the deal: sales, portal, signup etc */
  origin?: Maybe<DealOrigin>;
  /** Owner of the deal */
  owner?: Maybe<User>;
  /** Owner of the deal */
  ownerUserId?: Maybe<Scalars['ID']['output']>;
  /** Probability that the deal will close */
  probability?: Maybe<Scalars['Int']['output']>;
  /** Default values for a new quote based on this deal */
  quoteDefaults?: Maybe<Quote>;
  /** Quotes on the deal */
  quotes: Array<Quote>;
  /** Description of the deal stage */
  stageDescription?: Maybe<Scalars['ID']['output']>;
  /** Datetime the deal was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Whether the deal was created from Portal UI or not */
  viaPortal?: Maybe<Scalars['Boolean']['output']>;
};

/** Attributes for creating and updating a contact */
export type DealAttributes = {
  /** Account that the deal belongs to */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** Total value of the deal */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Datetime the deal closed */
  closeDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /** Unique code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Primary contact for the deal */
  contactId?: InputMaybe<Scalars['ID']['input']>;
  /** Primary currency for billing */
  currencyId?: InputMaybe<Scalars['ID']['input']>;
  /** Current stage of the deal */
  dealStageId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of the deal */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The kind of deal */
  kind?: InputMaybe<DealKind>;
  /** Lead source for the deal */
  leadSourceId?: InputMaybe<Scalars['ID']['input']>;
  /** Name that describes the deal */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Used for test accounts and the like */
  notForRevenue?: InputMaybe<Scalars['Boolean']['input']>;
  /** Describes the origin of the deal: sales, portal, signup etc */
  origin?: InputMaybe<DealOrigin>;
  /** Owner of the deal */
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Probability that the deal will close */
  probability?: InputMaybe<Scalars['Int']['input']>;
  /** Used to identify deals coming from Portal UI */
  viaPortal?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The connection type for Deal. */
export type DealConnection = {
  __typename?: 'DealConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DealEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Deal>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of DealCreate. */
export type DealCreatePayload = {
  __typename?: 'DealCreatePayload';
  deal?: Maybe<Deal>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of DealDelete. */
export type DealDeletePayload = {
  __typename?: 'DealDeletePayload';
  deal?: Maybe<Lead>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** An edge in a connection. */
export type DealEdge = {
  __typename?: 'DealEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Deal>;
};

/** Kind of deal */
export enum DealKind {
  /** Existing business */
  Existing = 'EXISTING',
  /** New business */
  New = 'NEW'
}

/** Origin of deal */
export enum DealOrigin {
  /** Existing business */
  Other = 'OTHER',
  /** Portal */
  Portal = 'PORTAL',
  /** Sales */
  Sales = 'SALES',
  /** Signup */
  Signup = 'SIGNUP'
}

/** A stage in the sales pipeline */
export type DealStage = {
  __typename?: 'DealStage';
  /** Datetime the deal stage was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Description of the stage */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the deal stage */
  id: Scalars['ID']['output'];
  /** Open, Closed/won or Closed/lost */
  kind?: Maybe<DealStageKind>;
  /** Name of the deal stage */
  name?: Maybe<Scalars['String']['output']>;
  /** Position of the stage relative to the other stages */
  position: Scalars['Int']['output'];
  /** Probability of the deal in percent */
  probability?: Maybe<Scalars['String']['output']>;
  /** Datetime the deal stage was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating a deal stage */
export type DealStageAttributes = {
  /** Description of the deal stage */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Open, Closed/won or Closed/lost */
  kind?: InputMaybe<DealStageKind>;
  /** Name of the deal stage */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Order of the deal stage in the sales pipeline */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Probability of the deal in percent */
  probability?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for DealStage. */
export type DealStageConnection = {
  __typename?: 'DealStageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DealStageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DealStage>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of DealStageCreate. */
export type DealStageCreatePayload = {
  __typename?: 'DealStageCreatePayload';
  dealStage?: Maybe<DealStage>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of DealStageDelete. */
export type DealStageDeletePayload = {
  __typename?: 'DealStageDeletePayload';
  dealStage?: Maybe<DealStage>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type DealStageEdge = {
  __typename?: 'DealStageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DealStage>;
};

export enum DealStageKind {
  /** CLOSED_LOST */
  ClosedLost = 'CLOSED_LOST',
  /** CLOSED_WON */
  ClosedWon = 'CLOSED_WON',
  /** OPEN */
  Open = 'OPEN'
}

/** Autogenerated return type of DealStageUpdate. */
export type DealStageUpdatePayload = {
  __typename?: 'DealStageUpdatePayload';
  dealStage?: Maybe<DealStage>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of DealUpdate. */
export type DealUpdatePayload = {
  __typename?: 'DealUpdatePayload';
  deal?: Maybe<Deal>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of DemoDataCreate. */
export type DemoDataCreatePayload = {
  __typename?: 'DemoDataCreatePayload';
  errors?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
};

/** Autogenerated return type of DemoDataDelete. */
export type DemoDataDeletePayload = {
  __typename?: 'DemoDataDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
};

export type DisputeReason = {
  __typename?: 'DisputeReason';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DisputeReasonAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for DisputeReason. */
export type DisputeReasonConnection = {
  __typename?: 'DisputeReasonConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DisputeReasonEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DisputeReason>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of DisputeReasonCreate. */
export type DisputeReasonCreatePayload = {
  __typename?: 'DisputeReasonCreatePayload';
  disputeReason?: Maybe<DisputeReason>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of DisputeReasonDelete. */
export type DisputeReasonDeletePayload = {
  __typename?: 'DisputeReasonDeletePayload';
  disputeReason?: Maybe<DisputeReason>;
  errors?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type DisputeReasonEdge = {
  __typename?: 'DisputeReasonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DisputeReason>;
};

/** Autogenerated return type of DisputeReasonUpdate. */
export type DisputeReasonUpdatePayload = {
  __typename?: 'DisputeReasonUpdatePayload';
  disputeReason?: Maybe<DisputeReason>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Document = {
  __typename?: 'Document';
  date: Scalars['ISO8601DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type DynamicComponent = {
  __typename?: 'DynamicComponent';
  column: Scalars['String']['output'];
  format?: Maybe<DynamicComponentFormat>;
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tooltip?: Maybe<Scalars['String']['output']>;
  type: DynamicComponentType;
  value?: Maybe<Scalars['String']['output']>;
};

export type DynamicComponentAttributes = {
  key: Scalars['String']['input'];
  value: Scalars['DynamicComponentValue']['input'];
};

export enum DynamicComponentFormat {
  /** Binary value, True or False */
  Boolean = 'BOOLEAN',
  /** Copyable */
  Copy = 'COPY',
  /** Number representing an amount of money of a particular region */
  Currency = 'CURRENCY',
  /** Human radable Date string */
  Date = 'DATE',
  /** Human radable Date with Time string */
  Datetime = 'DATETIME',
  /** Human Readable string */
  Humanize = 'HUMANIZE',
  /** Expresion of a Number */
  Numeric = 'NUMERIC',
  /** Rate, amount or number in a hundred */
  Percentage = 'PERCENTAGE',
  /** Copyable, hideable */
  Secret = 'SECRET'
}

export enum DynamicComponentType {
  /** Multiple option input */
  Combo = 'COMBO',
  /** Date Picker control */
  Datepicker = 'DATEPICKER',
  /** Non editable text */
  Description = 'DESCRIPTION',
  /** Text Input field */
  Input = 'INPUT',
  /** Switch Input for boolean values */
  Switch = 'SWITCH',
  /** Text Area input */
  Textarea = 'TEXTAREA'
}

export type Email = {
  __typename?: 'Email';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  body: Scalars['String']['output'];
  bodyRendered: Scalars['String']['output'];
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['ID']['output']>;
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  formattedCreatedAt: Scalars['String']['output'];
  formattedUpdatedAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  recipient: Scalars['String']['output'];
  state: EmailState;
  statusMessage?: Maybe<Scalars['String']['output']>;
  statusSubtype?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  uuid: Scalars['String']['output'];
  warren: Warren;
  workflow?: Maybe<Workflow>;
};

/** Autogenerated return type of EmailBrandingReset. */
export type EmailBrandingResetPayload = {
  __typename?: 'EmailBrandingResetPayload';
  company: Company;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** The connection type for Email. */
export type EmailConnection = {
  __typename?: 'EmailConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EmailEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Email>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type EmailEdge = {
  __typename?: 'EmailEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Email>;
};

export type EmailRecipient = {
  __typename?: 'EmailRecipient';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Autogenerated return type of EmailRetry. */
export type EmailRetryPayload = {
  __typename?: 'EmailRetryPayload';
  email: Email;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export enum EmailState {
  /** Email was delivered successfully */
  Delivered = 'delivered',
  /** Outbound emails disabled */
  Disabled = 'disabled',
  /** Email delivery failed */
  Failed = 'failed',
  /** Email is being procesed */
  Processing = 'processing',
  /** Email is being procesed */
  Queued = 'queued',
  /** Email is delayed */
  Retrying = 'retrying'
}

export type Entity = {
  __typename?: 'Entity';
  /** Short name of the company */
  abbreviation: Scalars['String']['output'];
  /** Accent color used for the customer portal */
  accentColor?: Maybe<Scalars['String']['output']>;
  /** Base currency for the entity */
  baseCurrencyId: Scalars['ID']['output'];
  /** City for billing */
  billingCity?: Maybe<Scalars['String']['output']>;
  /** Country for billing */
  billingCountry?: Maybe<Scalars['String']['output']>;
  /** State for billing */
  billingState?: Maybe<Scalars['String']['output']>;
  /** Street address for billing */
  billingStreet?: Maybe<Scalars['String']['output']>;
  /** Zip/PostalCode for billing */
  billingZip?: Maybe<Scalars['String']['output']>;
  /** Brand color used for the customer portal */
  brandColor?: Maybe<Scalars['String']['output']>;
  /** Datetime that the company was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Email address for customer service */
  customerServiceEmail?: Maybe<Scalars['String']['output']>;
  /** The name that will appear as sender in the inbox */
  emailSenderName?: Maybe<Scalars['String']['output']>;
  /** Email template */
  emailTemplate: Scalars['String']['output'];
  /** Primary fax number for the company */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first month of the fiscal year (0-11) */
  fiscalYearStartMonth?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Prefix value for all invoice numbers. e.g. INV */
  invoiceNumberPrefix?: Maybe<Scalars['String']['output']>;
  /** Number to start invoice numbers from */
  invoiceNumberSeq?: Maybe<Scalars['Int']['output']>;
  invoicesImageUrl?: Maybe<Scalars['String']['output']>;
  /** New accounts will automatically be assigned to the default entity if none is specified */
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the company */
  name?: Maybe<Scalars['String']['output']>;
  /** Primary phone number for the company */
  phone?: Maybe<Scalars['String']['output']>;
  /** Link to the company's privacy policfy */
  privacyUrl?: Maybe<Scalars['String']['output']>;
  /** Prefix value for all quote numbers. e.g. ABC */
  quoteNumberPrefix?: Maybe<Scalars['String']['output']>;
  /** Number to start quote numbers from */
  quoteNumberSeq?: Maybe<Scalars['Int']['output']>;
  quotesImageUrl?: Maybe<Scalars['String']['output']>;
  /** Link to the company's refund policy */
  refundPolicyUrl?: Maybe<Scalars['String']['output']>;
  /** Tax ID to display on invoices */
  taxId?: Maybe<Scalars['String']['output']>;
  /** Tax type to display on invoices */
  taxType?: Maybe<TaxType>;
  /** Link to the company's terms of service */
  termsUrl?: Maybe<Scalars['String']['output']>;
  /** Timezone for the company */
  timezone?: Maybe<Scalars['String']['output']>;
  topNavImageUrl?: Maybe<Scalars['String']['output']>;
  /** Timezone identifier */
  tzIdentifier?: Maybe<Scalars['String']['output']>;
  /** Timezone offset */
  tzOffset?: Maybe<Scalars['String']['output']>;
  /** Datetime that the company was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Company website address */
  website?: Maybe<Scalars['String']['output']>;
};

export type EntityAttributes = {
  /** Short name of the entity */
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  /** Accent color used for the customer portal */
  accentColor?: InputMaybe<Scalars['String']['input']>;
  /** Base currency for the entity */
  baseCurrencyId?: InputMaybe<Scalars['ID']['input']>;
  /** City for billing */
  billingCity?: InputMaybe<Scalars['String']['input']>;
  /** Country for billing */
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  /** State for billing */
  billingState?: InputMaybe<Scalars['String']['input']>;
  /** Street address for billing */
  billingStreet?: InputMaybe<Scalars['String']['input']>;
  /** Zip/PostalCode for billing */
  billingZip?: InputMaybe<Scalars['String']['input']>;
  /** Brand color used for the customer portal */
  brandColor?: InputMaybe<Scalars['String']['input']>;
  /** Email address for customer service */
  customerServiceEmail?: InputMaybe<Scalars['String']['input']>;
  /** The name that will appear as sender in the inbox */
  emailSenderName?: InputMaybe<Scalars['String']['input']>;
  /** Email template */
  emailTemplate?: InputMaybe<Scalars['String']['input']>;
  /** Primary fax number for the company */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first month of the fiscal year (0-11) */
  fiscalYearStartMonth?: InputMaybe<Scalars['Int']['input']>;
  /** Prefix value for all invoice numbers. e.g. INV */
  invoiceNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  /** Number to start invoice numbers from */
  invoiceNumberSeq?: InputMaybe<Scalars['Int']['input']>;
  /** New accounts will automatically be assigned to the default entity if none is specified */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the entity */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Primary phone number for the company */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Link to the company's privacy policfy */
  privacyUrl?: InputMaybe<Scalars['String']['input']>;
  /** Prefix value for all quote numbers. e.g. ABC */
  quoteNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  /** Number to start quote numbers from */
  quoteNumberSeq?: InputMaybe<Scalars['Int']['input']>;
  /** Link to the company's refund policy */
  refundPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  /** Tax ID to display on invoices */
  taxId?: InputMaybe<Scalars['String']['input']>;
  /** Tax type to display on invoices */
  taxType?: InputMaybe<TaxType>;
  /** Link to the company's terms of service */
  termsUrl?: InputMaybe<Scalars['String']['input']>;
  /** Timezone for the company */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** Company website address */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type EntityBranding = {
  __typename?: 'EntityBranding';
  /** Accent color used for the customer portal */
  accentColor?: Maybe<Scalars['String']['output']>;
  /** Brand color used for the customer portal */
  brandColor?: Maybe<Scalars['String']['output']>;
  invoicesImageUrl: Scalars['String']['output'];
  quotesImageUrl: Scalars['String']['output'];
  topNavImageUrl: Scalars['String']['output'];
};

/** The connection type for Entity. */
export type EntityConnection = {
  __typename?: 'EntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Entity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of EntityCreate. */
export type EntityCreatePayload = {
  __typename?: 'EntityCreatePayload';
  entity?: Maybe<Entity>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of EntityDelete. */
export type EntityDeletePayload = {
  __typename?: 'EntityDeletePayload';
  entity: Entity;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of EntityDuplicate. */
export type EntityDuplicatePayload = {
  __typename?: 'EntityDuplicatePayload';
  entity?: Maybe<Entity>;
  errors: Array<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type EntityEdge = {
  __typename?: 'EntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Entity>;
};

/** Autogenerated return type of EntityUpdate. */
export type EntityUpdatePayload = {
  __typename?: 'EntityUpdatePayload';
  entity?: Maybe<Entity>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of EntityValidateAddress. */
export type EntityValidateAddressPayload = {
  __typename?: 'EntityValidateAddressPayload';
  entity?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  actor: Scalars['String']['output'];
  description: Scalars['String']['output'];
  eventTimestamp: Scalars['ISO8601DateTime']['output'];
  eventTimestampFormatted: Scalars['String']['output'];
  eventTypeId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  longDescription: Scalars['String']['output'];
  objectType?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  severity: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  timeAgo: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

/** The connection type for Event. */
export type EventConnection = {
  __typename?: 'EventConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Event>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventDetail = {
  __typename?: 'EventDetail';
  eventDetailChanges?: Maybe<Array<EventDetailChange>>;
  eventDetailItems?: Maybe<Array<EventDetailItem>>;
  id: Scalars['ID']['output'];
};

export type EventDetailChange = {
  __typename?: 'EventDetailChange';
  attribute: Scalars['String']['output'];
  changedFrom?: Maybe<Scalars['String']['output']>;
  changedTo?: Maybe<Scalars['String']['output']>;
};

export type EventDetailItem = {
  __typename?: 'EventDetailItem';
  content: Scalars['String']['output'];
  header: Scalars['String']['output'];
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Event>;
};

export type Feature = {
  __typename?: 'Feature';
  chargeType?: Maybe<ChargeType>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isProvisioned?: Maybe<Scalars['Boolean']['output']>;
  isUnit?: Maybe<Scalars['Boolean']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  kind?: Maybe<FeatureKind>;
  name: Scalars['String']['output'];
  plans?: Maybe<Array<Plan>>;
  position: Scalars['Int']['output'];
  productId?: Maybe<Scalars['ID']['output']>;
  unitName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating plan features */
export type FeatureAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isProvisioned?: InputMaybe<Scalars['Boolean']['input']>;
  isUnit?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<FeatureKind>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Describes how usage should be aggregated during a
   *                                                                                       billing period. Must be one of sum, max, last
   */
  usageCalculationType?: InputMaybe<UsageCalculation>;
};

/** The connection type for Feature. */
export type FeatureConnection = {
  __typename?: 'FeatureConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FeatureEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Feature>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of FeatureCreate. */
export type FeatureCreatePayload = {
  __typename?: 'FeatureCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  feature?: Maybe<Feature>;
};

/** Autogenerated return type of FeatureDelete. */
export type FeatureDeletePayload = {
  __typename?: 'FeatureDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An edge in a connection. */
export type FeatureEdge = {
  __typename?: 'FeatureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Feature>;
};

export type FeatureFlag = {
  __typename?: 'FeatureFlag';
  code?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type FeatureFlagAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeatureKind {
  /** True or false */
  Boolean = 'BOOLEAN',
  /** Feature group */
  Group = 'GROUP',
  /** Quantity */
  Quantity = 'QUANTITY',
  /** Takes a value when used on a plan */
  Value = 'VALUE'
}

/** Autogenerated return type of FeatureUpdate. */
export type FeatureUpdatePayload = {
  __typename?: 'FeatureUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  feature?: Maybe<Feature>;
};

export type FeatureUsage = {
  __typename?: 'FeatureUsage';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  feature?: Maybe<Feature>;
  featureId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  plan?: Maybe<Plan>;
  product?: Maybe<Product>;
  quantity: Scalars['Float']['output'];
  subscription?: Maybe<Subscription>;
  subscriptionChargeId?: Maybe<Scalars['ID']['output']>;
  subscriptionId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  usageAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating feature usage */
export type FeatureUsageAttributes = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  featureCode?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  subscriptionChargeId?: InputMaybe<Scalars['ID']['input']>;
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
  usageAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** The connection type for FeatureUsage. */
export type FeatureUsageConnection = {
  __typename?: 'FeatureUsageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FeatureUsageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<FeatureUsage>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of FeatureUsageCreate. */
export type FeatureUsageCreatePayload = {
  __typename?: 'FeatureUsageCreatePayload';
  errors?: Maybe<Scalars['String']['output']>;
  featureUsage?: Maybe<FeatureUsage>;
};

/** Autogenerated return type of FeatureUsageDelete. */
export type FeatureUsageDeletePayload = {
  __typename?: 'FeatureUsageDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  featureUsage?: Maybe<FeatureUsage>;
};

/** An edge in a connection. */
export type FeatureUsageEdge = {
  __typename?: 'FeatureUsageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<FeatureUsage>;
};

/** Autogenerated return type of FeatureUsageUpdate. */
export type FeatureUsageUpdatePayload = {
  __typename?: 'FeatureUsageUpdatePayload';
  errors?: Maybe<Scalars['String']['output']>;
  featureUsage?: Maybe<FeatureUsage>;
};

export type Field = {
  __typename?: 'Field';
  computed?: Maybe<Scalars['Boolean']['output']>;
  kind: FieldKind;
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  values?: Maybe<Array<FieldValue>>;
};

export type FieldAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objId?: InputMaybe<Scalars['ID']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The connection type for Field. */
export type FieldConnection = {
  __typename?: 'FieldConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FieldEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Field>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of FieldCreate. */
export type FieldCreatePayload = {
  __typename?: 'FieldCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  field?: Maybe<Field>;
};

/** An edge in a connection. */
export type FieldEdge = {
  __typename?: 'FieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Field>;
};

export enum FieldKind {
  /** Boolean */
  Bool = 'BOOL',
  /** Currency */
  Currency = 'CURRENCY',
  /** Date */
  Date = 'DATE',
  /** Decimal */
  Decimal = 'DECIMAL',
  /** Enumerable */
  Enum = 'ENUM',
  /** Integer */
  Int = 'INT',
  /** Many Relation */
  ManyRelation = 'MANY_RELATION',
  /** Relation */
  Relation = 'RELATION',
  /** String */
  String = 'STRING',
  /** Timestamp */
  Timestamp = 'TIMESTAMP'
}

/** Autogenerated return type of FieldUpdate. */
export type FieldUpdatePayload = {
  __typename?: 'FieldUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  field?: Maybe<Field>;
};

export type FieldValue = {
  __typename?: 'FieldValue';
  appliesTo?: Maybe<Array<Scalars['String']['output']>>;
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The financial account record used for accounting */
export type FinancialAccount = {
  __typename?: 'FinancialAccount';
  /** The account the financial account belongs to */
  accountId?: Maybe<Scalars['ID']['output']>;
  /** The account number of the financial account */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** The type of the financial account */
  accountType?: Maybe<FinancialAccountType>;
  /** The label of the financial account type */
  accountTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Whether the financial account is active */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Custom unique identifier for the financial account */
  code?: Maybe<Scalars['String']['output']>;
  /** Datetime the financial account was created */
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Whether the financial account is the default for the type */
  defaultAccount?: Maybe<Scalars['Boolean']['output']>;
  /** A description of the financial account */
  description?: Maybe<Scalars['String']['output']>;
  /** The entity this account belongs to */
  entity?: Maybe<Entity>;
  /** The entity the financial account belongs to */
  entityId: Scalars['ID']['output'];
  /** The external ID of the financial account */
  externalId?: Maybe<Scalars['String']['output']>;
  /** Unique ID for the financial account */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name and code of the financial account */
  longName?: Maybe<Scalars['String']['output']>;
  /** The name of the financial account */
  name?: Maybe<Scalars['String']['output']>;
  /** The plugin ID of the financial account */
  pluginId?: Maybe<Scalars['ID']['output']>;
  priceListChargeIds?: Maybe<Array<Scalars['ID']['output']>>;
  /** The source of the financial account */
  source?: Maybe<Scalars['String']['output']>;
  /** Datetime the financial account was last updated */
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** Attributes for creating and updating a financial account */
export type FinancialAccountAttributes = {
  /** The account the financial account belongs to */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** The account number of the financial account */
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  /** The type of the financial account */
  accountType?: InputMaybe<FinancialAccountType>;
  /** Whether the financial account is active */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Custom unique identifier for the financial account */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Datetime the financial account was created */
  createdAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Whether the financial account is the default */
  defaultAccount?: InputMaybe<Scalars['Boolean']['input']>;
  /** A description of the financial account */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The entity the financial account belongs to */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** The external ID of the financial account */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the financial account */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The plugin ID of the financial account */
  pluginId?: InputMaybe<Scalars['ID']['input']>;
  priceListChargeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The source of the financial account */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Datetime the financial account was last updated */
  updatedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** The connection type for FinancialAccount. */
export type FinancialAccountConnection = {
  __typename?: 'FinancialAccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FinancialAccountEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<FinancialAccount>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of FinancialAccountCreate. */
export type FinancialAccountCreatePayload = {
  __typename?: 'FinancialAccountCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  financialAccount?: Maybe<FinancialAccount>;
};

/** Autogenerated return type of FinancialAccountDelete. */
export type FinancialAccountDeletePayload = {
  __typename?: 'FinancialAccountDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  financialAccount?: Maybe<FinancialAccount>;
};

/** An edge in a connection. */
export type FinancialAccountEdge = {
  __typename?: 'FinancialAccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<FinancialAccount>;
};

export enum FinancialAccountType {
  /** Accounts receivable */
  AccountsReceivable = 'accounts_receivable',
  /** Banking fees */
  BankingFees = 'banking_fees',
  /** Conversion gain */
  ConversionGain = 'conversion_gain',
  /** Conversion loss */
  ConversionLoss = 'conversion_loss',
  /** CPCA */
  Cpca = 'cpca',
  /** Deferred revenue */
  DeferredRevenue = 'deferred_revenue',
  /** Earned revenue */
  EarnedRevenue = 'earned_revenue',
  /** Payments */
  Payments = 'payments',
  /** Tax payable */
  TaxPayable = 'tax_payable'
}

/** Autogenerated return type of FinancialAccountUpdate. */
export type FinancialAccountUpdatePayload = {
  __typename?: 'FinancialAccountUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  financialAccount?: Maybe<FinancialAccount>;
};

export type FormattedChargePriceTier = {
  __typename?: 'FormattedChargePriceTier';
  ends?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  starts: Scalars['Int']['output'];
};

export type FormattedCreditNote = {
  __typename?: 'FormattedCreditNote';
  amount?: Maybe<Scalars['Float']['output']>;
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingState?: Maybe<Scalars['String']['output']>;
  billingStreet?: Maybe<Scalars['String']['output']>;
  billingZip?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  creditedInvoice?: Maybe<Invoice>;
  creditedInvoiceId?: Maybe<Scalars['ID']['output']>;
  credits?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  currencyId?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  customerBillingCity?: Maybe<Scalars['String']['output']>;
  customerBillingContact?: Maybe<Scalars['String']['output']>;
  customerBillingCountry?: Maybe<Scalars['String']['output']>;
  customerBillingState?: Maybe<Scalars['String']['output']>;
  customerBillingStreet?: Maybe<Scalars['String']['output']>;
  customerBillingZip?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  dueAt?: Maybe<Scalars['ISO8601Date']['output']>;
  formattedLines: Array<FormattedLine>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<InvoiceMessage>>;
  netPaymentDays?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  object: CreditNote;
  payableId: Scalars['ID']['output'];
  poNumber?: Maybe<Scalars['String']['output']>;
  printedState?: Maybe<Scalars['String']['output']>;
  salesContactEmail?: Maybe<Scalars['String']['output']>;
  smallUnitAmountDue?: Maybe<Scalars['Int']['output']>;
  state: CreditNoteState;
  subscriptionEndDate?: Maybe<Scalars['ISO8601Date']['output']>;
  subscriptionStartDate?: Maybe<Scalars['ISO8601Date']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  /** Tax ID to display on invoices */
  taxId?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** Tax type to display on invoices */
  taxType?: Maybe<TaxType>;
  uuid?: Maybe<Scalars['String']['output']>;
  vatCode?: Maybe<Scalars['String']['output']>;
  vendorName?: Maybe<Scalars['String']['output']>;
};

export type FormattedInvoice = {
  __typename?: 'FormattedInvoice';
  amount?: Maybe<Scalars['Float']['output']>;
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingState?: Maybe<Scalars['String']['output']>;
  billingStreet?: Maybe<Scalars['String']['output']>;
  billingZip?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  credits?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  currencyId?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  customerBillingCity?: Maybe<Scalars['String']['output']>;
  customerBillingContact?: Maybe<Scalars['String']['output']>;
  customerBillingCountry?: Maybe<Scalars['String']['output']>;
  customerBillingState?: Maybe<Scalars['String']['output']>;
  customerBillingStreet?: Maybe<Scalars['String']['output']>;
  customerBillingZip?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  dueAt?: Maybe<Scalars['ISO8601Date']['output']>;
  formattedLines: Array<FormattedLine>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<InvoiceMessage>>;
  netPaymentDays?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  object: Invoice;
  payableId: Scalars['ID']['output'];
  poNumber?: Maybe<Scalars['String']['output']>;
  printedState?: Maybe<Scalars['String']['output']>;
  salesContactEmail?: Maybe<Scalars['String']['output']>;
  smallUnitAmountDue?: Maybe<Scalars['Int']['output']>;
  state: InvoiceState;
  subscriptionEndDate?: Maybe<Scalars['ISO8601Date']['output']>;
  subscriptionStartDate?: Maybe<Scalars['ISO8601Date']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  /** Tax ID to display on invoices */
  taxId?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** Tax type to display on invoices */
  taxType?: Maybe<TaxType>;
  uuid?: Maybe<Scalars['String']['output']>;
  vatCode?: Maybe<Scalars['String']['output']>;
  vendorName?: Maybe<Scalars['String']['output']>;
};

export type FormattedLine = {
  __typename?: 'FormattedLine';
  amount: Scalars['Float']['output'];
  billingPeriodEnd?: Maybe<Scalars['String']['output']>;
  billingPeriodStart?: Maybe<Scalars['String']['output']>;
  charge: Charge;
  chargeKind?: Maybe<QuoteChangeKind>;
  /** Quote charge or Subscription charge */
  chargeType?: Maybe<Scalars['String']['output']>;
  couponId?: Maybe<Scalars['ID']['output']>;
  currencyId: Scalars['String']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCoupon: Scalars['Boolean']['output'];
  isRamp: Scalars['Boolean']['output'];
  lineText?: Maybe<Scalars['String']['output']>;
  planName: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  priceDecimals: Scalars['Int']['output'];
  priceListChargeId?: Maybe<Scalars['ID']['output']>;
  priceListChargeName?: Maybe<Scalars['String']['output']>;
  priceListId?: Maybe<Scalars['ID']['output']>;
  priceListName?: Maybe<Scalars['String']['output']>;
  priceTiers?: Maybe<Array<FormattedChargePriceTier>>;
  pricingModel: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  prorationRate?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  showProductNameOnLineItem: Scalars['Boolean']['output'];
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  /** The feature name */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  vatCode?: Maybe<Scalars['String']['output']>;
};

export type FormattedQuote = {
  __typename?: 'FormattedQuote';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  acceptedByName?: Maybe<Scalars['String']['output']>;
  acceptedByTitle?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  amountDue: Scalars['Float']['output'];
  amountsByPeriod: Array<PeriodAmount>;
  approvalRequest?: Maybe<ApprovalRequest>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingState?: Maybe<Scalars['String']['output']>;
  billingStreet?: Maybe<Scalars['String']['output']>;
  billingZip?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customerBillingCity?: Maybe<Scalars['String']['output']>;
  customerBillingCountry?: Maybe<Scalars['String']['output']>;
  customerBillingState?: Maybe<Scalars['String']['output']>;
  customerBillingStreet?: Maybe<Scalars['String']['output']>;
  customerBillingZip?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  dealOwnerEmail?: Maybe<Scalars['String']['output']>;
  dealOwnerName?: Maybe<Scalars['String']['output']>;
  discount: Scalars['Float']['output'];
  discountValue: Scalars['Float']['output'];
  documents?: Maybe<Array<Document>>;
  duration?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  evergreen: Scalars['Boolean']['output'];
  expiresAt?: Maybe<Scalars['ISO8601Date']['output']>;
  formattedLines: Array<QuoteLine>;
  html?: Maybe<Scalars['String']['output']>;
  netPaymentDays?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  object: Quote;
  payableId?: Maybe<Scalars['ID']['output']>;
  poNumberRequired?: Maybe<Scalars['Boolean']['output']>;
  salesContactEmail?: Maybe<Scalars['String']['output']>;
  sharedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
  state: QuoteState;
  subtotal: Scalars['Float']['output'];
  taxAmount: Scalars['Float']['output'];
  taxNumberLabel?: Maybe<Scalars['String']['output']>;
  taxNumberRequired?: Maybe<Scalars['Boolean']['output']>;
  vendorName?: Maybe<Scalars['String']['output']>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentGroupId?: Maybe<Scalars['ID']['output']>;
};

export type GroupAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
  parentGroupId?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for Group. */
export type GroupConnection = {
  __typename?: 'GroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Group>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of GroupCreate. */
export type GroupCreatePayload = {
  __typename?: 'GroupCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  group?: Maybe<Group>;
};

/** Autogenerated return type of GroupDelete. */
export type GroupDeletePayload = {
  __typename?: 'GroupDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
};

/** An edge in a connection. */
export type GroupEdge = {
  __typename?: 'GroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Group>;
};

/** Autogenerated return type of GroupUpdate. */
export type GroupUpdatePayload = {
  __typename?: 'GroupUpdatePayload';
  errors: Array<Scalars['String']['output']>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Group>>;
};

export type Histogram = {
  __typename?: 'Histogram';
  data?: Maybe<Array<HistogramData>>;
  dataInterval: HistogramDataIntervalEnum;
  feature: Feature;
  periodRange: Scalars['String']['output'];
  subscriptionCharge: SubscriptionCharge;
};

export type HistogramData = {
  __typename?: 'HistogramData';
  intervals: Array<HistogramDataInterval>;
  intervalsTotal: Scalars['Float']['output'];
  periodEnd: Scalars['ISO8601DateTime']['output'];
  periodStart: Scalars['ISO8601DateTime']['output'];
};

export type HistogramDataInterval = {
  __typename?: 'HistogramDataInterval';
  intervalStart: Scalars['ISO8601DateTime']['output'];
  intervalUsage: Scalars['Float']['output'];
};

export enum HistogramDataIntervalEnum {
  /** Monthly interval */
  Daily = 'DAILY',
  /** Monthly interval */
  Monthly = 'MONTHLY',
  /** Quarterly interval */
  Quarterly = 'QUARTERLY',
  /** Semiannually interval */
  Semiannually = 'SEMIANNUALLY',
  /** Yearly interval */
  Yearly = 'YEARLY'
}

/** Industry for accounts and deals */
export type Industry = {
  __typename?: 'Industry';
  /** Datetime the industry was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  globalId?: Maybe<Scalars['ID']['output']>;
  /** Unique identifier for the industry */
  id: Scalars['ID']['output'];
  /** Name of the industry */
  name?: Maybe<Scalars['String']['output']>;
  /** Datetime the industry was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating an industry */
export type IndustryAttributes = {
  globalId?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the industry */
  name: Scalars['String']['input'];
};

/** The connection type for Industry. */
export type IndustryConnection = {
  __typename?: 'IndustryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IndustryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Industry>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of IndustryCreate. */
export type IndustryCreatePayload = {
  __typename?: 'IndustryCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  industry?: Maybe<Industry>;
};

/** An edge in a connection. */
export type IndustryEdge = {
  __typename?: 'IndustryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Industry>;
};

export type IntracomVat = {
  __typename?: 'IntracomVat';
  /** Account */
  account?: Maybe<Account>;
  /** Account ID */
  accountId: Scalars['ID']['output'];
  /** Billing city of the account */
  billingCity?: Maybe<Scalars['String']['output']>;
  /** Billing country of the account */
  billingCountry: Scalars['String']['output'];
  /** Billing state of the account */
  billingState?: Maybe<Scalars['String']['output']>;
  /** Billing street of the account */
  billingStreet?: Maybe<Scalars['String']['output']>;
  /** Billing zip of the account */
  billingZip?: Maybe<Scalars['String']['output']>;
  /** Currency ID */
  currencyId: Scalars['ID']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  /** Month of the invoice */
  month: Scalars['ISO8601Date']['output'];
  /** Month name and year */
  monthNameYear: Scalars['String']['output'];
  /** Tax number of the account */
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** Invoice total for period less credits */
  totalAmount: Scalars['Float']['output'];
};

/** The connection type for IntracomVat. */
export type IntracomVatConnection = {
  __typename?: 'IntracomVatConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IntracomVatEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<IntracomVat>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type IntracomVatEdge = {
  __typename?: 'IntracomVatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<IntracomVat>;
};

export type Invoice = {
  __typename?: 'Invoice';
  account?: Maybe<Account>;
  accountId: Scalars['ID']['output'];
  amount: Scalars['Float']['output'];
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  couponApplied: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  creditItem?: Maybe<InvoiceItem>;
  creditNotes?: Maybe<Array<CreditNote>>;
  credits?: Maybe<Scalars['Float']['output']>;
  currencyId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  dueAt?: Maybe<Scalars['ISO8601Date']['output']>;
  /** IDs are null when object is previewed */
  id?: Maybe<Scalars['ID']['output']>;
  invoiceItems?: Maybe<Array<InvoiceItem>>;
  isLegacy: Scalars['Boolean']['output'];
  issuedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  kind: Scalars['String']['output'];
  netPaymentDays: Scalars['Int']['output'];
  /** Invoice number. Blank when invoice is being prepared */
  number?: Maybe<Scalars['String']['output']>;
  operations: Array<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  payableId?: Maybe<Scalars['ID']['output']>;
  /** Payments applied to this invoice */
  paymentApplications?: Maybe<Array<PaymentApplication>>;
  payments?: Maybe<PaymentConnection>;
  poNumber?: Maybe<Scalars['String']['output']>;
  /** URL to the invoice within the customer portal */
  portalUrl: Scalars['String']['output'];
  quote?: Maybe<Quote>;
  quoteId?: Maybe<Scalars['ID']['output']>;
  smallUnitAmountDue?: Maybe<Scalars['Int']['output']>;
  state: InvoiceState;
  subtotal: Scalars['Float']['output'];
  taxAmount: Scalars['Float']['output'];
  transactionRecord: Transaction;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** URL to the invoice within the Bunny app */
  url: Scalars['String']['output'];
  uuid: Scalars['ID']['output'];
};


export type InvoicePaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of InvoiceAddCredit. */
export type InvoiceAddCreditPayload = {
  __typename?: 'InvoiceAddCreditPayload';
  invoiceItem?: Maybe<InvoiceItem>;
};

export type InvoiceAttributes = {
  poNumber?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Invoice. */
export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvoiceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of InvoiceCredit. */
export type InvoiceCreditPayload = {
  __typename?: 'InvoiceCreditPayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of InvoiceDeleteCredit. */
export type InvoiceDeleteCreditPayload = {
  __typename?: 'InvoiceDeleteCreditPayload';
  invoiceItem?: Maybe<InvoiceItem>;
};

/** An edge in a connection. */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Invoice>;
};

/** Autogenerated return type of InvoiceGenerateNextPeriod. */
export type InvoiceGenerateNextPeriodPayload = {
  __typename?: 'InvoiceGenerateNextPeriodPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  amount: Scalars['Float']['output'];
  charge: Charge;
  chargeType?: Maybe<Scalars['String']['output']>;
  couponId?: Maybe<Scalars['ID']['output']>;
  creditNoteItem?: Maybe<CreditNoteItem>;
  currencyId: Scalars['String']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice: Invoice;
  invoiceId: Scalars['ID']['output'];
  isCoupon: Scalars['Boolean']['output'];
  isCredit: Scalars['Boolean']['output'];
  isRamp: Scalars['Boolean']['output'];
  kind?: Maybe<QuoteChangeKind>;
  lineText?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priceDecimals: Scalars['Int']['output'];
  priceTiers?: Maybe<Array<FormattedChargePriceTier>>;
  prorationRate?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  showProductNameOnLineItem: Scalars['Boolean']['output'];
  subtotal: Scalars['Float']['output'];
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  vatCode?: Maybe<Scalars['String']['output']>;
};

/** The connection type for InvoiceItem. */
export type InvoiceItemConnection = {
  __typename?: 'InvoiceItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvoiceItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<InvoiceItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type InvoiceItemEdge = {
  __typename?: 'InvoiceItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<InvoiceItem>;
};

export type InvoiceMessage = {
  __typename?: 'InvoiceMessage';
  ids?: Maybe<Array<Scalars['ID']['output']>>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of InvoiceRefund. */
export type InvoiceRefundPayload = {
  __typename?: 'InvoiceRefundPayload';
  creditNote?: Maybe<Invoice>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of InvoiceRegenerate. */
export type InvoiceRegeneratePayload = {
  __typename?: 'InvoiceRegeneratePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
};

/** Autogenerated return type of InvoiceReissue. */
export type InvoiceReissuePayload = {
  __typename?: 'InvoiceReissuePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
};

/** Autogenerated return type of InvoiceRelease. */
export type InvoiceReleasePayload = {
  __typename?: 'InvoiceReleasePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
};

/** Autogenerated return type of InvoiceRetryTax. */
export type InvoiceRetryTaxPayload = {
  __typename?: 'InvoiceRetryTaxPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
};

/** Autogenerated return type of InvoiceSendEmail. */
export type InvoiceSendEmailPayload = {
  __typename?: 'InvoiceSendEmailPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice: Invoice;
};

export enum InvoiceState {
  /** Draft invoice */
  Draft = 'DRAFT',
  /** Due invoice */
  Due = 'DUE',
  /** Failed invoice */
  Failed = 'FAILED',
  /** Not_due invoice */
  NotDue = 'NOT_DUE',
  /** Paid invoice */
  Paid = 'PAID',
  /** Preparing invoice */
  Preparing = 'PREPARING',
  /** Processing_payment invoice */
  ProcessingPayment = 'PROCESSING_PAYMENT',
  /** Ready invoice */
  Ready = 'READY',
  /** Unpaid invoice */
  Unpaid = 'UNPAID',
  /** Voided invoice */
  Voided = 'VOIDED'
}

export type InvoiceTemplate = {
  __typename?: 'InvoiceTemplate';
  bankDetails?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  entityId?: Maybe<Scalars['ID']['output']>;
  footer?: Maybe<Scalars['String']['output']>;
  hideZeroAmounts?: Maybe<Scalars['Boolean']['output']>;
  /** IDs are null when object is previewed */
  id?: Maybe<Scalars['ID']['output']>;
  includePaymentLink?: Maybe<Scalars['Boolean']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  poNumberRequired?: Maybe<Scalars['Boolean']['output']>;
  taxNumberLabel?: Maybe<Scalars['String']['output']>;
  taxNumberRequired?: Maybe<Scalars['Boolean']['output']>;
};

export type InvoiceTemplateAttributes = {
  bankDetails?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  hideZeroAmounts?: InputMaybe<Scalars['Boolean']['input']>;
  includePaymentLink?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  poNumberRequired?: InputMaybe<Scalars['Boolean']['input']>;
  taxNumberLabel?: InputMaybe<Scalars['String']['input']>;
  taxNumberRequired?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The connection type for InvoiceTemplate. */
export type InvoiceTemplateConnection = {
  __typename?: 'InvoiceTemplateConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvoiceTemplateEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<InvoiceTemplate>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of InvoiceTemplateCreate. */
export type InvoiceTemplateCreatePayload = {
  __typename?: 'InvoiceTemplateCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoiceTemplate?: Maybe<InvoiceTemplate>;
};

/** Autogenerated return type of InvoiceTemplateDelete. */
export type InvoiceTemplateDeletePayload = {
  __typename?: 'InvoiceTemplateDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoiceTemplate?: Maybe<InvoiceTemplate>;
};

/** An edge in a connection. */
export type InvoiceTemplateEdge = {
  __typename?: 'InvoiceTemplateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<InvoiceTemplate>;
};

/** Autogenerated return type of InvoiceTemplateUpdate. */
export type InvoiceTemplateUpdatePayload = {
  __typename?: 'InvoiceTemplateUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoiceTemplate?: Maybe<InvoiceTemplate>;
};

/** Autogenerated return type of InvoiceUpdateCredit. */
export type InvoiceUpdateCreditPayload = {
  __typename?: 'InvoiceUpdateCreditPayload';
  errors: Array<Scalars['String']['output']>;
  invoiceItem?: Maybe<InvoiceItem>;
};

export type InvoiceUpdateCreditsAttributes = {
  invoiceItems: Array<CreditItemAttributes>;
};

/** Autogenerated return type of InvoiceUpdateCredits. */
export type InvoiceUpdateCreditsPayload = {
  __typename?: 'InvoiceUpdateCreditsPayload';
  errors: Array<Scalars['String']['output']>;
  invoiceItems?: Maybe<Array<InvoiceItem>>;
};

/** Autogenerated return type of InvoiceUpdate. */
export type InvoiceUpdatePayload = {
  __typename?: 'InvoiceUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice: Invoice;
};

/** Autogenerated return type of InvoiceUpdateTaxes. */
export type InvoiceUpdateTaxesPayload = {
  __typename?: 'InvoiceUpdateTaxesPayload';
  invoice?: Maybe<Invoice>;
};

/** Autogenerated return type of InvoiceVoid. */
export type InvoiceVoidPayload = {
  __typename?: 'InvoiceVoidPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice: Invoice;
};

/** Autogenerated return type of InvoiceWriteOff. */
export type InvoiceWriteOffPayload = {
  __typename?: 'InvoiceWriteOffPayload';
  creditNote?: Maybe<Invoice>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Background jobs processed by Bunny */
export type Job = {
  __typename?: 'Job';
  /** Time the job completed */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Number of seconds the job was running */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the Job */
  id: Scalars['ID']['output'];
  /** Job name */
  name?: Maybe<Scalars['String']['output']>;
  /** Notes related to the job */
  notes?: Maybe<Scalars['String']['output']>;
  /** Notes related to the job */
  notesExerpt?: Maybe<Scalars['String']['output']>;
  /** The status of the job: running, completed or failed */
  state?: Maybe<JobStatus>;
  /** Time the job was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Job. */
export type JobConnection = {
  __typename?: 'JobConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<JobEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Job>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type JobEdge = {
  __typename?: 'JobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Job>;
};

export enum JobStatus {
  /** Job completed successfully */
  Completed = 'completed',
  /** Job failed */
  Failed = 'failed',
  /** Job is running */
  Running = 'running'
}

/** The Journal Entry represents a financial transaction */
export type JournalEntry = {
  __typename?: 'JournalEntry';
  date: Scalars['ISO8601Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entity: Entity;
  entityId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  payment?: Maybe<Payment>;
  source: Scalars['String']['output'];
};

/** The connection type for JournalEntry. */
export type JournalEntryConnection = {
  __typename?: 'JournalEntryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<JournalEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<JournalEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type JournalEntryEdge = {
  __typename?: 'JournalEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<JournalEntry>;
};

/** The Journal Entry Line represents a financial transaction line item */
export type JournalEntryLine = {
  __typename?: 'JournalEntryLine';
  credit?: Maybe<Scalars['Float']['output']>;
  currency: Currency;
  currencyId: Scalars['String']['output'];
  debit?: Maybe<Scalars['Float']['output']>;
  financialAccount: FinancialAccount;
  financialAccountId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  journalEntry: JournalEntry;
  journalEntryId?: Maybe<Scalars['ID']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

/** The connection type for JournalEntryLine. */
export type JournalEntryLineConnection = {
  __typename?: 'JournalEntryLineConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<JournalEntryLineEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<JournalEntryLine>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type JournalEntryLineEdge = {
  __typename?: 'JournalEntryLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<JournalEntryLine>;
};

/** Leads are used to track potential new opportunities and can be converted to accounts */
export type Lead = {
  __typename?: 'Lead';
  /** Account that lead has converted to */
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  /** Type of account */
  accountType?: Maybe<AccountType>;
  accountTypeId?: Maybe<Scalars['ID']['output']>;
  /** The campaigns the lead is a member of */
  campaigns: Array<Campaign>;
  /** City of the lead */
  city?: Maybe<Scalars['String']['output']>;
  /** Company of the lead */
  company?: Maybe<Scalars['String']['output']>;
  /** Company if present, else contact's fullname */
  companyOrFullName?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the lead has been converted to an account */
  converted: Scalars['Boolean']['output'];
  /** Datetime the lead was converted to an account */
  convertedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Country of the lead */
  country?: Maybe<Scalars['String']['output']>;
  /** Datetime the lead was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Description of the lead */
  description?: Maybe<Scalars['String']['output']>;
  /** Email address of the contact */
  email?: Maybe<Scalars['String']['output']>;
  /** Number of employees */
  employees?: Maybe<Scalars['Int']['output']>;
  /** The entity this lead belongs to */
  entity?: Maybe<Entity>;
  /** The ID of the entity this lead belongs to */
  entityId?: Maybe<Scalars['ID']['output']>;
  /** First name of the contact */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Full name of the contact */
  fullName?: Maybe<Scalars['String']['output']>;
  /** Group that the lead belongs to */
  groupId?: Maybe<Scalars['ID']['output']>;
  /** Unique identifier for the lead */
  id: Scalars['ID']['output'];
  /** Industry of the lead */
  industry?: Maybe<Industry>;
  /** Industry of the lead */
  industryId?: Maybe<Scalars['ID']['output']>;
  /** Last name of the contact */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Source of the lead */
  leadSource?: Maybe<LeadSource>;
  /** Source of the lead */
  leadSourceId?: Maybe<Scalars['ID']['output']>;
  /** List of lead sources */
  leadSources?: Maybe<Array<LeadSource>>;
  /** Status of the lead */
  leadStatus?: Maybe<LeadStatus>;
  /** Status of the lead */
  leadStatusId?: Maybe<Scalars['ID']['output']>;
  /** List of lead statuses */
  leadStatuses?: Maybe<Array<LeadStatus>>;
  /** Link to the contact's LinkedIn profile */
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  /** Mobile number of the contact */
  mobile?: Maybe<Scalars['String']['output']>;
  /** Owner of the lead */
  owner?: Maybe<User>;
  /** Owner of the lead */
  ownerUserId?: Maybe<Scalars['ID']['output']>;
  /** Phone number of the contact */
  phone?: Maybe<Scalars['String']['output']>;
  /** Annual revenue of the lead */
  revenue?: Maybe<Scalars['Int']['output']>;
  /** State of the lead */
  state?: Maybe<Scalars['String']['output']>;
  /** Street address of the lead */
  street?: Maybe<Scalars['String']['output']>;
  /** Job title of the contact */
  title?: Maybe<Scalars['String']['output']>;
  /** Datetime the lead was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Users with access to the lead */
  users: Array<User>;
  /** Company website URL */
  website?: Maybe<Scalars['String']['output']>;
  /** Zip/PostalCode of the lead */
  zip?: Maybe<Scalars['String']['output']>;
};

/** Attributes for creating and updating a lead */
export type LeadAttributes = {
  /** Type of account */
  accountTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Campaign code */
  campaignCode?: InputMaybe<Scalars['String']['input']>;
  /** City of the lead */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Company of the lead */
  company?: InputMaybe<Scalars['String']['input']>;
  /** Datetime the lead was converted to an account */
  convertedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Country of the lead */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Datetime the lead was created */
  createdAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Description of the lead */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email address for the contact person */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Number of employees */
  employees?: InputMaybe<Scalars['Int']['input']>;
  /** The entity this lead belongs to */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** First name of the contact person */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Group that the lead belongs to */
  groupId?: InputMaybe<Scalars['ID']['input']>;
  /** Industry of the lead */
  industryId?: InputMaybe<Scalars['ID']['input']>;
  /** Remote IP address of the lead */
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  /** Last name of the contact person */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Source of the lead */
  leadSourceId?: InputMaybe<Scalars['ID']['input']>;
  /** Status of the lead */
  leadStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Link to the contact's LinkedIn profile */
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  /** Mobile number for the contact person */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** Owner of the lead */
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Phone number for the contact person */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Annual revenue of the lead */
  revenue?: InputMaybe<Scalars['Int']['input']>;
  /** State of the lead */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Street address of the lead */
  street?: InputMaybe<Scalars['String']['input']>;
  /** Job title of the contact person */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Datetime the lead was last updated */
  updatedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Company website URL */
  website?: InputMaybe<Scalars['String']['input']>;
  /** Zip/PostalCode for the lead */
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Lead. */
export type LeadConnection = {
  __typename?: 'LeadConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LeadEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Lead>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of LeadConvert. */
export type LeadConvertPayload = {
  __typename?: 'LeadConvertPayload';
  account: Account;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  lead: Lead;
};

/** Autogenerated return type of LeadCreate. */
export type LeadCreatePayload = {
  __typename?: 'LeadCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  lead?: Maybe<Lead>;
};

/** Autogenerated return type of LeadDelete. */
export type LeadDeletePayload = {
  __typename?: 'LeadDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  lead?: Maybe<Lead>;
};

/** An edge in a connection. */
export type LeadEdge = {
  __typename?: 'LeadEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Lead>;
};

/** Source of the lead */
export type LeadSource = {
  __typename?: 'LeadSource';
  /** Datetime the lead source was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Unique identifier for the lead source */
  id: Scalars['ID']['output'];
  /** Name of the lead source */
  name?: Maybe<Scalars['String']['output']>;
  /** Datetime the lead source was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating a lead source */
export type LeadSourceAttributes = {
  /** Name of the lead source */
  name: Scalars['String']['input'];
};

/** The connection type for LeadSource. */
export type LeadSourceConnection = {
  __typename?: 'LeadSourceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LeadSourceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<LeadSource>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of LeadSourceCreate. */
export type LeadSourceCreatePayload = {
  __typename?: 'LeadSourceCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  leadSource?: Maybe<LeadSource>;
};

/** An edge in a connection. */
export type LeadSourceEdge = {
  __typename?: 'LeadSourceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<LeadSource>;
};

/** Status of a lead */
export type LeadStatus = {
  __typename?: 'LeadStatus';
  /** Datetime the lead status was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Unique identifier for the lead status */
  id: Scalars['ID']['output'];
  /** Name of the lead status */
  name: Scalars['String']['output'];
  /** Datetime the lead status was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for LeadStatus. */
export type LeadStatusConnection = {
  __typename?: 'LeadStatusConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LeadStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<LeadStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type LeadStatusEdge = {
  __typename?: 'LeadStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<LeadStatus>;
};

/** Autogenerated return type of LeadUpdate. */
export type LeadUpdatePayload = {
  __typename?: 'LeadUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  lead?: Maybe<Lead>;
};

export type LegacyCreditNoteAttributes = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['ID']['input']>;
  amount: Scalars['Float']['input'];
  baseCurrencyTotal?: InputMaybe<Scalars['Float']['input']>;
  creditedInvoiceId?: InputMaybe<Scalars['ID']['input']>;
  currencyId: Scalars['ID']['input'];
  disputeReasonId?: InputMaybe<Scalars['ID']['input']>;
  issuedAt?: InputMaybe<Scalars['ISO8601Date']['input']>;
  kind: CreditNoteKind;
  number: Scalars['String']['input'];
  pdfBlobUuid: Scalars['ID']['input'];
  poNumber: Scalars['String']['input'];
  subtotal: Scalars['Float']['input'];
  taxAmount: Scalars['Float']['input'];
};

/** Autogenerated return type of LegacyCreditNoteCreate. */
export type LegacyCreditNoteCreatePayload = {
  __typename?: 'LegacyCreditNoteCreatePayload';
  creditNote?: Maybe<CreditNote>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type LegacyInvoiceAttributes = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['ID']['input']>;
  amount: Scalars['Float']['input'];
  baseCurrencyTotal?: InputMaybe<Scalars['Float']['input']>;
  currencyId: Scalars['ID']['input'];
  dueAt: Scalars['ISO8601Date']['input'];
  issuedAt?: InputMaybe<Scalars['ISO8601Date']['input']>;
  netPaymentDays: Scalars['Int']['input'];
  number: Scalars['String']['input'];
  pdfBlobUuid: Scalars['ID']['input'];
  poNumber: Scalars['String']['input'];
  state: InvoiceState;
  subtotal: Scalars['Float']['input'];
  taxAmount: Scalars['Float']['input'];
};

/** Autogenerated return type of LegacyInvoiceCreate. */
export type LegacyInvoiceCreatePayload = {
  __typename?: 'LegacyInvoiceCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
};

/** Autogenerated return type of LegacyPaymentCreate. */
export type LegacyPaymentCreatePayload = {
  __typename?: 'LegacyPaymentCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  payment?: Maybe<Payment>;
};

/** Autogenerated return type of LegacyRecurringRevenueImport. */
export type LegacyRecurringRevenueImportPayload = {
  __typename?: 'LegacyRecurringRevenueImportPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Macro = {
  __typename?: 'Macro';
  appliesTo?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Method = {
  __typename?: 'Method';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  outputs?: Maybe<Array<Output>>;
};

export type MobilePushAttributes = {
  device: Scalars['String']['input'];
  expirationTime?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of MobilePushSubscribe. */
export type MobilePushSubscribePayload = {
  __typename?: 'MobilePushSubscribePayload';
  errors: Array<Scalars['String']['output']>;
  registration: NotificationRegistration;
};

export type MonthlyReport = {
  __typename?: 'MonthlyReport';
  columnHeaders: Array<Scalars['String']['output']>;
  monthlyReportCategory: Array<MonthlyReportCategory>;
};

export type MonthlyReportAccount = {
  __typename?: 'MonthlyReportAccount';
  amounts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type MonthlyReportCategory = {
  __typename?: 'MonthlyReportCategory';
  monthlyReportAccounts: Array<MonthlyReportAccount>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an account [REQUIRED_SCOPES:standard:write] */
  accountCreate?: Maybe<AccountCreatePayload>;
  /** Delete an account [REQUIRED_SCOPES:standard:write] */
  accountDelete?: Maybe<AccountDeletePayload>;
  /** Reset account data [REQUIRED_SCOPES:owner:write] */
  accountReset?: Maybe<AccountResetPayload>;
  /** Using an existing account, sign up and pay for a subscription. [REQUIRED_SCOPES:standard:write] */
  accountSignup?: Maybe<AccountSignupPayload>;
  /** Update an account [REQUIRED_SCOPES:standard:write] */
  accountUpdate?: Maybe<AccountUpdatePayload>;
  /** Replaces an account address with a validated address [REQUIRED_SCOPES:standard:write] */
  accountValidateAddress?: Maybe<AccountValidateAddressPayload>;
  /** Generate an api access token [REQUIRED_SCOPES:security:write] */
  apiAccessTokenCreate?: Maybe<ApiAccessTokenCreatePayload>;
  /** Create an OAuth2.0 API application for generating API access tokens [REQUIRED_SCOPES:security:write] */
  apiClientCreate?: Maybe<ApiClientCreatePayload>;
  /** Delete an OAuth2.0 API application [REQUIRED_SCOPES:security:write] */
  apiClientDelete?: Maybe<ApiClientDeletePayload>;
  /** Generate a new client secret [REQUIRED_SCOPES:security:write] */
  apiClientSecretRenew?: Maybe<ApiClientSecretRenewPayload>;
  /** Update an OAuth2.0 API application [REQUIRED_SCOPES:security:write] */
  apiClientUpdate?: Maybe<ApiClientUpdatePayload>;
  /** Create an approval rule [REQUIRED_SCOPES:security:write] */
  approvalRuleCreate?: Maybe<ApprovalRuleCreatePayload>;
  /** Delete an approval rule [REQUIRED_SCOPES:security:write] */
  approvalRuleDelete?: Maybe<ApprovalRuleDeletePayload>;
  /** Update an approval rule [REQUIRED_SCOPES:security:write] */
  approvalRuleUpdate?: Maybe<ApprovalRuleUpdatePayload>;
  /** Create an approver [REQUIRED_SCOPES:security:write] */
  approverCreate?: Maybe<ApproverCreatePayload>;
  /** Delete an approver [REQUIRED_SCOPES:security:write] */
  approverDelete?: Maybe<ApproverDeletePayload>;
  /** Update an approver [REQUIRED_SCOPES:security:write] */
  approverUpdate?: Maybe<ApproverUpdatePayload>;
  /** Update the billing details for an account [REQUIRED_SCOPES:billing:write] */
  billingDetailsUpdate?: Maybe<BillingDetailsUpdatePayload>;
  /** Create a campaign [REQUIRED_SCOPES:standard:write] */
  campaignCreate?: Maybe<CampaignCreatePayload>;
  /** Delete a campaign [REQUIRED_SCOPES:standard:write] */
  campaignDelete?: Maybe<CampaignDeletePayload>;
  /** Update a campaign [REQUIRED_SCOPES:standard:write] */
  campaignUpdate?: Maybe<CampaignUpdatePayload>;
  /** Pay a Quote or an Invoice [REQUIRED_SCOPES:standard:write] */
  checkout?: Maybe<CheckoutPayload>;
  /** Update company details [REQUIRED_SCOPES:admin:write] */
  companyUpdate?: Maybe<CompanyUpdatePayload>;
  /** Create a contact [REQUIRED_SCOPES:standard:write] */
  contactCreate?: Maybe<ContactCreatePayload>;
  /** Delete a contact [REQUIRED_SCOPES:standard:write] */
  contactDelete?: Maybe<ContactDeletePayload>;
  /** Update a contact [REQUIRED_SCOPES:standard:write] */
  contactUpdate?: Maybe<ContactUpdatePayload>;
  /** Create a coupon [REQUIRED_SCOPES:product:write] */
  couponCreate?: Maybe<CouponCreatePayload>;
  /** Delete a coupon [REQUIRED_SCOPES:product:write] */
  couponDelete?: Maybe<CouponDeletePayload>;
  /** Update a coupon [REQUIRED_SCOPES:product:write] */
  couponUpdate?: Maybe<CouponUpdatePayload>;
  /** Apply a credit note to invoices [REQUIRED_SCOPES:billing:write] */
  creditNoteApplyToInvoices?: Maybe<CreditNoteApplyToInvoicesPayload>;
  /** Create a credit note [REQUIRED_SCOPES:billing:write] */
  creditNoteCreate?: Maybe<CreditNoteCreatePayload>;
  /** Delete a credit note [REQUIRED_SCOPES:billing:write] */
  creditNoteDelete?: Maybe<CreditNoteDeletePayload>;
  /** Issue a credit note [REQUIRED_SCOPES:billing:write] */
  creditNoteIssue?: Maybe<CreditNoteIssuePayload>;
  /** Update a credit note [REQUIRED_SCOPES:billing:write] */
  creditNoteUpdate?: Maybe<CreditNoteUpdatePayload>;
  /** Update a credit note taxes [REQUIRED_SCOPES:billing:write] */
  creditNoteUpdateTaxes?: Maybe<CreditNoteUpdateTaxesPayload>;
  /** Create a currency [REQUIRED_SCOPES:billing:write] */
  currencyCreate?: Maybe<CurrencyCreatePayload>;
  /** Update a currency [REQUIRED_SCOPES:billing:write] */
  currencyUpdate?: Maybe<CurrencyUpdatePayload>;
  /** Update the profile of the current user [REQUIRED_SCOPES:standard:write] */
  currentUserUpdate?: Maybe<CurrentUserUpdatePayload>;
  /** Create a deal [REQUIRED_SCOPES:standard:write] */
  dealCreate?: Maybe<DealCreatePayload>;
  /** Delete a deal [REQUIRED_SCOPES:standard:write] */
  dealDelete?: Maybe<DealDeletePayload>;
  /** Create a deal stage [REQUIRED_SCOPES:admin:write] */
  dealStageCreate?: Maybe<DealStageCreatePayload>;
  /** Delete a deal stage [REQUIRED_SCOPES:admin:write] */
  dealStageDelete?: Maybe<DealStageDeletePayload>;
  /** Update a deal stage [REQUIRED_SCOPES:admin:write] */
  dealStageUpdate?: Maybe<DealStageUpdatePayload>;
  /** Update a deal [REQUIRED_SCOPES:standard:write] */
  dealUpdate?: Maybe<DealUpdatePayload>;
  /** Add or recreate demo data in the warren.                                                                                 This process happens in the background                                                                                 and could take approximately 1 minute [REQUIRED_SCOPES:standard:write] */
  demoDataCreate?: Maybe<DemoDataCreatePayload>;
  /** Remove demo data from the warren [REQUIRED_SCOPES:standard:write] */
  demoDataDelete?: Maybe<DemoDataDeletePayload>;
  /** Create a dispute reason [REQUIRED_SCOPES:billing:write] */
  disputeReasonCreate?: Maybe<DisputeReasonCreatePayload>;
  /** Delete a dispute reason [REQUIRED_SCOPES:billing:write] */
  disputeReasonDelete?: Maybe<DisputeReasonDeletePayload>;
  /** Update a dispute reason [REQUIRED_SCOPES:billing:write] */
  disputeReasonUpdate?: Maybe<DisputeReasonUpdatePayload>;
  /** Reset email branding [REQUIRED_SCOPES:admin:write] */
  emailBrandingReset?: Maybe<EmailBrandingResetPayload>;
  /** Retry sending an email [REQUIRED_SCOPES:standard:write] */
  emailRetry?: Maybe<EmailRetryPayload>;
  /** Create an entity [REQUIRED_SCOPES:admin:write] */
  entityCreate?: Maybe<EntityCreatePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  entityDelete?: Maybe<EntityDeletePayload>;
  /** Create a duplicate of an entity [REQUIRED_SCOPES:admin:write] */
  entityDuplicate?: Maybe<EntityDuplicatePayload>;
  /** Update an entity [REQUIRED_SCOPES:admin:write] */
  entityUpdate?: Maybe<EntityUpdatePayload>;
  /** Replaces a company address with a validated address [REQUIRED_SCOPES:admin:write] */
  entityValidateAddress?: Maybe<EntityValidateAddressPayload>;
  /** Create a feature [REQUIRED_SCOPES:product:write] */
  featureCreate?: Maybe<FeatureCreatePayload>;
  /** Delete a feature [REQUIRED_SCOPES:product:write] */
  featureDelete?: Maybe<FeatureDeletePayload>;
  /** Update a feature [REQUIRED_SCOPES:product:write] */
  featureUpdate?: Maybe<FeatureUpdatePayload>;
  /** Create a feature usage record for usage based billing [REQUIRED_SCOPES:billing:write] */
  featureUsageCreate?: Maybe<FeatureUsageCreatePayload>;
  /** Delete a feature usage record [REQUIRED_SCOPES:billing:write] */
  featureUsageDelete?: Maybe<FeatureUsageDeletePayload>;
  /** Update a feature usage record for usage based billing [REQUIRED_SCOPES:billing:write] */
  featureUsageUpdate?: Maybe<FeatureUsageUpdatePayload>;
  /** Create a field [REQUIRED_SCOPES:standard:write] */
  fieldCreate?: Maybe<FieldCreatePayload>;
  /** Delete a field [REQUIRED_SCOPES:standard:write] */
  fieldDelete?: Maybe<LeadDeletePayload>;
  /** Update a field [REQUIRED_SCOPES:standard:write] */
  fieldUpdate?: Maybe<FieldUpdatePayload>;
  /** Create a financial account [REQUIRED_SCOPES:billing:write] */
  financialAccountCreate?: Maybe<FinancialAccountCreatePayload>;
  /** Delete a financial account [REQUIRED_SCOPES:billing:write] */
  financialAccountDelete?: Maybe<FinancialAccountDeletePayload>;
  /** Update a financial account [REQUIRED_SCOPES:billing:write] */
  financialAccountUpdate?: Maybe<FinancialAccountUpdatePayload>;
  /** Create a group [REQUIRED_SCOPES:security:write] */
  groupCreate?: Maybe<GroupCreatePayload>;
  /** Delete a group [REQUIRED_SCOPES:security:write] */
  groupDelete?: Maybe<GroupDeletePayload>;
  /** Update a group [REQUIRED_SCOPES:security:write] */
  groupUpdate?: Maybe<GroupUpdatePayload>;
  /** Create an industry [REQUIRED_SCOPES:admin:write] */
  industryCreate?: Maybe<IndustryCreatePayload>;
  /** Add a credit to an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceAddCredit?: Maybe<InvoiceAddCreditPayload>;
  /** Credit an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceCredit?: Maybe<InvoiceCreditPayload>;
  /** Delete a credit from an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceDeleteCredit?: Maybe<InvoiceDeleteCreditPayload>;
  /** Generate an invoice for the next billing period [REQUIRED_SCOPES:billing:write] */
  invoiceGenerateNextPeriod?: Maybe<InvoiceGenerateNextPeriodPayload>;
  /** Refund an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceRefund?: Maybe<InvoiceRefundPayload>;
  /** Regenerate an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceRegenerate?: Maybe<InvoiceRegeneratePayload>;
  /** Reissue a void invoice [REQUIRED_SCOPES:billing:write] */
  invoiceReissue?: Maybe<InvoiceReissuePayload>;
  /** Transition a draft invoice to ready state [REQUIRED_SCOPES:standard:write] */
  invoiceRelease?: Maybe<InvoiceReleasePayload>;
  /** Try to calculate an invoice taxes [REQUIRED_SCOPES:billing:write] */
  invoiceRetryTax?: Maybe<InvoiceRetryTaxPayload>;
  /** Send an invoice through email [REQUIRED_SCOPES:billing:write] */
  invoiceSendEmail?: Maybe<InvoiceSendEmailPayload>;
  /** Create an invoice template [REQUIRED_SCOPES:billing:write] */
  invoiceTemplateCreate?: Maybe<InvoiceTemplateCreatePayload>;
  /** Delete an invoice template [REQUIRED_SCOPES:billing:write] */
  invoiceTemplateDelete?: Maybe<InvoiceTemplateDeletePayload>;
  /** Update an invoice template [REQUIRED_SCOPES:billing:write] */
  invoiceTemplateUpdate?: Maybe<InvoiceTemplateUpdatePayload>;
  /** Update an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceUpdate?: Maybe<InvoiceUpdatePayload>;
  /** Edit a credit on an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceUpdateCredit?: Maybe<InvoiceUpdateCreditPayload>;
  /** Edit credits on an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceUpdateCredits?: Maybe<InvoiceUpdateCreditsPayload>;
  /** Update an invoice taxes [REQUIRED_SCOPES:billing:write] */
  invoiceUpdateTaxes?: Maybe<InvoiceUpdateTaxesPayload>;
  /** Void an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceVoid?: Maybe<InvoiceVoidPayload>;
  /** Write off an invoice [REQUIRED_SCOPES:billing:write] */
  invoiceWriteOff?: Maybe<InvoiceWriteOffPayload>;
  /** Convert a lead to an account [REQUIRED_SCOPES:standard:write] */
  leadConvert?: Maybe<LeadConvertPayload>;
  /** Create a lead [REQUIRED_SCOPES:standard:write] */
  leadCreate?: Maybe<LeadCreatePayload>;
  /** Delete a lead [REQUIRED_SCOPES:standard:write] */
  leadDelete?: Maybe<LeadDeletePayload>;
  /** Create a lead source [REQUIRED_SCOPES:admin:write] */
  leadSourceCreate?: Maybe<LeadSourceCreatePayload>;
  /** Update a lead [REQUIRED_SCOPES:standard:write] */
  leadUpdate?: Maybe<LeadUpdatePayload>;
  /** Create a legacy credit note [REQUIRED_SCOPES:billing:write] */
  legacyCreditNoteCreate?: Maybe<LegacyCreditNoteCreatePayload>;
  /** Create a legacy invoice [REQUIRED_SCOPES:billing:write] */
  legacyInvoiceCreate?: Maybe<LegacyInvoiceCreatePayload>;
  /** Create a legacy payment [REQUIRED_SCOPES:billing:write] */
  legacyPaymentCreate?: Maybe<LegacyPaymentCreatePayload>;
  /** Import legacy recurring revenues from a CSV source [REQUIRED_SCOPES:admin:write] */
  legacyRecurringRevenueImport?: Maybe<LegacyRecurringRevenueImportPayload>;
  /**  [REQUIRED_SCOPES:standard:write] */
  mobilePushSubscribe?: Maybe<MobilePushSubscribePayload>;
  /** Process mutations in bulks [REQUIRED_SCOPES:standard:write] */
  mutationBatch?: Maybe<MutationBatchPayload>;
  /** Apply a payment to an account [REQUIRED_SCOPES:billing:write] */
  paymentApplyToAccount?: Maybe<PaymentApplyToAccountPayload>;
  /** Apply a payment to an invoice [REQUIRED_SCOPES:billing:write] */
  paymentApplyToInvoice?: Maybe<PaymentApplyToInvoicePayload>;
  /** Apply a payment to one or more invoices [REQUIRED_SCOPES:billing:write] */
  paymentApplyToInvoices?: Maybe<PaymentApplyToInvoicesPayload>;
  /** Remove a payment from an invoice [REQUIRED_SCOPES:billing:write] */
  paymentUnapplyFromInvoices?: Maybe<PaymentUnapplyFromInvoicesPayload>;
  /** Create a plan [REQUIRED_SCOPES:product:write] */
  planCreate?: Maybe<PlanCreatePayload>;
  /** Delete a plan [REQUIRED_SCOPES:product:write] */
  planDelete?: Maybe<PlanDeletePayload>;
  /** Create a duplicate of a plan [REQUIRED_SCOPES:product:write] */
  planDuplicate?: Maybe<PlanDuplicatePayload>;
  /** Update a plan feature [REQUIRED_SCOPES:product:write] */
  planFeatureUpdate?: Maybe<PlanFeatureUpdatePayload>;
  /** Update a plan [REQUIRED_SCOPES:product:write] */
  planUpdate?: Maybe<PlanUpdatePayload>;
  /** Create a platform [REQUIRED_SCOPES:product:write] */
  platformCreate?: Maybe<PlatformCreatePayload>;
  /** Delete a platform [REQUIRED_SCOPES:product:write] */
  platformDelete?: Maybe<PlatformDeletePayload>;
  /** Update a platform [REQUIRED_SCOPES:product:write] */
  platformUpdate?: Maybe<PlatformUpdatePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  pluginCreate?: Maybe<PluginCreatePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginDefinitionCreate?: Maybe<PluginDefinitionCreatePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginDefinitionDelete?: Maybe<PluginDefinitionDeletePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginDefinitionUpdate?: Maybe<PluginDefinitionUpdatePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  pluginDelete?: Maybe<PluginDeletePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginParameterCreate?: Maybe<PluginParameterCreatePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginParameterDelete?: Maybe<PluginParameterDeletePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginParameterUpdate?: Maybe<PluginParameterUpdatePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  pluginUpdate?: Maybe<PluginUpdatePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  pluginValueCreate?: Maybe<PluginValueCreatePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  pluginValueDelete?: Maybe<PluginValueDeletePayload>;
  /**  [REQUIRED_SCOPES:admin:write] */
  pluginValueUpdate?: Maybe<PluginValueUpdatePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginVendorCreate?: Maybe<PluginVendorCreatePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginVendorDelete?: Maybe<PluginVendorDeletePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  pluginVendorUpdate?: Maybe<PluginVendorUpdatePayload>;
  /** Generate a short lived access token to access the customer portal [REQUIRED_SCOPES:security:write] */
  portalSessionCreate?: Maybe<PortalSessionCreatePayload>;
  /** Create a charge on a price list [REQUIRED_SCOPES:product:write] */
  priceListChargeCreate?: Maybe<PriceListChargeCreatePayload>;
  /** Delete a charge from a price list [REQUIRED_SCOPES:product:write] */
  priceListChargeDelete?: Maybe<PriceListChargeDeletePayload>;
  /** Update a charge on a price list [REQUIRED_SCOPES:product:write] */
  priceListChargeUpdate?: Maybe<PriceListChargeUpdatePayload>;
  /** Create a price list [REQUIRED_SCOPES:product:write] */
  priceListCreate?: Maybe<PriceListCreatePayload>;
  /** Delete a price list [REQUIRED_SCOPES:product:write] */
  priceListDelete?: Maybe<PriceListDeletePayload>;
  /** Create a duplicate of a price list [REQUIRED_SCOPES:product:write] */
  priceListDuplicate?: Maybe<PriceListDuplicatePayload>;
  /** Update a price list [REQUIRED_SCOPES:product:write] */
  priceListUpdate?: Maybe<PriceListUpdatePayload>;
  /** Create a product category [REQUIRED_SCOPES:product:write] */
  productCategoryCreate?: Maybe<ProductCategoryCreatePayload>;
  /** Delete a product category [REQUIRED_SCOPES:product:write] */
  productCategoryDelete?: Maybe<ProductCategoryDeletePayload>;
  /** Update a product category [REQUIRED_SCOPES:product:write] */
  productCategoryUpdate?: Maybe<ProductCategoryUpdatePayload>;
  /** Create a product [REQUIRED_SCOPES:product:write] */
  productCreate?: Maybe<ProductCreatePayload>;
  /** Delete a product [REQUIRED_SCOPES:product:write] */
  productDelete?: Maybe<ProductDeletePayload>;
  /** Create a duplicate of a product [REQUIRED_SCOPES:product:write] */
  productDuplicate?: Maybe<ProductDuplicatePayload>;
  /** Create products in bulk from a JSON recipe [REQUIRED_SCOPES:product:write] */
  productImport?: Maybe<ProductImportPayload>;
  /** Update a product [REQUIRED_SCOPES:product:write] */
  productUpdate?: Maybe<ProductUpdatePayload>;
  /** Trigger a fake provisioning workflow to send a test webhook request [REQUIRED_SCOPES:workflow:write] */
  provisioningWorkflowTest?: Maybe<ProvisioningWorkflowTestPayload>;
  /** Flag a quote as accepted [REQUIRED_SCOPES:standard:write] */
  quoteAccept?: Maybe<QuoteAcceptPayload>;
  /** Create an account and get a quote amount for a subscription. [REQUIRED_SCOPES:standard:write] */
  quoteAccountSignup?: Maybe<QuoteAccountSignupPayload>;
  /** Add a coupon to a Quote [REQUIRED_SCOPES:standard:write] */
  quoteAddCoupon?: Maybe<QuoteAddCouponPayload>;
  /** Convert the quote to a subscription [REQUIRED_SCOPES:admin:write] */
  quoteApplyChanges?: Maybe<QuoteApplyChangesPayload>;
  /** Cancel the approval process and remove the pending approval request [REQUIRED_SCOPES:standard:write] */
  quoteApprovalCancel?: Maybe<QuoteApprovalCancelPayload>;
  /** Begin with the approval process [REQUIRED_SCOPES:standard:write] */
  quoteApprovalStart?: Maybe<QuoteApprovalStartPayload>;
  /** Approve a quote [REQUIRED_SCOPES:standard:write] */
  quoteApprove?: Maybe<QuoteApprovePayload>;
  /** Create a quote change [REQUIRED_SCOPES:standard:write] */
  quoteChangeAdd?: Maybe<QuoteChangeCreatePayload>;
  /** Add a price list with its charges and quantities to the quote [REQUIRED_SCOPES:standard:write] */
  quoteChangeCreate?: Maybe<QuoteChangeCreatePayload>;
  /** Add a price list and configure the ramp up of the charges [REQUIRED_SCOPES:standard:write] */
  quoteChangeCreateRampUp?: Maybe<QuoteChangeCreateRampUpPayload>;
  /** Add a price list and configure the ramp up of the charges [REQUIRED_SCOPES:standard:write] */
  quoteChangeCreateRampUpPreview?: Maybe<QuoteChangeCreateRampUpPreviewPayload>;
  /** Delete a quote change [REQUIRED_SCOPES:standard:write] */
  quoteChangeDelete?: Maybe<QuoteChangeDeletePayload>;
  /** Create a discount for a quote charge [REQUIRED_SCOPES:standard:write] */
  quoteChangeDiscountCreate?: Maybe<QuoteChangeDiscountCreatePayload>;
  /** Update a quote change [REQUIRED_SCOPES:standard:write] */
  quoteChangeUpdate?: Maybe<QuoteChangeUpdatePayload>;
  /** Modify the ramp deal configuration [REQUIRED_SCOPES:standard:write] */
  quoteChangeUpdateRampUp?: Maybe<QuoteChangeUpdateRampUpPayload>;
  /** Add free months to a quote charge [REQUIRED_SCOPES:standard:write] */
  quoteChargeFreeMonthsCreate?: Maybe<QuoteChargeFreeMonthsCreatePayload>;
  /** Modify the quote charge properties [REQUIRED_SCOPES:standard:write] */
  quoteChargeUpdate?: Maybe<QuoteChargeUpdatePayload>;
  /** Create a quote for a new subscription or subscription price list change [REQUIRED_SCOPES:standard:write] */
  quoteCompose?: Maybe<QuoteComposePayload>;
  /** Create an empty quote [REQUIRED_SCOPES:standard:write] */
  quoteCreate?: Maybe<QuoteCreatePayload>;
  /** Create an empty quote with a new deal [REQUIRED_SCOPES:standard:write] */
  quoteCreateWithDeal?: Maybe<QuoteCreateWithDealPayload>;
  /** Delete a quote [REQUIRED_SCOPES:standard:write] */
  quoteDelete?: Maybe<QuoteDeletePayload>;
  /** Create a duplicate of a quote [REQUIRED_SCOPES:standard:write] */
  quoteDuplicate?: Maybe<QuoteDuplicatePayload>;
  /**  [REQUIRED_SCOPES:standard:write] */
  quotePlanPreview: QuotePlanPreview;
  /** Poll for the signing url to check if it is ready [REQUIRED_SCOPES:standard:write] */
  quotePollSigningUrl?: Maybe<QuotePollSigningUrlPayload>;
  /** DEPRECATED. Please use Quote Checkout instead [REQUIRED_SCOPES:standard:write] */
  quotePreview: QuotePlanPreview;
  /** Update a quote taxes [REQUIRED_SCOPES:standard:write] */
  quoteRecalculateTaxes?: Maybe<QuoteRecalculateTaxesPayload>;
  /** Reject a quote [REQUIRED_SCOPES:standard:write] */
  quoteReject?: Maybe<QuoteRejectPayload>;
  /** Removes coupons from a quote [REQUIRED_SCOPES:standard:write] */
  quoteRemoveCoupons?: Maybe<QuoteRemoveCouponsPayload>;
  /** Send the quote by email to the quotes contact [REQUIRED_SCOPES:standard:write] */
  quoteSendEmail?: Maybe<QuoteSendEmailPayload>;
  /** Generate a signing url for a quote [REQUIRED_SCOPES:standard:write] */
  quoteSigningUrlCreate?: Maybe<QuoteCreateSignUrlPayload>;
  /** Generate a quote to reinstate a subscription [REQUIRED_SCOPES:standard:write] */
  quoteSubscriptionReinstate?: Maybe<QuoteSubscriptionReinstatePayload>;
  /** Generate a quote to renew a subscription [REQUIRED_SCOPES:standard:write] */
  quoteSubscriptionRenew?: Maybe<QuoteSubscriptionRenewPayload>;
  /** Quote changing quantities and/or discounts to subscriptions [REQUIRED_SCOPES:standard:write] */
  quoteSubscriptionUpdate?: Maybe<QuoteSubscriptionUpdatePayload>;
  /** Quote a subscription upgrade [REQUIRED_SCOPES:standard:write] */
  quoteSubscriptionUpgrade?: Maybe<QuoteSubscriptionUpgradePayload>;
  /** Undo the a quote after it has been applied [REQUIRED_SCOPES:standard:write] */
  quoteUndo?: Maybe<QuoteUndoPayload>;
  /** Unshare a quote [REQUIRED_SCOPES:standard:write] */
  quoteUnshare?: Maybe<QuoteUnsharePayload>;
  /** Update a quote [REQUIRED_SCOPES:standard:write] */
  quoteUpdate?: Maybe<QuoteUpdatePayload>;
  /** Create a role [REQUIRED_SCOPES:security:write] */
  roleCreate?: Maybe<RoleCreatePayload>;
  /** Delete a role [REQUIRED_SCOPES:security:write] */
  roleDelete?: Maybe<RoleDeletePayload>;
  /** Update a role [REQUIRED_SCOPES:security:write] */
  roleUpdate?: Maybe<RoleUpdatePayload>;
  /** Complete the signup for a Bunny account [REQUIRED_SCOPES:legendary:write] */
  signupActivate?: Maybe<SignupActivatePayload>;
  /** Sign up for a Bunny account [REQUIRED_SCOPES:legendary:write] */
  signupCreate?: Maybe<SignupCreatePayload>;
  /** Cancel an active subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionCancel?: Maybe<SubscriptionCancelPayload>;
  /** Create a paid or trial subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionCreate?: Maybe<SubscriptionCreatePayload>;
  /** Delete a subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionDelete?: Maybe<SubscriptionDeletePayload>;
  /** Reinstating an expired or canceled subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionReinstate?: Maybe<SubscriptionReinstatePayload>;
  /** Toggle auto-renew ON or OFF on a subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionSetAutoRenew?: Maybe<SubscriptionSetAutoRenewPayload>;
  /** Update the tenant linked to a subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionTenantUpdate?: Maybe<SubscriptionTenantUpdatePayload>;
  /** Convert an existing trial subscription into a paid subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionTrialConvert?: Maybe<SubscriptionTrialConvertPayload>;
  /** Preview of a existing trial subscription conversion [REQUIRED_SCOPES:standard:write] */
  subscriptionTrialConvertPreview?: Maybe<SubscriptionTrialConvertPreviewPayload>;
  /** Extend the subscription's trial period [REQUIRED_SCOPES:standard:write] */
  subscriptionTrialExtend?: Maybe<SubscriptionTrialExtendPayload>;
  /** Quote quantity and/or discount modifications to a subscription [REQUIRED_SCOPES:standard:write] */
  subscriptionUpdate?: Maybe<SubscriptionUpdatePayload>;
  /** Update an email template [REQUIRED_SCOPES:admin:write] */
  templateUpdate?: Maybe<TemplateUpdatePayload>;
  /** Create an tenant in Bunny to reference a tenant in your SaaS application [REQUIRED_SCOPES:product:write] */
  tenantCreate?: Maybe<TenantCreatePayload>;
  /** Delete a tenant [REQUIRED_SCOPES:product:write] */
  tenantDelete?: Maybe<TenantDeletePayload>;
  /** Updates the metrics for a tenant [REQUIRED_SCOPES:platform:write] */
  tenantMetricsUpdate?: Maybe<TenantMetricsUpdatePayload>;
  /** Change the provisioning state to trigger a provisioning workflow [REQUIRED_SCOPES:standard:write] */
  tenantProvisioningChangeUpdate?: Maybe<TenantProvisioningChangeUpdatePayload>;
  /** Update an tenant [REQUIRED_SCOPES:product:write] */
  tenantUpdate?: Maybe<TenantUpdatePayload>;
  /** Create a user [REQUIRED_SCOPES:security:write] */
  userCreate?: Maybe<UserCreatePayload>;
  /** Delete a user [REQUIRED_SCOPES:security:write] */
  userDelete?: Maybe<UserDeletePayload>;
  /** Update a user [REQUIRED_SCOPES:security:write] */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** Create a view [REQUIRED_SCOPES:standard:write] */
  viewCreate?: Maybe<ViewCreatePayload>;
  /** Delete a view [REQUIRED_SCOPES:standard:write] */
  viewDelete?: Maybe<ViewDeletePayload>;
  /** Update a view [REQUIRED_SCOPES:standard:write] */
  viewUpdate?: Maybe<ViewUpdatePayload>;
  /**  [REQUIRED_SCOPES:legendary:write] */
  warrenProvision?: Maybe<WarrenProvisionPayload>;
  /**  [REQUIRED_SCOPES:standard:write] */
  webPushSubscribe?: Maybe<WebPushSubscribePayload>;
  /** Retry sending a webhook event [REQUIRED_SCOPES:workflow:write] */
  webhookEventRetry?: Maybe<WebhookEventRetryPayload>;
  /** Generate a short lived access token to manage your subscription with bunny [REQUIRED_SCOPES:admin:write] */
  widgetTokenCreate?: Maybe<WidgetTokenCreatePayload>;
  /** Create a workflow category [REQUIRED_SCOPES:workflow:write] */
  workflowCategoryCreate?: Maybe<WorkflowCategoryCreatePayload>;
  /** Delete a workflow category [REQUIRED_SCOPES:workflow:write] */
  workflowCategoryDelete?: Maybe<WorkflowCategoryDeletePayload>;
  /** Update a workflow category [REQUIRED_SCOPES:workflow:write] */
  workflowCategoryUpdate?: Maybe<WorkflowCategoryUpdatePayload>;
  /** Create a workflow [REQUIRED_SCOPES:workflow:write] */
  workflowCreate?: Maybe<WorkflowCreatePayload>;
  /** Delete a workflow [REQUIRED_SCOPES:workflow:write] */
  workflowDelete?: Maybe<WorkflowDeletePayload>;
  /** Create a duplicate of a workflow [REQUIRED_SCOPES:workflow:write] */
  workflowDuplicate?: Maybe<WorkflowDuplicatePayload>;
  /** Update a workflow [REQUIRED_SCOPES:workflow:write] */
  workflowUpdate?: Maybe<WorkflowUpdatePayload>;
  /** Create/restore all of the default workflows [REQUIRED_SCOPES:workflow:write] */
  workflowsDefaultCreate?: Maybe<WorkflowsDefaultCreatePayload>;
};


export type MutationAccountCreateArgs = {
  attributes: AccountAttributes;
};


export type MutationAccountDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAccountResetArgs = {
  confirm?: InputMaybe<Scalars['Boolean']['input']>;
  deleteAccounts?: InputMaybe<Scalars['Boolean']['input']>;
  deleteContacts?: InputMaybe<Scalars['Boolean']['input']>;
  deleteLeads?: InputMaybe<Scalars['Boolean']['input']>;
  deleteProducts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAccountSignupArgs = {
  accountId: Scalars['ID']['input'];
  entityId: Scalars['ID']['input'];
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  pluginId: Scalars['String']['input'];
  priceListCode: Scalars['String']['input'];
  quoteId: Scalars['ID']['input'];
};


export type MutationAccountUpdateArgs = {
  attributes: AccountAttributes;
  id: Scalars['ID']['input'];
};


export type MutationAccountValidateAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApiAccessTokenCreateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApiClientCreateArgs = {
  attributes: ApiClientAttributes;
};


export type MutationApiClientDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApiClientSecretRenewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApiClientUpdateArgs = {
  attributes: ApiClientAttributes;
  id: Scalars['ID']['input'];
};


export type MutationApprovalRuleCreateArgs = {
  attributes: ApprovalRuleAttributes;
};


export type MutationApprovalRuleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApprovalRuleUpdateArgs = {
  attributes: ApprovalRuleAttributes;
  id: Scalars['ID']['input'];
};


export type MutationApproverCreateArgs = {
  attributes: ApproverAttributes;
};


export type MutationApproverDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApproverUpdateArgs = {
  attributes: ApproverAttributes;
  id: Scalars['ID']['input'];
};


export type MutationBillingDetailsUpdateArgs = {
  attributes: BillingDetailsAttributes;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCampaignCreateArgs = {
  attributes: CampaignAttributes;
};


export type MutationCampaignDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCampaignUpdateArgs = {
  attributes: CampaignAttributes;
  id: Scalars['ID']['input'];
};


export type MutationCheckoutArgs = {
  invoiceId?: InputMaybe<Scalars['ID']['input']>;
  payableId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethodData?: InputMaybe<CheckoutPaymentMethodAttributes>;
  paymentMethodId?: InputMaybe<Scalars['ID']['input']>;
  quoteId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCompanyUpdateArgs = {
  attributes: CompanyAttributes;
};


export type MutationContactCreateArgs = {
  attributes: ContactAttributes;
};


export type MutationContactDeleteArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationContactUpdateArgs = {
  attributes: ContactAttributes;
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCouponCreateArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  attributes: CouponAttributes;
  planId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCouponDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCouponUpdateArgs = {
  attributes: CouponAttributes;
  id: Scalars['ID']['input'];
};


export type MutationCreditNoteApplyToInvoicesArgs = {
  creditNoteId: Scalars['ID']['input'];
  invoiceIds: Array<Scalars['ID']['input']>;
};


export type MutationCreditNoteCreateArgs = {
  disputeReasonId?: InputMaybe<Scalars['ID']['input']>;
  invoiceId: Scalars['ID']['input'];
  kind?: InputMaybe<CreditNoteKind>;
};


export type MutationCreditNoteDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreditNoteIssueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreditNoteUpdateArgs = {
  attributes: CreditNoteAttributes;
  id: Scalars['ID']['input'];
};


export type MutationCreditNoteUpdateTaxesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCurrencyCreateArgs = {
  attributes: CurrencyAttributes;
};


export type MutationCurrencyUpdateArgs = {
  attributes: CurrencyAttributes;
  id: Scalars['ID']['input'];
};


export type MutationCurrentUserUpdateArgs = {
  attributes: CurrentUserAttributes;
};


export type MutationDealCreateArgs = {
  attributes: DealAttributes;
};


export type MutationDealDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDealStageCreateArgs = {
  attributes: DealStageAttributes;
};


export type MutationDealStageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDealStageUpdateArgs = {
  attributes: DealStageAttributes;
  id: Scalars['ID']['input'];
};


export type MutationDealUpdateArgs = {
  attributes: DealAttributes;
  id: Scalars['ID']['input'];
};


export type MutationDisputeReasonCreateArgs = {
  attributes: DisputeReasonAttributes;
};


export type MutationDisputeReasonDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisputeReasonUpdateArgs = {
  attributes: DisputeReasonAttributes;
  id: Scalars['ID']['input'];
};


export type MutationEmailRetryArgs = {
  uuid: Scalars['String']['input'];
};


export type MutationEntityCreateArgs = {
  attributes: EntityAttributes;
};


export type MutationEntityDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityUpdateArgs = {
  attributes: EntityAttributes;
  id: Scalars['ID']['input'];
};


export type MutationEntityValidateAddressArgs = {
  entityId: Scalars['ID']['input'];
};


export type MutationFeatureCreateArgs = {
  attributes: FeatureAttributes;
  productId: Scalars['ID']['input'];
};


export type MutationFeatureDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFeatureUpdateArgs = {
  attributes: FeatureAttributes;
  id: Scalars['ID']['input'];
};


export type MutationFeatureUsageCreateArgs = {
  attributes: FeatureUsageAttributes;
};


export type MutationFeatureUsageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFeatureUsageUpdateArgs = {
  attributes: FeatureUsageAttributes;
  id: Scalars['ID']['input'];
};


export type MutationFieldCreateArgs = {
  attributes: FieldAttributes;
};


export type MutationFieldDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFieldUpdateArgs = {
  attributes: FieldAttributes;
  id: Scalars['ID']['input'];
};


export type MutationFinancialAccountCreateArgs = {
  attributes: FinancialAccountAttributes;
};


export type MutationFinancialAccountDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFinancialAccountUpdateArgs = {
  attributes: FinancialAccountAttributes;
  id: Scalars['ID']['input'];
};


export type MutationGroupCreateArgs = {
  attributes: GroupAttributes;
};


export type MutationGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGroupUpdateArgs = {
  attributes: GroupAttributes;
  id: Scalars['ID']['input'];
};


export type MutationIndustryCreateArgs = {
  attributes: IndustryAttributes;
};


export type MutationInvoiceAddCreditArgs = {
  amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationInvoiceCreditArgs = {
  disputeReasonId?: InputMaybe<Scalars['ID']['input']>;
  invoiceId: Scalars['ID']['input'];
};


export type MutationInvoiceDeleteCreditArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceGenerateNextPeriodArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  billUsageCharges?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInvoiceRefundArgs = {
  disputeReasonId?: InputMaybe<Scalars['ID']['input']>;
  invoiceId: Scalars['ID']['input'];
};


export type MutationInvoiceRegenerateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceReissueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceRetryTaxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceSendEmailArgs = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationInvoiceTemplateCreateArgs = {
  attributes: InvoiceTemplateAttributes;
};


export type MutationInvoiceTemplateDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceTemplateUpdateArgs = {
  attributes: InvoiceTemplateAttributes;
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateArgs = {
  attributes: InvoiceAttributes;
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateCreditArgs = {
  amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateCreditsArgs = {
  attributes: InvoiceUpdateCreditsAttributes;
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateTaxesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceVoidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceWriteOffArgs = {
  disputeReasonId?: InputMaybe<Scalars['ID']['input']>;
  invoiceId: Scalars['ID']['input'];
};


export type MutationLeadConvertArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLeadCreateArgs = {
  attributes: LeadAttributes;
};


export type MutationLeadDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLeadSourceCreateArgs = {
  attributes: LeadSourceAttributes;
};


export type MutationLeadUpdateArgs = {
  attributes: LeadAttributes;
  id: Scalars['ID']['input'];
};


export type MutationLegacyCreditNoteCreateArgs = {
  attributes: LegacyCreditNoteAttributes;
};


export type MutationLegacyInvoiceCreateArgs = {
  attributes: LegacyInvoiceAttributes;
};


export type MutationLegacyPaymentCreateArgs = {
  attributes: PaymentAttributes;
  invoiceIds: Array<Scalars['ID']['input']>;
};


export type MutationLegacyRecurringRevenueImportArgs = {
  source: Scalars['String']['input'];
};


export type MutationMobilePushSubscribeArgs = {
  attributes: MobilePushAttributes;
};


export type MutationMutationBatchArgs = {
  attributes?: InputMaybe<Array<BatchMutationAttributes>>;
};


export type MutationPaymentApplyToAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentApplyToInvoiceArgs = {
  invoiceId: Scalars['ID']['input'];
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentApplyToInvoicesArgs = {
  invoiceIds: Array<Scalars['ID']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentUnapplyFromInvoicesArgs = {
  invoiceIds: Array<Scalars['ID']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPlanCreateArgs = {
  attributes: PlanAttributes;
};


export type MutationPlanDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPlanDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPlanFeatureUpdateArgs = {
  attributes: PlanFeatureAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPlanUpdateArgs = {
  attributes: PlanAttributes;
  id: Scalars['ID']['input'];
  planFeatures?: InputMaybe<Array<PlanFeatureAttributes>>;
};


export type MutationPlatformCreateArgs = {
  attributes: PlatformAttributes;
};


export type MutationPlatformDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPlatformUpdateArgs = {
  attributes: PlatformAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPluginCreateArgs = {
  attributes: PluginAttributes;
};


export type MutationPluginDefinitionCreateArgs = {
  attributes: PluginDefinitionAttributes;
};


export type MutationPluginDefinitionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPluginDefinitionUpdateArgs = {
  attributes: PluginDefinitionAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPluginDeleteArgs = {
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPluginParameterCreateArgs = {
  attributes: PluginParameterAttributes;
};


export type MutationPluginParameterDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPluginParameterUpdateArgs = {
  attributes: PluginParameterAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPluginUpdateArgs = {
  attributes: PluginAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPluginValueCreateArgs = {
  attributes: PluginValueAttributes;
};


export type MutationPluginValueDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPluginValueUpdateArgs = {
  attributes: PluginValueAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPluginVendorCreateArgs = {
  attributes: PluginVendorAttributes;
};


export type MutationPluginVendorDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPluginVendorUpdateArgs = {
  attributes: PluginVendorAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPortalSessionCreateArgs = {
  expiry?: InputMaybe<Scalars['Int']['input']>;
  returnUrl?: InputMaybe<Scalars['String']['input']>;
  tenantCode: Scalars['String']['input'];
};


export type MutationPriceListChargeCreateArgs = {
  attributes: PriceListChargeAttributes;
};


export type MutationPriceListChargeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPriceListChargeUpdateArgs = {
  attributes: PriceListChargeAttributes;
  id: Scalars['ID']['input'];
};


export type MutationPriceListCreateArgs = {
  attributes: PriceListAttributes;
};


export type MutationPriceListDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPriceListDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPriceListUpdateArgs = {
  attributes: PriceListAttributes;
  id: Scalars['ID']['input'];
};


export type MutationProductCategoryCreateArgs = {
  attributes: ProductCategoryAttributes;
};


export type MutationProductCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductCategoryUpdateArgs = {
  attributes: ProductCategoryAttributes;
  id: Scalars['ID']['input'];
};


export type MutationProductCreateArgs = {
  attributes: ProductAttributes;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductImportArgs = {
  attributes: Scalars['JSON']['input'];
};


export type MutationProductUpdateArgs = {
  attributes: ProductAttributes;
  id: Scalars['ID']['input'];
};


export type MutationProvisioningWorkflowTestArgs = {
  platformId: Scalars['ID']['input'];
};


export type MutationQuoteAcceptArgs = {
  name: Scalars['String']['input'];
  poNumber?: InputMaybe<Scalars['String']['input']>;
  quoteId?: InputMaybe<Scalars['ID']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationQuoteAccountSignupArgs = {
  accountName: Scalars['String']['input'];
  billingContact: ContactAttributes;
  entityId: Scalars['ID']['input'];
  priceListCode: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationQuoteAddCouponArgs = {
  couponCode: Scalars['String']['input'];
  quoteId: Scalars['ID']['input'];
};


export type MutationQuoteApplyChangesArgs = {
  persist?: InputMaybe<Scalars['Boolean']['input']>;
  quoteId: Scalars['ID']['input'];
  taxes?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationQuoteApprovalCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteApprovalStartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteApproveArgs = {
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};


export type MutationQuoteChangeAddArgs = {
  priceListId: Scalars['ID']['input'];
  priceOverride?: InputMaybe<Scalars['Boolean']['input']>;
  quoteId: Scalars['ID']['input'];
  trial?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationQuoteChangeCreateArgs = {
  priceListId: Scalars['ID']['input'];
  priceOverride?: InputMaybe<Scalars['Boolean']['input']>;
  quoteId: Scalars['ID']['input'];
  trial?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationQuoteChangeCreateRampUpArgs = {
  charges?: InputMaybe<Array<QuoteChargeAttributes>>;
  priceListId: Scalars['ID']['input'];
  quoteId: Scalars['ID']['input'];
  rampIntervalMonths: Scalars['Int']['input'];
};


export type MutationQuoteChangeCreateRampUpPreviewArgs = {
  priceListId: Scalars['ID']['input'];
  quoteId: Scalars['ID']['input'];
  rampIntervalMonths?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationQuoteChangeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteChangeDiscountCreateArgs = {
  attributes?: InputMaybe<QuoteChargeAttributes>;
  quoteChargeId: Scalars['ID']['input'];
  quoteId: Scalars['ID']['input'];
};


export type MutationQuoteChangeUpdateArgs = {
  charges?: InputMaybe<Array<QuoteChargeAttributes>>;
  id: Scalars['ID']['input'];
  priceOverride?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationQuoteChangeUpdateRampUpArgs = {
  charges?: InputMaybe<Array<QuoteChargeAttributes>>;
  quoteChangeId: Scalars['ID']['input'];
  rampIntervalMonths?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationQuoteChargeFreeMonthsCreateArgs = {
  attributes: QuoteFreeMonthsAttributes;
  quoteChargeId: Scalars['ID']['input'];
};


export type MutationQuoteChargeUpdateArgs = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceTiers?: InputMaybe<Array<PriceListChargeTierAttributes>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quoteChargeId: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
};


export type MutationQuoteComposeArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  priceListId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quoteId?: InputMaybe<Scalars['ID']['input']>;
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationQuoteCreateArgs = {
  attributes: QuoteAttributes;
};


export type MutationQuoteCreateWithDealArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  dealAttributes: DealAttributes;
  quoteAttributes: QuoteAttributes;
};


export type MutationQuoteDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuotePlanPreviewArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  apply?: InputMaybe<Scalars['Boolean']['input']>;
  basePrice?: InputMaybe<Scalars['Boolean']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  priceListId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
  taxes?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationQuotePollSigningUrlArgs = {
  quoteId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationQuotePreviewArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  apply?: InputMaybe<Scalars['Boolean']['input']>;
  freeze?: InputMaybe<Scalars['Boolean']['input']>;
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  quoteId: Scalars['ID']['input'];
  taxes?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationQuoteRecalculateTaxesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteRejectArgs = {
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};


export type MutationQuoteRemoveCouponsArgs = {
  quoteId: Scalars['ID']['input'];
};


export type MutationQuoteSendEmailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteSigningUrlCreateArgs = {
  quoteId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationQuoteSubscriptionReinstateArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationQuoteSubscriptionRenewArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationQuoteSubscriptionUpdateArgs = {
  subscriptionIds: Array<Scalars['ID']['input']>;
};


export type MutationQuoteSubscriptionUpgradeArgs = {
  priceListId: Scalars['ID']['input'];
  subscriptionId: Scalars['ID']['input'];
};


export type MutationQuoteUndoArgs = {
  quoteId: Scalars['ID']['input'];
};


export type MutationQuoteUnshareArgs = {
  id: Scalars['ID']['input'];
};


export type MutationQuoteUpdateArgs = {
  attributes: QuoteAttributes;
  id: Scalars['ID']['input'];
};


export type MutationRoleCreateArgs = {
  attributes: RoleAttributes;
};


export type MutationRoleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRoleUpdateArgs = {
  attributes: RoleAttributes;
  id: Scalars['ID']['input'];
};


export type MutationSignupActivateArgs = {
  token: Scalars['String']['input'];
};


export type MutationSignupCreateArgs = {
  attributes: SignupAttributes;
};


export type MutationSubscriptionCancelArgs = {
  cancellationDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationSubscriptionCreateArgs = {
  attributes: SubscriptionAttributes;
};


export type MutationSubscriptionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSubscriptionReinstateArgs = {
  effectiveDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  ids: Array<Scalars['ID']['input']>;
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  taxes?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSubscriptionSetAutoRenewArgs = {
  evergreen: Scalars['Boolean']['input'];
  ids: Array<Scalars['ID']['input']>;
};


export type MutationSubscriptionTenantUpdateArgs = {
  attributes: SubscriptionTenantUpdateAttributes;
  id: Scalars['ID']['input'];
};


export type MutationSubscriptionTrialConvertArgs = {
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  subscriptionId: Scalars['ID']['input'];
};


export type MutationSubscriptionTrialConvertPreviewArgs = {
  subscriptionId: Scalars['ID']['input'];
};


export type MutationSubscriptionTrialExtendArgs = {
  id: Scalars['ID']['input'];
  trialEndDate: Scalars['ISO8601Date']['input'];
};


export type MutationSubscriptionUpdateArgs = {
  attributes: SubscriptionAttributes;
  id: Scalars['ID']['input'];
};


export type MutationTemplateUpdateArgs = {
  attributes: TemplateAttributes;
  id: Scalars['ID']['input'];
};


export type MutationTenantCreateArgs = {
  attributes: TenantAttributes;
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationTenantDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTenantMetricsUpdateArgs = {
  attributes: TenantMetricsAttributes;
  code: Scalars['String']['input'];
};


export type MutationTenantProvisioningChangeUpdateArgs = {
  attributes: TenantProvisioningChangeAttributes;
  id: Scalars['ID']['input'];
};


export type MutationTenantUpdateArgs = {
  attributes: TenantAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUserCreateArgs = {
  attributes: UserAttributes;
};


export type MutationUserDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUserUpdateArgs = {
  attributes: UserAttributes;
  id: Scalars['ID']['input'];
};


export type MutationViewCreateArgs = {
  attributes: ViewAttributes;
};


export type MutationViewDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationViewUpdateArgs = {
  attributes: ViewAttributes;
  id: Scalars['ID']['input'];
};


export type MutationWarrenProvisionArgs = {
  attributes: WarrenAttributes;
  tenantCode: Scalars['String']['input'];
};


export type MutationWebPushSubscribeArgs = {
  attributes: WebPushAttributes;
};


export type MutationWebhookEventRetryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWorkflowCategoryCreateArgs = {
  attributes: WorkflowCategoryAttributes;
};


export type MutationWorkflowCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWorkflowCategoryUpdateArgs = {
  attributes: WorkflowCategoryAttributes;
  id: Scalars['ID']['input'];
};


export type MutationWorkflowCreateArgs = {
  attributes: WorkflowAttributes;
};


export type MutationWorkflowDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWorkflowDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWorkflowUpdateArgs = {
  attributes: WorkflowAttributes;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of MutationBatch. */
export type MutationBatchPayload = {
  __typename?: 'MutationBatchPayload';
  batch?: Maybe<Array<BatchMutation>>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Notification = {
  __typename?: 'Notification';
  action: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  recipientUserId?: Maybe<Scalars['ID']['output']>;
  seenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** The connection type for Notification. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Notification>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Notification>;
};

export type NotificationRegistration = {
  __typename?: 'NotificationRegistration';
  authKey?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  deviceIdentificator?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pdhKey?: Maybe<Scalars['String']['output']>;
  pushType: NotificationRegistrationPush;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export enum NotificationRegistrationPush {
  /** Mobile Push notification */
  Mobile = 'MOBILE',
  /** Web Push notification */
  Web = 'WEB'
}

export type Obj = {
  __typename?: 'Obj';
  attachments?: Maybe<Array<Attachment>>;
  computed?: Maybe<Scalars['Boolean']['output']>;
  fields?: Maybe<Array<Field>>;
  kind: Array<FieldKind>;
  macros?: Maybe<Array<Macro>>;
  methods?: Maybe<Array<Method>>;
  name: Scalars['String']['output'];
  nestedFields?: Maybe<Array<Field>>;
  recipients?: Maybe<Array<EmailRecipient>>;
  relatedObjects?: Maybe<Array<RelatedObject>>;
  uses: Array<Scalars['String']['output']>;
};

export type Output = {
  __typename?: 'Output';
  id: Scalars['ID']['output'];
  kind: FieldKind;
  name: Scalars['String']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Account paying status */
export enum PayingStatus {
  /** Free */
  ChurnedFromFree = 'CHURNED_FROM_FREE',
  /** Free */
  ChurnedFromPaying = 'CHURNED_FROM_PAYING',
  /** Free */
  Free = 'FREE',
  /** Free */
  NotPaying = 'NOT_PAYING',
  /** Free */
  Paying = 'PAYING',
  /** Trial */
  Trial = 'TRIAL'
}

export type Payment = {
  __typename?: 'Payment';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  amount: Scalars['Float']['output'];
  amountUnapplied?: Maybe<Scalars['Float']['output']>;
  appliedToInvoices?: Maybe<InvoiceConnection>;
  baseCurrencyCash?: Maybe<Scalars['Float']['output']>;
  baseCurrencyId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currencyId?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  memo: Scalars['String']['output'];
  receivedAt: Scalars['ISO8601DateTime']['output'];
  state: PaymentState;
  transactionRecord?: Maybe<Transaction>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type PaymentAppliedToInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentApplication = {
  __typename?: 'PaymentApplication';
  account?: Maybe<Account>;
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  currencyId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['ID']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['ID']['output']>;
  paymentType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** The connection type for PaymentApplication. */
export type PaymentApplicationConnection = {
  __typename?: 'PaymentApplicationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PaymentApplicationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PaymentApplication>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PaymentApplicationEdge = {
  __typename?: 'PaymentApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PaymentApplication>;
};

/** Autogenerated return type of PaymentApplyToAccount. */
export type PaymentApplyToAccountPayload = {
  __typename?: 'PaymentApplyToAccountPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  payment?: Maybe<Payment>;
};

/** Autogenerated return type of PaymentApplyToInvoice. */
export type PaymentApplyToInvoicePayload = {
  __typename?: 'PaymentApplyToInvoicePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
  payment?: Maybe<Payment>;
};

/** Autogenerated return type of PaymentApplyToInvoices. */
export type PaymentApplyToInvoicesPayload = {
  __typename?: 'PaymentApplyToInvoicesPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  paidInvoices?: Maybe<Array<Invoice>>;
  payment?: Maybe<Payment>;
  paymentApplications?: Maybe<Array<PaymentApplication>>;
  removedInvoices?: Maybe<Array<Invoice>>;
};

export type PaymentAttributes = {
  /** The id of the account that the payment is associated with */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** The amount of the payment */
  amount: Scalars['Float']['input'];
  /** The currency of the payment */
  currencyId: Scalars['ID']['input'];
  /** The fees associated with the payment */
  fees?: InputMaybe<Scalars['Float']['input']>;
  /** A memo or note for the payment */
  memo: Scalars['String']['input'];
  /** The date the payment was received */
  receivedAt: Scalars['ISO8601DateTime']['input'];
};

/** The connection type for Payment. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PaymentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Payment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Payment>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  expirationDate?: Maybe<Scalars['ISO8601Date']['output']>;
  failureCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastSuccess?: Maybe<Scalars['ISO8601DateTime']['output']>;
  metadata?: Maybe<PaymentMethodMetadata>;
  paymentType?: Maybe<PaymentType>;
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<PaymentMethodState>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** The connection type for PaymentMethod. */
export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PaymentMethodEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PaymentMethod>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PaymentMethodEdge = {
  __typename?: 'PaymentMethodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PaymentMethod>;
};

export type PaymentMethodMetadata = {
  __typename?: 'PaymentMethodMetadata';
  description?: Maybe<Scalars['String']['output']>;
  expiration?: Maybe<Scalars['ISO8601Date']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
};

export enum PaymentMethodState {
  /** Payment method has failed during use */
  Failed = 'FAILED',
  /** Payment method has been succesfully used */
  Success = 'SUCCESS',
  /** Payment method has not ben used or unknown state */
  Unknown = 'UNKNOWN'
}

export enum PaymentState {
  /** Payment is applied */
  Applied = 'APPLIED',
  /** Payment is partially applied */
  PartiallyApplied = 'PARTIALLY_APPLIED',
  /** Payment is not yet applied */
  Unapplied = 'UNAPPLIED'
}

export enum PaymentType {
  /** ACH payment */
  Ach = 'ach',
  /** Credit or Debit Card payment */
  Card = 'card',
  /** Uncategorized payment */
  Other = 'other',
  /** Wire transfer payment */
  Wire = 'wire'
}

/** Autogenerated return type of PaymentUnapplyFromInvoices. */
export type PaymentUnapplyFromInvoicesPayload = {
  __typename?: 'PaymentUnapplyFromInvoicesPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoices?: Maybe<Array<Invoice>>;
  payment?: Maybe<Payment>;
};

export type Period = {
  __typename?: 'Period';
  closed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  month?: Maybe<Scalars['Int']['output']>;
  monthName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  warrenId?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PeriodAmount = {
  __typename?: 'PeriodAmount';
  /** Total amount to pay for the period duration. Usage-based amounts could be null for future dates */
  amount?: Maybe<Scalars['Float']['output']>;
  amountsByTier?: Maybe<Array<TieredAmount>>;
  /** Period's end date */
  endDate: Scalars['ISO8601Date']['output'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']['output']>;
  /** Period frequency. E.g. Monthly = Month 1, Month 2, Month 3, ... */
  name?: Maybe<Scalars['String']['output']>;
  /** Proration rate for the period duration */
  prorationRate?: Maybe<Scalars['Float']['output']>;
  /** Quantity for the period duration */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Period's start date */
  startDate: Scalars['ISO8601Date']['output'];
};

/** The connection type for Period. */
export type PeriodConnection = {
  __typename?: 'PeriodConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PeriodEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Period>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PeriodEdge = {
  __typename?: 'PeriodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Period>;
};

export type Plan = {
  __typename?: 'Plan';
  /** True if the plan is an add-on */
  addon?: Maybe<Scalars['Boolean']['output']>;
  /** First date the plan is available for sale */
  availableFrom: Scalars['ISO8601Date']['output'];
  /** Late date the plan is available for sale */
  availableTo: Scalars['ISO8601Date']['output'];
  /** Returns the lowest price in all plan charges */
  basePrice?: Maybe<Scalars['Float']['output']>;
  /** Unique code */
  code?: Maybe<Scalars['String']['output']>;
  /** Label for the contact us button */
  contactUsLabel?: Maybe<Scalars['String']['output']>;
  /** URL for the contact us button */
  contactUsUrl?: Maybe<Scalars['String']['output']>;
  /** Timestamp the plan was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Customer-facing description of the plan */
  description?: Maybe<Scalars['String']['output']>;
  /** List of features specified on this plan */
  features?: Maybe<Array<Feature>>;
  /** Unique identifier for the plan */
  id: Scalars['ID']['output'];
  /** Intenal notes about the plan */
  internalNotes?: Maybe<Scalars['String']['output']>;
  /** Convenient boolean that shows whether the plan is available right now */
  isAvailableNow: Scalars['Boolean']['output'];
  /** Controls whether the plan is visible for sale regardless of avilability dates */
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  /** Unique plan name */
  name: Scalars['String']['output'];
  /** List of features specified on this plan */
  planFeatures?: Maybe<Array<PlanFeature>>;
  /** The plan's position wihtin the product */
  position?: Maybe<Scalars['Int']['output']>;
  /** Price lists for this plan */
  priceLists: Array<PriceList>;
  /** Text to display on the portal for the plan's period */
  pricingDescription?: Maybe<Scalars['String']['output']>;
  /** The plan's pricing style */
  pricingStyle: PlanPricingStyles;
  product?: Maybe<Product>;
  /** The ID of the product the plan belongs to */
  productId: Scalars['ID']['output'];
  productPlanName: Scalars['String']['output'];
  /** Allows customers to buy this plan via the portal */
  selfServiceBuy?: Maybe<Scalars['Boolean']['output']>;
  /** Allows customers to cancel this plan via the portal */
  selfServiceCancel?: Maybe<Scalars['Boolean']['output']>;
  /** Allows customers to renew this plan via the portal */
  selfServiceRenew?: Maybe<Scalars['Boolean']['output']>;
  /** Timestamp the plan was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type PlanPriceListsArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
};

/** Attributes for creating and updating a plan */
export type PlanAttributes = {
  addon?: InputMaybe<Scalars['Boolean']['input']>;
  availableFrom?: InputMaybe<Scalars['ISO8601Date']['input']>;
  availableTo?: InputMaybe<Scalars['ISO8601Date']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  /** Label for the contact us button */
  contactUsLabel?: InputMaybe<Scalars['String']['input']>;
  /** URL for the contact us button */
  contactUsUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** The plan's position wihtin the product */
  position?: InputMaybe<Scalars['Int']['input']>;
  pricingDescription?: InputMaybe<Scalars['String']['input']>;
  pricingStyle?: InputMaybe<PlanPricingStyles>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Allows customers to buy this plan via the portal */
  selfServiceBuy?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows customers to cancel this plan via the portal */
  selfServiceCancel?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows customers to renew this plan via the portal */
  selfServiceRenew?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlanChangeOptions = {
  __typename?: 'PlanChangeOptions';
  plans?: Maybe<Array<Plan>>;
  products?: Maybe<Array<Product>>;
};

/** The connection type for Plan. */
export type PlanConnection = {
  __typename?: 'PlanConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Plan>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PlanCreate. */
export type PlanCreatePayload = {
  __typename?: 'PlanCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  plan?: Maybe<Plan>;
  planFeatures?: Maybe<Array<PlanFeature>>;
};

/** Autogenerated return type of PlanDelete. */
export type PlanDeletePayload = {
  __typename?: 'PlanDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Autogenerated return type of PlanDuplicate. */
export type PlanDuplicatePayload = {
  __typename?: 'PlanDuplicatePayload';
  errors: Array<Scalars['String']['output']>;
  plan?: Maybe<Plan>;
};

/** An edge in a connection. */
export type PlanEdge = {
  __typename?: 'PlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Plan>;
};

export type PlanFeature = {
  __typename?: 'PlanFeature';
  createdAt: Scalars['ISO8601DateTime']['output'];
  feature?: Maybe<Feature>;
  featureId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  plan?: Maybe<Plan>;
  planId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/** Attributes for creating and updating plan features */
export type PlanFeatureAttributes = {
  /** Feature ID. Can't modify this field once set */
  featureId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Plan ID. Can't modify this field once set */
  planId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for PlanFeature. */
export type PlanFeatureConnection = {
  __typename?: 'PlanFeatureConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanFeatureEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PlanFeature>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PlanFeatureEdge = {
  __typename?: 'PlanFeatureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PlanFeature>;
};

/** Autogenerated return type of PlanFeatureUpdate. */
export type PlanFeatureUpdatePayload = {
  __typename?: 'PlanFeatureUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  planFeature?: Maybe<PlanFeature>;
};

/** Pricing styles options for creating plans */
export enum PlanPricingStyles {
  /** Contact us */
  ContactUs = 'CONTACT_US',
  /** Free */
  Free = 'FREE',
  /** Priced */
  Priced = 'PRICED'
}

/** Autogenerated return type of PlanUpdate. */
export type PlanUpdatePayload = {
  __typename?: 'PlanUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  plan?: Maybe<Plan>;
};

export type Platform = {
  __typename?: 'Platform';
  checkoutValidationEnabled: Scalars['Boolean']['output'];
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  provisioningEnabled: Scalars['Boolean']['output'];
  tenants?: Maybe<Array<Tenant>>;
  webhookAuthToken?: Maybe<Scalars['String']['output']>;
  webhookSigningKey?: Maybe<Scalars['String']['output']>;
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** Attributes for creating and updating a platform */
export type PlatformAttributes = {
  checkoutValidationEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provisioningEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  webhookAuthToken?: InputMaybe<Scalars['String']['input']>;
  webhookSigningKey?: InputMaybe<Scalars['String']['input']>;
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Platform. */
export type PlatformConnection = {
  __typename?: 'PlatformConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlatformEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Platform>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PlatformCreate. */
export type PlatformCreatePayload = {
  __typename?: 'PlatformCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  platform?: Maybe<Platform>;
};

/** Autogenerated return type of PlatformDelete. */
export type PlatformDeletePayload = {
  __typename?: 'PlatformDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Platform>;
};

/** An edge in a connection. */
export type PlatformEdge = {
  __typename?: 'PlatformEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Platform>;
};

/** Autogenerated return type of PlatformUpdate. */
export type PlatformUpdatePayload = {
  __typename?: 'PlatformUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  platform?: Maybe<Platform>;
};

export type Plugin = {
  __typename?: 'Plugin';
  actionMenu?: Maybe<Array<PluginActionMenuItem>>;
  authType?: Maybe<Scalars['String']['output']>;
  classes?: Maybe<Array<Scalars['String']['output']>>;
  componentName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dynamicComponents?: Maybe<Array<DynamicComponent>>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledOnlyForUser?: Maybe<User>;
  enabledOnlyForUserId?: Maybe<Scalars['ID']['output']>;
  entities?: Maybe<Array<Entity>>;
  entityIds?: Maybe<Array<Scalars['ID']['output']>>;
  entitySelectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  guid: Scalars['String']['output'];
  helplink?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pluginDefinition?: Maybe<PluginDefinition>;
  pluginDefinitionId?: Maybe<Scalars['ID']['output']>;
  pluginVendor?: Maybe<PluginVendor>;
  pluginVendorId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<PluginStatus>;
  summary?: Maybe<Scalars['String']['output']>;
  type: PluginType;
  userIsolation?: Maybe<Scalars['Boolean']['output']>;
  uuid: Scalars['String']['output'];
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type PluginActionMenuItem = {
  __typename?: 'PluginActionMenuItem';
  label: Scalars['String']['output'];
  methodName: Scalars['String']['output'];
  relUrl?: Maybe<Scalars['String']['output']>;
  visible?: Maybe<Scalars['String']['output']>;
};

/** Attributes for creating and updating a plugin */
export type PluginAttributes = {
  dynamicComponentValues?: InputMaybe<Array<DynamicComponentAttributes>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledOnlyForUserId?: InputMaybe<Scalars['ID']['input']>;
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  entitySelectionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pluginDefinitionId?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for Plugin. */
export type PluginConnection = {
  __typename?: 'PluginConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PluginEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Plugin>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PluginCreate. */
export type PluginCreatePayload = {
  __typename?: 'PluginCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  plugin?: Maybe<Plugin>;
};

export type PluginDefinition = {
  __typename?: 'PluginDefinition';
  authType?: Maybe<Scalars['String']['output']>;
  canDisable?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  helplink?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  platformName?: Maybe<Scalars['String']['output']>;
  pluginParameters?: Maybe<Array<PluginParameter>>;
  pluginType?: Maybe<PluginType>;
  pluginVendor?: Maybe<PluginVendor>;
  pluginVendorId?: Maybe<Scalars['ID']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  userIsolation?: Maybe<Scalars['Boolean']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  webhookEnabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Attributes for creating and updating a plugin definition */
export type PluginDefinitionAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pluginType?: InputMaybe<PluginType>;
  pluginVendorId?: InputMaybe<Scalars['ID']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  userIsolation?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for PluginDefinition. */
export type PluginDefinitionConnection = {
  __typename?: 'PluginDefinitionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PluginDefinitionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PluginDefinition>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PluginDefinitionCreate. */
export type PluginDefinitionCreatePayload = {
  __typename?: 'PluginDefinitionCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginDefinition?: Maybe<PluginDefinition>;
};

/** Autogenerated return type of PluginDefinitionDelete. */
export type PluginDefinitionDeletePayload = {
  __typename?: 'PluginDefinitionDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  pluginDefinition?: Maybe<PluginDefinition>;
};

/** An edge in a connection. */
export type PluginDefinitionEdge = {
  __typename?: 'PluginDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PluginDefinition>;
};

/** Autogenerated return type of PluginDefinitionUpdate. */
export type PluginDefinitionUpdatePayload = {
  __typename?: 'PluginDefinitionUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginDefinition?: Maybe<PluginDefinition>;
};

/** Autogenerated return type of PluginDelete. */
export type PluginDeletePayload = {
  __typename?: 'PluginDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** An edge in a connection. */
export type PluginEdge = {
  __typename?: 'PluginEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Plugin>;
};

export type PluginEntity = {
  __typename?: 'PluginEntity';
  entityId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  pluginId: Scalars['ID']['output'];
};

/** The connection type for PluginEntity. */
export type PluginEntityConnection = {
  __typename?: 'PluginEntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PluginEntityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PluginEntity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PluginEntityEdge = {
  __typename?: 'PluginEntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PluginEntity>;
};

export type PluginParameter = {
  __typename?: 'PluginParameter';
  id: Scalars['ID']['output'];
  kind?: Maybe<PluginParameterKind>;
  name?: Maybe<Scalars['String']['output']>;
  pluginDefinition: PluginDefinition;
  pluginDefinitionId: Scalars['ID']['output'];
  shortName?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

/** Attributes for creating and updating a plugin value */
export type PluginParameterAttributes = {
  kind?: InputMaybe<PluginParameterKind>;
  name?: InputMaybe<Scalars['String']['input']>;
  pluginDefinitionId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  tooltip?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for PluginParameter. */
export type PluginParameterConnection = {
  __typename?: 'PluginParameterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PluginParameterEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PluginParameter>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PluginParameterCreate. */
export type PluginParameterCreatePayload = {
  __typename?: 'PluginParameterCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginParameter?: Maybe<PluginParameter>;
};

/** Autogenerated return type of PluginParameterDelete. */
export type PluginParameterDeletePayload = {
  __typename?: 'PluginParameterDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  pluginParameter?: Maybe<PluginParameter>;
};

/** An edge in a connection. */
export type PluginParameterEdge = {
  __typename?: 'PluginParameterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PluginParameter>;
};

export enum PluginParameterKind {
  /** Boolean parameter type */
  Boolean = 'BOOLEAN',
  /** Copy parameter type */
  Copy = 'COPY',
  /** Number parameter type */
  Number = 'NUMBER',
  /** Secret parameter type */
  Secret = 'SECRET',
  /** String parameter type */
  String = 'STRING'
}

/** Autogenerated return type of PluginParameterUpdate. */
export type PluginParameterUpdatePayload = {
  __typename?: 'PluginParameterUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginParameter: PluginParameter;
};

export enum PluginStatus {
  /** Plugin is invalid */
  Invalid = 'INVALID',
  /** Plugin is valid */
  Valid = 'VALID'
}

export enum PluginType {
  /** Email Plugins */
  Email = 'email',
  /** Uncategorized Plugins */
  Other = 'other',
  /** Payment Plugins */
  Payment = 'payment',
  /** Signing Plugins */
  Signing = 'signing',
  /** Taxation Plugins */
  Taxation = 'taxation'
}

/** Autogenerated return type of PluginUpdate. */
export type PluginUpdatePayload = {
  __typename?: 'PluginUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  plugin?: Maybe<Plugin>;
};

export type PluginValue = {
  __typename?: 'PluginValue';
  id: Scalars['ID']['output'];
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars['ID']['output']>;
  pluginParameter?: Maybe<PluginParameter>;
  pluginParameterId?: Maybe<Scalars['ID']['output']>;
};

/** Attributes for creating and updating a plugin value */
export type PluginValueAttributes = {
  pluginId: Scalars['ID']['input'];
  pluginParameterId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

/** Autogenerated return type of PluginValueCreate. */
export type PluginValueCreatePayload = {
  __typename?: 'PluginValueCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginValue?: Maybe<PluginValue>;
};

/** Autogenerated return type of PluginValueDelete. */
export type PluginValueDeletePayload = {
  __typename?: 'PluginValueDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  pluginValue?: Maybe<PluginValue>;
};

/** Autogenerated return type of PluginValueUpdate. */
export type PluginValueUpdatePayload = {
  __typename?: 'PluginValueUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginValue?: Maybe<PluginValue>;
};

export type PluginVendor = {
  __typename?: 'PluginVendor';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  uuid: Scalars['ID']['output'];
};

/** Attributes for creating and updating a plugin vendor */
export type PluginVendorAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for PluginVendor. */
export type PluginVendorConnection = {
  __typename?: 'PluginVendorConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PluginVendorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PluginVendor>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PluginVendorCreate. */
export type PluginVendorCreatePayload = {
  __typename?: 'PluginVendorCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginVendor?: Maybe<PluginVendor>;
};

/** Autogenerated return type of PluginVendorDelete. */
export type PluginVendorDeletePayload = {
  __typename?: 'PluginVendorDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  pluginVendor?: Maybe<PluginVendor>;
};

/** An edge in a connection. */
export type PluginVendorEdge = {
  __typename?: 'PluginVendorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PluginVendor>;
};

/** Autogenerated return type of PluginVendorUpdate. */
export type PluginVendorUpdatePayload = {
  __typename?: 'PluginVendorUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginVendor?: Maybe<PluginVendor>;
};

/** Autogenerated return type of PortalSessionCreate. */
export type PortalSessionCreatePayload = {
  __typename?: 'PortalSessionCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  token?: Maybe<Scalars['String']['output']>;
};

export type PriceList = {
  __typename?: 'PriceList';
  /** The minimum amount you'll pay by using this plan */
  basePrice?: Maybe<Scalars['Float']['output']>;
  /** List of charges for this plan */
  charges?: Maybe<Array<PriceListCharge>>;
  /** Unique code of the plan. To avoid name collissions, it is a good idea to prefix with plan code */
  code?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the plan was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Currency object */
  currency?: Maybe<Currency>;
  /** The currency of the prices on the plan */
  currencyId: Scalars['ID']['output'];
  /** Unique ID of the price list */
  id: Scalars['ID']['output'];
  /** Controls whether the plan is visible for sale */
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the price list */
  name: Scalars['String']['output'];
  /** Number of months per billing cycle */
  periodMonths?: Maybe<Scalars['Int']['output']>;
  /** Object of the plan the price list belongs to */
  plan?: Maybe<Plan>;
  /** ID of the plan the price list belongs to */
  planId: Scalars['ID']['output'];
  /** Auto-generated summary of the pricing */
  priceDescription?: Maybe<Scalars['String']['output']>;
  /** Default values for a new price list charge */
  priceListChargeDefaults?: Maybe<PriceListCharge>;
  product?: Maybe<Product>;
  /** ID of the plan the product belongs to */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Stock keeping unit */
  sku?: Maybe<Scalars['String']['output']>;
  /** Determines whether a trial period is possible before paying */
  trialAllowed: Scalars['Boolean']['output'];
  /** Controls whether the subscription expires or converts to active when the trial expires */
  trialExpirationAction?: Maybe<TrialExpirationAction>;
  /** The defaeult length in days of the trial period */
  trialLengthDays?: Maybe<Scalars['Int']['output']>;
  /** Timestamp of last time the plan was updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating price lists */
export type PriceListAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  currencyId?: InputMaybe<Scalars['ID']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  trialAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  trialExpirationAction?: InputMaybe<TrialExpirationAction>;
  trialLengthDays?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceListChangeOptions = {
  __typename?: 'PriceListChangeOptions';
  priceLists?: Maybe<Array<PriceList>>;
};

export type PriceListCharge = {
  __typename?: 'PriceListCharge';
  accountingCode?: Maybe<Scalars['String']['output']>;
  /** Flat price or price of first tier if tiered or volume pricing */
  basePrice: Scalars['Float']['output'];
  billingPeriod?: Maybe<BillingPeriod>;
  chargeType?: Maybe<ChargeType>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The currency of the prices on the price list charge */
  currencyId: Scalars['ID']['output'];
  feature?: Maybe<Feature>;
  featureId?: Maybe<Scalars['ID']['output']>;
  financialAccount?: Maybe<FinancialAccount>;
  financialAccountId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  longName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  plan?: Maybe<Plan>;
  position?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['BigDecimal']['output']>;
  priceDecimals?: Maybe<Scalars['Int']['output']>;
  /** One-line summary of pricing before discounts */
  priceDescription?: Maybe<Scalars['String']['output']>;
  priceList?: Maybe<PriceList>;
  priceListChargeTiers?: Maybe<Array<PriceListChargeTier>>;
  priceListId: Scalars['ID']['output'];
  pricingModel?: Maybe<PricingModel>;
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
  quantityMax?: Maybe<Scalars['Int']['output']>;
  quantityMin?: Maybe<Scalars['Int']['output']>;
  recognitionPeriod?: Maybe<Scalars['Int']['output']>;
  roundUpInterval?: Maybe<Scalars['Int']['output']>;
  selfServiceQuantity?: Maybe<Scalars['Boolean']['output']>;
  showPriceAsMonthly?: Maybe<Scalars['Boolean']['output']>;
  specificInvoiceLineText?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Describes how usage should be aggregated during a
   *                                                                                   billing period. Must be one of sum, max, last
   */
  usageCalculationType?: Maybe<UsageCalculation>;
};

export type PriceListChargeAttributes = {
  accountingCode?: InputMaybe<Scalars['String']['input']>;
  billingPeriod?: InputMaybe<BillingPeriod>;
  chargeType?: InputMaybe<ChargeType>;
  code?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['ID']['input']>;
  financialAccountId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceDecimals?: InputMaybe<Scalars['Int']['input']>;
  priceListChargeTiers?: InputMaybe<Array<PriceListChargeTierAttributes>>;
  priceListId?: InputMaybe<Scalars['ID']['input']>;
  pricingModel?: InputMaybe<PricingModel>;
  quantityMax?: InputMaybe<Scalars['Int']['input']>;
  quantityMin?: InputMaybe<Scalars['Int']['input']>;
  recognitionPeriod?: InputMaybe<Scalars['Int']['input']>;
  roundUpInterval?: InputMaybe<Scalars['Int']['input']>;
  selfServiceQuantity?: InputMaybe<Scalars['Boolean']['input']>;
  showPriceAsMonthly?: InputMaybe<Scalars['Boolean']['input']>;
  specificInvoiceLineText?: InputMaybe<Scalars['String']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  usageCalculationType?: InputMaybe<UsageCalculation>;
};

/** The connection type for PriceListCharge. */
export type PriceListChargeConnection = {
  __typename?: 'PriceListChargeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PriceListChargeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PriceListCharge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PriceListChargeCreate. */
export type PriceListChargeCreatePayload = {
  __typename?: 'PriceListChargeCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  priceListCharge?: Maybe<PriceListCharge>;
};

/** Autogenerated return type of PriceListChargeDelete. */
export type PriceListChargeDeletePayload = {
  __typename?: 'PriceListChargeDeletePayload';
  errors: Array<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type PriceListChargeEdge = {
  __typename?: 'PriceListChargeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PriceListCharge>;
};

export type PriceListChargeOptions = {
  __typename?: 'PriceListChargeOptions';
  billingPeriods?: Maybe<Array<Scalars['String']['output']>>;
  chargeTypes?: Maybe<Array<Scalars['String']['output']>>;
  pricingModels?: Maybe<Array<Scalars['String']['output']>>;
  /** Describes how usage should be aggregated during a billing period. Must be one of sum, max, last */
  usageCalculationTypes?: Maybe<Array<Scalars['String']['output']>>;
};

export type PriceListChargeTier = {
  __typename?: 'PriceListChargeTier';
  price?: Maybe<Scalars['Float']['output']>;
  starts?: Maybe<Scalars['Int']['output']>;
};

/** Attributes for creating and updating price tiers on product plan charges */
export type PriceListChargeTierAttributes = {
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  starts?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of PriceListChargeUpdate. */
export type PriceListChargeUpdatePayload = {
  __typename?: 'PriceListChargeUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  priceListCharge?: Maybe<PriceListCharge>;
};

/** The connection type for PriceList. */
export type PriceListConnection = {
  __typename?: 'PriceListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PriceListEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PriceList>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of PriceListCreate. */
export type PriceListCreatePayload = {
  __typename?: 'PriceListCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  priceList?: Maybe<PriceList>;
};

/** Autogenerated return type of PriceListDelete. */
export type PriceListDeletePayload = {
  __typename?: 'PriceListDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  priceList: PriceList;
};

/** Autogenerated return type of PriceListDuplicate. */
export type PriceListDuplicatePayload = {
  __typename?: 'PriceListDuplicatePayload';
  errors: Array<Scalars['String']['output']>;
  priceList?: Maybe<PriceList>;
};

/** An edge in a connection. */
export type PriceListEdge = {
  __typename?: 'PriceListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PriceList>;
};

/** Autogenerated return type of PriceListUpdate. */
export type PriceListUpdatePayload = {
  __typename?: 'PriceListUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  priceList?: Maybe<PriceList>;
};

export enum PricingModel {
  /** Bands pricing */
  Bands = 'BANDS',
  /** Flat pricing */
  Flat = 'FLAT',
  /** Tiered pricing */
  Tiered = 'TIERED',
  /** Volume pricing */
  Volume = 'VOLUME'
}

export type Product = {
  __typename?: 'Product';
  /** Unique code */
  code?: Maybe<Scalars['String']['output']>;
  /** Product description */
  description?: Maybe<Scalars['String']['output']>;
  /** Lays out plan features in typical everything-in-X-plus style */
  everythingInPlus?: Maybe<Scalars['Boolean']['output']>;
  /** The features available on the product */
  features?: Maybe<Array<Feature>>;
  /** Unique identifier for the product */
  id: Scalars['ID']['output'];
  /** Internal notes */
  internalNotes?: Maybe<Scalars['String']['output']>;
  /** Unique product name */
  name: Scalars['String']['output'];
  /** Default values for a new plan */
  planDefaults?: Maybe<Plan>;
  /** The plan available on the product */
  plans?: Maybe<Array<Plan>>;
  /** Platform object */
  platform?: Maybe<Platform>;
  /** ID of the platform this plan is provisioned to */
  platformId?: Maybe<Scalars['ID']['output']>;
  /** Product category object */
  productCategory?: Maybe<ProductCategory>;
  /** ID of the product category */
  productCategoryId?: Maybe<Scalars['ID']['output']>;
  /** Prefix quote and invoice line items with product name */
  showProductNameOnLineItem?: Maybe<Scalars['Boolean']['output']>;
};


export type ProductFeaturesArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type ProductPlansArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

/** Attributes for creating and updating a product */
export type ProductAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Lays out plan features in typical everything-in-X-plus style */
  everythingInPlus?: InputMaybe<Scalars['Boolean']['input']>;
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  platformId?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId?: InputMaybe<Scalars['ID']['input']>;
  /** Prefix quote and invoice line items with product name */
  showProductNameOnLineItem?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  plans?: Maybe<Array<Plan>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Attributes for creating and updating a product category */
export type ProductCategoryAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for ProductCategory. */
export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductCategoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ProductCategoryCreate. */
export type ProductCategoryCreatePayload = {
  __typename?: 'ProductCategoryCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  productCategory?: Maybe<ProductCategory>;
};

/** Autogenerated return type of ProductCategoryDelete. */
export type ProductCategoryDeletePayload = {
  __typename?: 'ProductCategoryDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  productCategory?: Maybe<ProductCategory>;
};

/** An edge in a connection. */
export type ProductCategoryEdge = {
  __typename?: 'ProductCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ProductCategory>;
};

/** Autogenerated return type of ProductCategoryUpdate. */
export type ProductCategoryUpdatePayload = {
  __typename?: 'ProductCategoryUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  productCategory?: Maybe<ProductCategory>;
};

/** The connection type for Product. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ProductCreate. */
export type ProductCreatePayload = {
  __typename?: 'ProductCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  product?: Maybe<Product>;
};

/** Autogenerated return type of ProductDelete. */
export type ProductDeletePayload = {
  __typename?: 'ProductDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  product: Product;
};

/** Autogenerated return type of ProductDuplicate. */
export type ProductDuplicatePayload = {
  __typename?: 'ProductDuplicatePayload';
  errors: Array<Scalars['String']['output']>;
  product?: Maybe<Product>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Product>;
};

/** Autogenerated return type of ProductImport. */
export type ProductImportPayload = {
  __typename?: 'ProductImportPayload';
  errors?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
};

/** Autogenerated return type of ProductUpdate. */
export type ProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  product?: Maybe<Product>;
};

/** Autogenerated return type of ProvisioningWorkflowTest. */
export type ProvisioningWorkflowTestPayload = {
  __typename?: 'ProvisioningWorkflowTestPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Query = {
  __typename?: 'Query';
  /** An account record is used to represent a customer or trialist [REQUIRED_SCOPES:standard:read] */
  account?: Maybe<Account>;
  /** An account balance represents the money debited or credited in a given currency [REQUIRED_SCOPES:standard:read] */
  accountBalance?: Maybe<AccountBalance>;
  /** An account balance represents the money debited or credited in a given currency [REQUIRED_SCOPES:standard:read] */
  accountBalances?: Maybe<AccountBalanceConnection>;
  /** The type of account [REQUIRED_SCOPES:standard:read] */
  accountType?: Maybe<AccountType>;
  /** The type of account [REQUIRED_SCOPES:standard:read] */
  accountTypes?: Maybe<AccountTypeConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  accountingTable: AccountingTable;
  /** An account record is used to represent a customer or trialist [REQUIRED_SCOPES:standard:read] */
  accounts: AccountConnection;
  /**  [REQUIRED_SCOPES:developer:read] */
  apiClient?: Maybe<ApiClient>;
  /**  [REQUIRED_SCOPES:developer:read] */
  apiClients?: Maybe<ApiClientConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  approvalRule?: Maybe<ApprovalRule>;
  /**  [REQUIRED_SCOPES:standard:read] */
  approvalRules?: Maybe<ApprovalRuleConnection>;
  /**  [REQUIRED_SCOPES:security:read] */
  approver?: Maybe<Approver>;
  /**  [REQUIRED_SCOPES:security:read] */
  approvers?: Maybe<ApproverConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  billRun?: Maybe<BillRun>;
  /**  [REQUIRED_SCOPES:standard:read] */
  billRuns?: Maybe<BillRunConnection>;
  /** Billing details for an account [REQUIRED_SCOPES:portal:read] */
  billingDetails: BillingDetails;
  /** Campaigns are used to track where contacts and leads originate from [REQUIRED_SCOPES:standard:read] */
  campaign?: Maybe<Campaign>;
  /** Campaigns are used to track where contacts and leads originate from [REQUIRED_SCOPES:standard:read] */
  campaigns?: Maybe<CampaignConnection>;
  /**  [REQUIRED_SCOPES:admin:read] */
  company?: Maybe<Company>;
  /** The contact record for a person on an account [REQUIRED_SCOPES:standard:read] */
  contact?: Maybe<Contact>;
  /** The contact record for a person on an account [REQUIRED_SCOPES:standard:read] */
  contacts: ContactConnection;
  /** The coupon record that can be applied to a subscription [REQUIRED_SCOPES:product:read] */
  coupon?: Maybe<Coupon>;
  /** The coupon record that can be applied to a subscription [REQUIRED_SCOPES:product:read] */
  coupons: CouponConnection;
  /**  [REQUIRED_SCOPES:billing:read] */
  creditNote?: Maybe<CreditNote>;
  /**  [REQUIRED_SCOPES:billing:read] */
  creditNotes?: Maybe<CreditNoteConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  currencies: CurrencyConnection;
  /**  [REQUIRED_SCOPES:standard:read] */
  currency?: Maybe<Currency>;
  /**  [REQUIRED_SCOPES:standard:read] */
  currentUser: CurrentUser;
  /** A deal represents an opportunity to increase revenue [REQUIRED_SCOPES:standard:read] */
  deal?: Maybe<Deal>;
  /** A stage in the sales pipeline [REQUIRED_SCOPES:standard:read] */
  dealStage?: Maybe<DealStage>;
  /** A stage in the sales pipeline [REQUIRED_SCOPES:standard:read] */
  dealStages?: Maybe<DealStageConnection>;
  /** A deal represents an opportunity to increase revenue [REQUIRED_SCOPES:standard:read] */
  deals: DealConnection;
  deepEvents?: Maybe<EventConnection>;
  /**  [REQUIRED_SCOPES:billing:read] */
  disputeReason?: Maybe<DisputeReason>;
  /**  [REQUIRED_SCOPES:billing:read] */
  disputeReasons?: Maybe<DisputeReasonConnection>;
  draftCreditNotes: CreditNoteConnection;
  draftInvoices: InvoiceConnection;
  /**  [REQUIRED_SCOPES:standard:read] */
  email?: Maybe<Email>;
  /**  [REQUIRED_SCOPES:standard:read] */
  emails?: Maybe<EmailConnection>;
  enabledOnlyForUsers: UserConnection;
  /**  [REQUIRED_SCOPES:admin:read] */
  entities?: Maybe<EntityConnection>;
  /**  [REQUIRED_SCOPES:admin:read] */
  entity?: Maybe<Entity>;
  /**  [REQUIRED_SCOPES:standard:read] */
  entityBranding: EntityBranding;
  /**  [REQUIRED_SCOPES:standard:read] */
  event?: Maybe<Event>;
  /**  [REQUIRED_SCOPES:standard:read] */
  eventDetails?: Maybe<EventDetail>;
  /**  [REQUIRED_SCOPES:standard:read] */
  events?: Maybe<EventConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  feature?: Maybe<Feature>;
  /**  [REQUIRED_SCOPES:product:read] */
  featureUsage?: Maybe<FeatureUsage>;
  featureUsageHistogram: Histogram;
  /**  [REQUIRED_SCOPES:product:read] */
  featureUsages?: Maybe<FeatureUsageConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  features?: Maybe<FeatureConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  field?: Maybe<Field>;
  /**  [REQUIRED_SCOPES:standard:read] */
  fields?: Maybe<FieldConnection>;
  /** The financial account record used for accounting [REQUIRED_SCOPES:billing:read] */
  financialAccount?: Maybe<FinancialAccount>;
  /** The financial account record used for accounting [REQUIRED_SCOPES:billing:read] */
  financialAccounts: FinancialAccountConnection;
  /**  [REQUIRED_SCOPES:billing:read] */
  formattedCreditNote: FormattedCreditNote;
  /**  [REQUIRED_SCOPES:billing:read] */
  formattedInvoice: FormattedInvoice;
  /**  [REQUIRED_SCOPES:standard:read quoting:read] */
  formattedQuote: FormattedQuote;
  /**  [REQUIRED_SCOPES:security:read] */
  group?: Maybe<Group>;
  /**  [REQUIRED_SCOPES:security:read] */
  groups?: Maybe<GroupConnection>;
  /** Industry for accounts and deals [REQUIRED_SCOPES:standard:read] */
  industries?: Maybe<IndustryConnection>;
  /** Industry for accounts and deals [REQUIRED_SCOPES:standard:read] */
  industry?: Maybe<Industry>;
  /**  [REQUIRED_SCOPES:billing:read] */
  intracomVats: IntracomVatConnection;
  /**  [REQUIRED_SCOPES:billing:read] */
  invoice?: Maybe<Invoice>;
  /**  [REQUIRED_SCOPES:standard:read] */
  invoiceItem?: Maybe<InvoiceItem>;
  /**  [REQUIRED_SCOPES:standard:read] */
  invoiceItems?: Maybe<InvoiceItemConnection>;
  /**  [REQUIRED_SCOPES:billing:read] */
  invoiceTemplate?: Maybe<InvoiceTemplate>;
  /**  [REQUIRED_SCOPES:billing:read] */
  invoiceTemplates: InvoiceTemplateConnection;
  /**  [REQUIRED_SCOPES:billing:read] */
  invoices: InvoiceConnection;
  isolateTos: UserConnection;
  /** Background jobs processed by Bunny [REQUIRED_SCOPES:workflow:read] */
  job: Job;
  /** Background jobs processed by Bunny [REQUIRED_SCOPES:workflow:read] */
  jobs: JobConnection;
  /** The Journal Entry represents a financial transaction [REQUIRED_SCOPES:standard:read] */
  journalEntries?: Maybe<JournalEntryConnection>;
  /** The Journal Entry represents a financial transaction [REQUIRED_SCOPES:standard:read] */
  journalEntry?: Maybe<JournalEntry>;
  /** The Journal Entry Line represents a financial transaction line item [REQUIRED_SCOPES:standard:read] */
  journalEntryLine?: Maybe<JournalEntryLine>;
  /** The Journal Entry Line represents a financial transaction line item [REQUIRED_SCOPES:standard:read] */
  journalEntryLines?: Maybe<JournalEntryLineConnection>;
  /** Leads are used to track potential new opportunities and can be converted to accounts [REQUIRED_SCOPES:standard:read] */
  lead?: Maybe<Lead>;
  /** Source of the lead [REQUIRED_SCOPES:standard:read] */
  leadSource?: Maybe<LeadSource>;
  /** Source of the lead [REQUIRED_SCOPES:standard:read] */
  leadSources?: Maybe<LeadSourceConnection>;
  /** Status of a lead [REQUIRED_SCOPES:standard:read] */
  leadStatus?: Maybe<LeadStatus>;
  /** Status of a lead [REQUIRED_SCOPES:standard:read] */
  leadStatuses: LeadStatusConnection;
  /** Leads are used to track potential new opportunities and can be converted to accounts [REQUIRED_SCOPES:standard:read] */
  leads: LeadConnection;
  /**  [REQUIRED_SCOPES:standard:read] */
  monthlyReport: MonthlyReport;
  /**  [REQUIRED_SCOPES:standard:read] */
  notification?: Maybe<Notification>;
  /**  [REQUIRED_SCOPES:standard:read] */
  notifications?: Maybe<NotificationConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  obj: Array<Obj>;
  /**  [REQUIRED_SCOPES:standard:read] */
  objs: Array<Obj>;
  owners: UserConnection;
  /**  [REQUIRED_SCOPES:standard:read] */
  payment?: Maybe<Payment>;
  /**  [REQUIRED_SCOPES:standard:read] */
  paymentApplication?: Maybe<PaymentApplication>;
  /**  [REQUIRED_SCOPES:standard:read] */
  paymentApplications?: Maybe<PaymentApplicationConnection>;
  /**  [REQUIRED_SCOPES:billing:read] */
  paymentMethod?: Maybe<PaymentMethod>;
  /**  [REQUIRED_SCOPES:billing:read] */
  paymentMethods?: Maybe<PaymentMethodConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  payments?: Maybe<PaymentConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  period?: Maybe<Period>;
  /**  [REQUIRED_SCOPES:standard:read] */
  periods: PeriodConnection;
  /**  [REQUIRED_SCOPES:product:read] */
  plan?: Maybe<Plan>;
  planChangeOptions: PlanChangeOptions;
  /**  [REQUIRED_SCOPES:product:read] */
  planFeature?: Maybe<PlanFeature>;
  /**  [REQUIRED_SCOPES:product:read] */
  planFeatures?: Maybe<PlanFeatureConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  plans: PlanConnection;
  /**  [REQUIRED_SCOPES:product:read] */
  platform?: Maybe<Platform>;
  /**  [REQUIRED_SCOPES:product:read] */
  platforms?: Maybe<PlatformConnection>;
  /**  [REQUIRED_SCOPES:standard:read plugins:read] */
  plugin?: Maybe<Plugin>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginDefinition?: Maybe<PluginDefinition>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginDefinitions?: Maybe<PluginDefinitionConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginEntities?: Maybe<PluginEntityConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginEntity?: Maybe<PluginEntity>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginParameter?: Maybe<PluginParameter>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginParameters?: Maybe<PluginParameterConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginVendor?: Maybe<PluginVendor>;
  /**  [REQUIRED_SCOPES:standard:read] */
  pluginVendors?: Maybe<PluginVendorConnection>;
  /**  [REQUIRED_SCOPES:standard:read plugins:read] */
  plugins?: Maybe<PluginConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  priceList?: Maybe<PriceList>;
  priceListChangeOptions: PriceListChangeOptions;
  /**  [REQUIRED_SCOPES:product:read] */
  priceListCharge?: Maybe<PriceListCharge>;
  /**  [REQUIRED_SCOPES:product:read] */
  priceListChargeOptions: PriceListChargeOptions;
  /**  [REQUIRED_SCOPES:product:read] */
  priceListCharges?: Maybe<PriceListChargeConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  priceLists?: Maybe<PriceListConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  product?: Maybe<Product>;
  /**  [REQUIRED_SCOPES:product:read] */
  productCategories?: Maybe<ProductCategoryConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  productCategory?: Maybe<ProductCategory>;
  /**  [REQUIRED_SCOPES:product:read] */
  products: ProductConnection;
  /**  [REQUIRED_SCOPES:standard:read] */
  quote?: Maybe<Quote>;
  /**  [REQUIRED_SCOPES:standard:read] */
  quoteChange?: Maybe<QuoteChange>;
  /**  [REQUIRED_SCOPES:standard:read] */
  quoteChanges?: Maybe<QuoteChangeConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  quoteCharge?: Maybe<QuoteCharge>;
  /**  [REQUIRED_SCOPES:standard:read] */
  quoteCharges?: Maybe<QuoteChargeConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  quotes?: Maybe<QuoteConnection>;
  /**  [REQUIRED_SCOPES:billing:read] */
  recurringRevenue?: Maybe<RecurringRevenue>;
  /**  [REQUIRED_SCOPES:billing:read] */
  recurringRevenues?: Maybe<RecurringRevenueConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  revenueDetails?: Maybe<Array<RevenueDetail>>;
  /**  [REQUIRED_SCOPES:billing:read] */
  revenueMovement?: Maybe<RevenueMovement>;
  /**  [REQUIRED_SCOPES:billing:read] */
  revenueMovements: RevenueMovementConnection;
  /**  [REQUIRED_SCOPES:standard:read] */
  revenueRecognitionTable: RevenueRecognitionTable;
  /**  [REQUIRED_SCOPES:security:read] */
  role?: Maybe<Role>;
  roleScopes: RoleScopeConnection;
  /**  [REQUIRED_SCOPES:security:read] */
  roles?: Maybe<RoleConnection>;
  search: Array<SearchResult>;
  /**  [REQUIRED_SCOPES:standard:read] */
  secondaryBillingContacts: SecondaryBillingContactConnection;
  /**  [REQUIRED_SCOPES:billing:read] */
  subscription?: Maybe<Subscription>;
  /**  [REQUIRED_SCOPES:billing:read] */
  subscriptionCharge?: Maybe<SubscriptionCharge>;
  /**  [REQUIRED_SCOPES:billing:read] */
  subscriptionCharges?: Maybe<SubscriptionChargeConnection>;
  subscriptionFeatures: UsageSubscriptionChargeConnection;
  /**  [REQUIRED_SCOPES:billing:read] */
  subscriptions?: Maybe<SubscriptionConnection>;
  /**  [REQUIRED_SCOPES:standard:read] */
  taxationEntityUseCodes: Array<TaxationEntityUseCode>;
  /**  [REQUIRED_SCOPES:admin:read] */
  template?: Maybe<Template>;
  /**  [REQUIRED_SCOPES:admin:read] */
  templates?: Maybe<TemplateConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  tenant?: Maybe<Tenant>;
  /**  [REQUIRED_SCOPES:standard:read] */
  tenantProvisioningChange?: Maybe<TenantProvisioningChange>;
  /**  [REQUIRED_SCOPES:standard:read] */
  tenantProvisioningChanges?: Maybe<TenantProvisioningChangeConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  tenants?: Maybe<TenantConnection>;
  /**  [REQUIRED_SCOPES:billing:read] */
  transaction?: Maybe<Transaction>;
  /**  [REQUIRED_SCOPES:billing:read] */
  transactions?: Maybe<TransactionConnection>;
  /**  [REQUIRED_SCOPES:security:read] */
  user?: Maybe<User>;
  /**  [REQUIRED_SCOPES:security:read] */
  users?: Maybe<UserConnection>;
  /**  [REQUIRED_SCOPES:product:read] */
  validCoupon: CouponValidate;
  /** Defines table views with conditions and column configurations [REQUIRED_SCOPES:standard:read] */
  view?: Maybe<View>;
  /** Defines table views with conditions and column configurations [REQUIRED_SCOPES:standard:read] */
  views?: Maybe<ViewConnection>;
  /** A webhook payload [REQUIRED_SCOPES:workflow:read] */
  webhookEvent?: Maybe<WebhookEvent>;
  /** A webhook payload [REQUIRED_SCOPES:workflow:read] */
  webhookEvents: WebhookEventConnection;
  /** A workflow containing triggers and jobs [REQUIRED_SCOPES:workflow:read] */
  workflow?: Maybe<Workflow>;
  /** A workflow action definition [REQUIRED_SCOPES:workflow:read] */
  workflowActions?: Maybe<Array<WorkflowAction>>;
  /** A category of workflows [REQUIRED_SCOPES:admin:read] */
  workflowCategories?: Maybe<WorkflowCategoryConnection>;
  /** A category of workflows [REQUIRED_SCOPES:admin:read] */
  workflowCategory?: Maybe<WorkflowCategory>;
  /** A workflow job log entry [REQUIRED_SCOPES:workflow:read] */
  workflowJobLog?: Maybe<WorkflowJobLog>;
  /** A workflow job log entry [REQUIRED_SCOPES:workflow:read] */
  workflowJobLogs?: Maybe<WorkflowJobLogConnection>;
  /** A workflow containing triggers and jobs [REQUIRED_SCOPES:workflow:read] */
  workflows?: Maybe<WorkflowConnection>;
};


export type QueryAccountArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountBalanceArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountBalancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountTypeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountingTableArgs = {
  entityId: Scalars['ID']['input'];
  table: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasRevenueInFiscalYear?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApiClientArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApiClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApprovalRuleArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApprovalRulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApproverArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApproversArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillRunArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillRunsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingDetailsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCampaignArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCampaignsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContactArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCouponArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCreditNoteArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCreditNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDealArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDealStageArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDealStagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDealsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDeepEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['ID']['input']>;
  objectType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDisputeReasonArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDisputeReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDraftCreditNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDraftInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEmailArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEnabledOnlyForUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEntityArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEventArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEventDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFeatureArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFeatureUsageArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFeatureUsageHistogramArgs = {
  periods?: InputMaybe<Scalars['Int']['input']>;
  subscriptionChargeId: Scalars['ID']['input'];
};


export type QueryFeatureUsagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFeaturesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFieldArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFinancialAccountArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFinancialAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFormattedCreditNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFormattedInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFormattedQuoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIndustriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIndustryArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIntracomVatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInvoiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInvoiceItemArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInvoiceItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInvoiceTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInvoiceTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIsolateTosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJournalEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJournalEntryArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJournalEntryLineArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJournalEntryLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLeadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLeadSourceArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLeadSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLeadStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLeadStatusesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLeadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMonthlyReportArgs = {
  entityId?: InputMaybe<Scalars['ID']['input']>;
  year: Scalars['Int']['input'];
};


export type QueryNotificationArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryObjArgs = {
  name: Scalars['String']['input'];
};


export type QueryOwnersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentApplicationArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentMethodArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPeriodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPeriodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlanChangeOptionsArgs = {
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlanFeatureArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlanFeaturesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlatformArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlatformsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginDefinitionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginEntityArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginParameterArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginParametersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginVendorArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginVendorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPriceListArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPriceListChangeOptionsArgs = {
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPriceListChargeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPriceListChargesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPriceListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductCategoryArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuoteArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuoteChangeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuoteChangesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuoteChargeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuoteChargesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRecurringRevenueArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRecurringRevenuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRevenueDetailsArgs = {
  accountId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRevenueMovementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRevenueMovementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRevenueRecognitionTableArgs = {
  entityId: Scalars['ID']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  year: Scalars['Int']['input'];
};


export type QueryRoleArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRoleScopesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySearchArgs = {
  text: Scalars['String']['input'];
};


export type QuerySecondaryBillingContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubscriptionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubscriptionChargeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubscriptionChargesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubscriptionFeaturesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTemplateArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTenantArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTenantProvisioningChangeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTenantProvisioningChangesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransactionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUserArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryValidCouponArgs = {
  couponCode: Scalars['String']['input'];
};


export type QueryViewArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryViewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWebhookEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWorkflowArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkflowActionsArgs = {
  objectType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWorkflowCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkflowCategoryArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkflowJobLogArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkflowJobLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkflowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  viewId?: InputMaybe<Scalars['ID']['input']>;
};

export type Quote = {
  __typename?: 'Quote';
  acceptedByName?: Maybe<Scalars['String']['output']>;
  acceptedByTitle?: Maybe<Scalars['String']['output']>;
  account?: Maybe<Account>;
  accountId: Scalars['ID']['output'];
  amount: Scalars['Float']['output'];
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountsByPeriod: Array<PeriodAmount>;
  applicationDate?: Maybe<Scalars['ISO8601Date']['output']>;
  applied: Scalars['Boolean']['output'];
  approvalRequest?: Maybe<ApprovalRequest>;
  backdatedPeriods?: Maybe<Scalars['Boolean']['output']>;
  backdatedQuote?: Maybe<Scalars['Boolean']['output']>;
  billingCycles?: Maybe<Array<BillingCycle>>;
  billingDay?: Maybe<Scalars['Int']['output']>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Credits granted from plan upgrades */
  credits?: Maybe<Scalars['Float']['output']>;
  currencyId: Scalars['ID']['output'];
  deal?: Maybe<Deal>;
  dealId?: Maybe<Scalars['ID']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  /** Amount discounted from subtotal */
  discountValue: Scalars['Float']['output'];
  documents?: Maybe<Array<Document>>;
  endDate: Scalars['ISO8601Date']['output'];
  endDateOptions?: Maybe<Array<DateOption>>;
  evergreen?: Maybe<Scalars['Boolean']['output']>;
  expiresAt: Scalars['ISO8601Date']['output'];
  firstInvoice?: Maybe<Invoice>;
  formattedQuote?: Maybe<FormattedQuote>;
  /** Null when previewing */
  id?: Maybe<Scalars['ID']['output']>;
  invoiceImmediately?: Maybe<Scalars['Boolean']['output']>;
  invoiceImmediatelyAvailable?: Maybe<Scalars['Boolean']['output']>;
  invoiceUntil: Scalars['ISO8601Date']['output'];
  invoiceUntilOptions?: Maybe<Array<DateOption>>;
  invoices?: Maybe<Array<Invoice>>;
  isPendingApprovalRequest: Scalars['Boolean']['output'];
  kind: QuoteChangeKind;
  /** Personal message for the contact whom the quote is shared with */
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  netPaymentDays?: Maybe<Scalars['Int']['output']>;
  /** Notes pertaining to the quote */
  notes?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  payableId?: Maybe<Scalars['ID']['output']>;
  /** Amount for a single full period of the subscription */
  periodAmount?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Array<QuotePlan>>;
  poNumber?: Maybe<Scalars['String']['output']>;
  quoteChanges?: Maybe<Array<QuoteChange>>;
  requiresApproval: Scalars['Boolean']['output'];
  /** Amount in the currency smallest unit */
  smallUnitAmountDue?: Maybe<Scalars['Int']['output']>;
  splitInvoice?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['ISO8601Date']['output'];
  state: QuoteState;
  /** Total without discount */
  subtotal: Scalars['Float']['output'];
  taxAmount: Scalars['Float']['output'];
  taxCode?: Maybe<Scalars['String']['output']>;
  /** Approval rules triggered by the quote properties */
  triggeredApprovalRules?: Maybe<Array<ApprovalRule>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  uuid: Scalars['ID']['output'];
};


export type QuoteTriggeredApprovalRulesArgs = {
  approverId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of QuoteAccept. */
export type QuoteAcceptPayload = {
  __typename?: 'QuoteAcceptPayload';
  errors?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of QuoteAccountSignup. */
export type QuoteAccountSignupPayload = {
  __typename?: 'QuoteAccountSignupPayload';
  account?: Maybe<Account>;
  amount?: Maybe<Scalars['Float']['output']>;
  currencyId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  portalSessionToken?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
  tenant?: Maybe<Tenant>;
};

/** Autogenerated return type of QuoteAddCoupon. */
export type QuoteAddCouponPayload = {
  __typename?: 'QuoteAddCouponPayload';
  errors?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteApplyChanges. */
export type QuoteApplyChangesPayload = {
  __typename?: 'QuoteApplyChangesPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
  quote: Quote;
  subscriptions?: Maybe<Array<Subscription>>;
};

/** Autogenerated return type of QuoteApprovalCancel. */
export type QuoteApprovalCancelPayload = {
  __typename?: 'QuoteApprovalCancelPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote: Array<Quote>;
};

/** Autogenerated return type of QuoteApprovalStart. */
export type QuoteApprovalStartPayload = {
  __typename?: 'QuoteApprovalStartPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

/** Autogenerated return type of QuoteApprove. */
export type QuoteApprovePayload = {
  __typename?: 'QuoteApprovePayload';
  errors?: Maybe<Scalars['String']['output']>;
};

export type QuoteAttributes = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  backdatedPeriods?: InputMaybe<Scalars['Boolean']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  currencyId?: InputMaybe<Scalars['String']['input']>;
  dealId?: InputMaybe<Scalars['ID']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  evergreen?: InputMaybe<Scalars['Boolean']['input']>;
  expiresAt?: InputMaybe<Scalars['ISO8601Date']['input']>;
  invoiceImmediately?: InputMaybe<Scalars['Boolean']['input']>;
  invoiceUntil?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /** Personal message for the contact whom the quote is shared with */
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  netPaymentDays?: InputMaybe<Scalars['Int']['input']>;
  /** Notes pertaining to the quote */
  notes?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  poNumber?: InputMaybe<Scalars['String']['input']>;
  splitInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
};

export type QuoteChange = {
  __typename?: 'QuoteChange';
  charges: Array<QuoteCharge>;
  currencyId: Scalars['ID']['output'];
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The available interval months options for ramp up changes */
  intervalMonthsOptions?: Maybe<Array<Scalars['Int']['output']>>;
  kind: QuoteChangeKind;
  name: Scalars['String']['output'];
  priceList?: Maybe<PriceList>;
  priceListId?: Maybe<Scalars['ID']['output']>;
  /** Standard pricing is used unless this is true */
  priceOverride?: Maybe<Scalars['Boolean']['output']>;
  quote: Quote;
  quoteId: Scalars['ID']['output'];
  quotePlan: QuotePlan;
  quotePlanId: Scalars['ID']['output'];
  /** The selected interval months for ramp up changes */
  rampIntervalMonths?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
  subscription?: Maybe<Subscription>;
  subscriptionId?: Maybe<Scalars['ID']['output']>;
};


export type QuoteChangeChargesArgs = {
  sort?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for QuoteChange. */
export type QuoteChangeConnection = {
  __typename?: 'QuoteChangeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<QuoteChangeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<QuoteChange>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of QuoteChangeCreate. */
export type QuoteChangeCreatePayload = {
  __typename?: 'QuoteChangeCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quoteChange?: Maybe<QuoteChange>;
};

/** Autogenerated return type of QuoteChangeCreateRampUp. */
export type QuoteChangeCreateRampUpPayload = {
  __typename?: 'QuoteChangeCreateRampUpPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quoteChange?: Maybe<QuoteChange>;
};

/** Autogenerated return type of QuoteChangeCreateRampUpPreview. */
export type QuoteChangeCreateRampUpPreviewPayload = {
  __typename?: 'QuoteChangeCreateRampUpPreviewPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  intervalMonthsOptions?: Maybe<Array<Scalars['Int']['output']>>;
  quoteChange?: Maybe<QuoteChange>;
};

/** Autogenerated return type of QuoteChangeDelete. */
export type QuoteChangeDeletePayload = {
  __typename?: 'QuoteChangeDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quoteChange?: Maybe<QuoteChange>;
};

/** Autogenerated return type of QuoteChangeDiscountCreate. */
export type QuoteChangeDiscountCreatePayload = {
  __typename?: 'QuoteChangeDiscountCreatePayload';
  errors?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
  quoteChangeDiscount?: Maybe<QuoteChange>;
};

/** An edge in a connection. */
export type QuoteChangeEdge = {
  __typename?: 'QuoteChangeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<QuoteChange>;
};

export enum QuoteChangeKind {
  /** Adjustment quote */
  Adjustment = 'ADJUSTMENT',
  /** Coupon quote */
  Coupon = 'COUPON',
  /** Credit quote */
  Credit = 'CREDIT',
  /** Discount quote */
  Discount = 'DISCOUNT',
  /** Reinstate quote */
  Reinstate = 'REINSTATE',
  /** Renew quote */
  Renew = 'RENEW',
  /** Subscribe quote */
  Subscribe = 'SUBSCRIBE',
  /** Unsubscribe quote */
  Unsubscribe = 'UNSUBSCRIBE',
  /** Update quote */
  Update = 'UPDATE'
}

/** Autogenerated return type of QuoteChangeUpdate. */
export type QuoteChangeUpdatePayload = {
  __typename?: 'QuoteChangeUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quoteChange?: Maybe<QuoteChange>;
};

/** Autogenerated return type of QuoteChangeUpdateRampUp. */
export type QuoteChangeUpdateRampUpPayload = {
  __typename?: 'QuoteChangeUpdateRampUpPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quoteChange?: Maybe<QuoteChange>;
};

export type QuoteCharge = {
  __typename?: 'QuoteCharge';
  amount?: Maybe<Scalars['Float']['output']>;
  amountsByPeriod?: Maybe<Array<PeriodAmount>>;
  billingPeriod?: Maybe<BillingPeriod>;
  billingPeriodAmounts?: Maybe<Array<BillingPeriodAmount>>;
  chargeType?: Maybe<ChargeType>;
  couponId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currencyId: Scalars['ID']['output'];
  currentQuantity?: Maybe<Scalars['Int']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  endDate: Scalars['ISO8601Date']['output'];
  feature?: Maybe<Feature>;
  id?: Maybe<Scalars['ID']['output']>;
  invoiceLineText?: Maybe<Scalars['String']['output']>;
  isRamp: Scalars['Boolean']['output'];
  kind?: Maybe<QuoteChangeKind>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priceDecimals?: Maybe<Scalars['Int']['output']>;
  priceList?: Maybe<PriceList>;
  priceListCharge?: Maybe<PriceListCharge>;
  priceListChargeId?: Maybe<Scalars['ID']['output']>;
  priceTiers?: Maybe<Array<QuotePriceTier>>;
  pricingModel?: Maybe<PricingModel>;
  prorationRate?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  quantityMax?: Maybe<Scalars['Int']['output']>;
  quantityMin?: Maybe<Scalars['Int']['output']>;
  quoteChange: QuoteChange;
  quoteChangeId: Scalars['ID']['output'];
  startDate: Scalars['ISO8601Date']['output'];
  subscriptionCharge?: Maybe<SubscriptionCharge>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  /** Average price value when charge is Tiered */
  tieredAveragePrice?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  vatCode?: Maybe<Scalars['String']['output']>;
};

export type QuoteChargeAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  /** Discount rate for the charge */
  discount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceListChargeId?: InputMaybe<Scalars['ID']['input']>;
  priceTiers?: InputMaybe<Array<PriceListChargeTierAttributes>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  subtotal?: InputMaybe<Scalars['BigDecimal']['input']>;
};

/** The connection type for QuoteCharge. */
export type QuoteChargeConnection = {
  __typename?: 'QuoteChargeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<QuoteChargeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<QuoteCharge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type QuoteChargeEdge = {
  __typename?: 'QuoteChargeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<QuoteCharge>;
};

/** Autogenerated return type of QuoteChargeFreeMonthsCreate. */
export type QuoteChargeFreeMonthsCreatePayload = {
  __typename?: 'QuoteChargeFreeMonthsCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
  quoteChange?: Maybe<QuoteChange>;
  quoteCharge?: Maybe<QuoteCharge>;
};

/** Autogenerated return type of QuoteChargeUpdate. */
export type QuoteChargeUpdatePayload = {
  __typename?: 'QuoteChargeUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quoteCharge?: Maybe<QuoteCharge>;
};

/** Autogenerated return type of QuoteCompose. */
export type QuoteComposePayload = {
  __typename?: 'QuoteComposePayload';
  quote: Quote;
};

/** The connection type for Quote. */
export type QuoteConnection = {
  __typename?: 'QuoteConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<QuoteEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Quote>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of QuoteCreate. */
export type QuoteCreatePayload = {
  __typename?: 'QuoteCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteCreateSignUrl. */
export type QuoteCreateSignUrlPayload = {
  __typename?: 'QuoteCreateSignUrlPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  pluginClientId?: Maybe<Scalars['String']['output']>;
  pluginShortName?: Maybe<Scalars['String']['output']>;
  redirectUri?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of QuoteCreateWithDeal. */
export type QuoteCreateWithDealPayload = {
  __typename?: 'QuoteCreateWithDealPayload';
  deal?: Maybe<Deal>;
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteDelete. */
export type QuoteDeletePayload = {
  __typename?: 'QuoteDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteDuplicate. */
export type QuoteDuplicatePayload = {
  __typename?: 'QuoteDuplicatePayload';
  errors: Array<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
};

/** An edge in a connection. */
export type QuoteEdge = {
  __typename?: 'QuoteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Quote>;
};

export type QuoteFreeMonthsAttributes = {
  freeMonths: Scalars['Int']['input'];
  /** Whether the free periods should be added to the quote period */
  freeMonthsAdd?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type QuoteLine = {
  __typename?: 'QuoteLine';
  amount: Scalars['Float']['output'];
  amountsByPeriod: Array<PeriodAmount>;
  billingPeriodEnd?: Maybe<Scalars['String']['output']>;
  billingPeriodStart?: Maybe<Scalars['String']['output']>;
  chargeKind?: Maybe<QuoteChangeKind>;
  chargeType: Scalars['String']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  frequency: Scalars['String']['output'];
  isRamp: Scalars['Boolean']['output'];
  lineText?: Maybe<Scalars['String']['output']>;
  periods: Scalars['Int']['output'];
  planName: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  priceDecimals?: Maybe<Scalars['Int']['output']>;
  priceListChargeId?: Maybe<Scalars['ID']['output']>;
  priceListChargeName?: Maybe<Scalars['String']['output']>;
  priceListId: Scalars['ID']['output'];
  priceListName?: Maybe<Scalars['String']['output']>;
  priceTiers?: Maybe<Array<FormattedChargePriceTier>>;
  pricingModel: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  prorationRate?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  showProductNameOnLineItem: Scalars['Boolean']['output'];
  taxCode?: Maybe<Scalars['String']['output']>;
  trialAllowed: Scalars['Boolean']['output'];
  trialEndDate?: Maybe<Scalars['ISO8601Date']['output']>;
  trialStartDate?: Maybe<Scalars['ISO8601Date']['output']>;
  unitOfMeasure: Scalars['String']['output'];
  vatCode?: Maybe<Scalars['String']['output']>;
};

export type QuotePlan = {
  __typename?: 'QuotePlan';
  charges?: Maybe<Array<QuoteCharge>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  plan?: Maybe<Plan>;
  position: Scalars['Int']['output'];
  priceListId: Scalars['ID']['output'];
  productId?: Maybe<Scalars['ID']['output']>;
  quoteChangeId: Scalars['ID']['output'];
  quoteChangeKind: QuoteChangeKind;
  subscriptionCharges?: Maybe<Array<SubscriptionCharge>>;
  subscriptionId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type QuotePlanPreview = {
  __typename?: 'QuotePlanPreview';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  formattedInvoice?: Maybe<FormattedInvoice>;
  formattedQuote: FormattedQuote;
  invoice?: Maybe<Invoice>;
  quote: Quote;
  subscriptions: Array<Subscription>;
};

/** Autogenerated return type of QuotePollSigningUrl. */
export type QuotePollSigningUrlPayload = {
  __typename?: 'QuotePollSigningUrlPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  infoMessage?: Maybe<Scalars['String']['output']>;
  redirectUri?: Maybe<Scalars['String']['output']>;
  shouldPoll?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type QuotePriceTier = {
  __typename?: 'QuotePriceTier';
  ends?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  starts?: Maybe<Scalars['Int']['output']>;
};

/** Autogenerated return type of QuoteRecalculateTaxes. */
export type QuoteRecalculateTaxesPayload = {
  __typename?: 'QuoteRecalculateTaxesPayload';
  errors?: Maybe<Scalars['JSON']['output']>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteReject. */
export type QuoteRejectPayload = {
  __typename?: 'QuoteRejectPayload';
  errors?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of QuoteRemoveCoupons. */
export type QuoteRemoveCouponsPayload = {
  __typename?: 'QuoteRemoveCouponsPayload';
  errors?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteSendEmail. */
export type QuoteSendEmailPayload = {
  __typename?: 'QuoteSendEmailPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export enum QuoteState {
  /** Accepted quote */
  Accepted = 'ACCEPTED',
  /** Approved quote */
  Approved = 'APPROVED',
  /** Draft quote */
  Draft = 'DRAFT',
  /** In_approval quote */
  InApproval = 'IN_APPROVAL',
  /** Rejected quote */
  Rejected = 'REJECTED',
  /** Shared quote */
  Shared = 'SHARED',
  /** Undone quote */
  Undone = 'UNDONE',
  /** Viewed quote */
  Viewed = 'VIEWED'
}

/** Autogenerated return type of QuoteSubscriptionReinstate. */
export type QuoteSubscriptionReinstatePayload = {
  __typename?: 'QuoteSubscriptionReinstatePayload';
  errors: Array<Scalars['JSON']['output']>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteSubscriptionRenew. */
export type QuoteSubscriptionRenewPayload = {
  __typename?: 'QuoteSubscriptionRenewPayload';
  errors: Array<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteSubscriptionUpdate. */
export type QuoteSubscriptionUpdatePayload = {
  __typename?: 'QuoteSubscriptionUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteSubscriptionUpgrade. */
export type QuoteSubscriptionUpgradePayload = {
  __typename?: 'QuoteSubscriptionUpgradePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote: Quote;
};

/** Autogenerated return type of QuoteUndo. */
export type QuoteUndoPayload = {
  __typename?: 'QuoteUndoPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoices?: Maybe<Array<Invoice>>;
  quote?: Maybe<Quote>;
  subscriptions?: Maybe<Array<Subscription>>;
};

/** Autogenerated return type of QuoteUnshare. */
export type QuoteUnsharePayload = {
  __typename?: 'QuoteUnsharePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

/** Autogenerated return type of QuoteUpdate. */
export type QuoteUpdatePayload = {
  __typename?: 'QuoteUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  quote?: Maybe<Quote>;
};

export type RecurringRevenue = {
  __typename?: 'RecurringRevenue';
  /** Account the revenue belongs to */
  accountId?: Maybe<Scalars['ID']['output']>;
  currencyId: Scalars['ID']['output'];
  /** The calendar month the revenue belongs to */
  date: Scalars['ISO8601Date']['output'];
  /** Unique ID for this record */
  id?: Maybe<Scalars['ID']['output']>;
  /** Monthly recurring revenue amount at the time of the query */
  recurringAmount?: Maybe<Scalars['Float']['output']>;
  /** Usage + recurring revenie */
  totalAmount?: Maybe<Scalars['Float']['output']>;
  /** Monthly usage revenue amount at the time of the query */
  usageAmount?: Maybe<Scalars['Float']['output']>;
};

/** The connection type for RecurringRevenue. */
export type RecurringRevenueConnection = {
  __typename?: 'RecurringRevenueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RecurringRevenueEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RecurringRevenue>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type RecurringRevenueEdge = {
  __typename?: 'RecurringRevenueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<RecurringRevenue>;
};

export type RelatedObject = {
  __typename?: 'RelatedObject';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RevenueDetail = {
  __typename?: 'RevenueDetail';
  currencyId?: Maybe<Scalars['ID']['output']>;
  deferred?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  recognized?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type RevenueMovement = {
  __typename?: 'RevenueMovement';
  /** The account the revenue movement belongs to */
  account?: Maybe<Account>;
  accountId: Scalars['ID']['output'];
  currencyId: Scalars['ID']['output'];
  date?: Maybe<Scalars['ISO8601Date']['output']>;
  /** IDs are null when object is previewed */
  id?: Maybe<Scalars['ID']['output']>;
  movementType?: Maybe<Scalars['String']['output']>;
  recurringAmount?: Maybe<Scalars['Float']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  usageAmount?: Maybe<Scalars['Float']['output']>;
  usageMovementType?: Maybe<Scalars['String']['output']>;
};

/** The connection type for RevenueMovement. */
export type RevenueMovementConnection = {
  __typename?: 'RevenueMovementConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RevenueMovementEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RevenueMovement>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type RevenueMovementEdge = {
  __typename?: 'RevenueMovementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<RevenueMovement>;
};

export type RevenueRecognitionAccount = {
  __typename?: 'RevenueRecognitionAccount';
  dateLabels: Array<Scalars['String']['output']>;
  documents: Array<RevenueRecognitionDocument>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  totals: Array<RevenueRecognitionMonths>;
};

export type RevenueRecognitionDateLabel = {
  __typename?: 'RevenueRecognitionDateLabel';
  date: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type RevenueRecognitionDocument = {
  __typename?: 'RevenueRecognitionDocument';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<RevenueRecognitionItem>>;
  number: Scalars['ID']['output'];
  totals: Array<RevenueRecognitionMonths>;
};

export type RevenueRecognitionItem = {
  __typename?: 'RevenueRecognitionItem';
  id: Scalars['ID']['output'];
  months: Array<RevenueRecognitionMonths>;
  name: Scalars['String']['output'];
  period?: Maybe<Scalars['String']['output']>;
};

export type RevenueRecognitionMonths = {
  __typename?: 'RevenueRecognitionMonths';
  balance?: Maybe<Scalars['Float']['output']>;
  dateLabel: Scalars['String']['output'];
  revenue?: Maybe<Scalars['Float']['output']>;
};

export type RevenueRecognitionTable = {
  __typename?: 'RevenueRecognitionTable';
  accounts: Array<RevenueRecognitionAccount>;
  dateLabels: Array<RevenueRecognitionDateLabel>;
  totals: Array<RevenueRecognitionMonths>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  scopes?: Maybe<Array<Scalars['String']['output']>>;
};

export type RoleAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The connection type for Role. */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Role>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of RoleCreate. */
export type RoleCreatePayload = {
  __typename?: 'RoleCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Role>;
};

/** Autogenerated return type of RoleDelete. */
export type RoleDeletePayload = {
  __typename?: 'RoleDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Role>;
};

export type RoleScope = {
  __typename?: 'RoleScope';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
};

/** The connection type for RoleScope. */
export type RoleScopeConnection = {
  __typename?: 'RoleScopeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoleScopeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RoleScope>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type RoleScopeEdge = {
  __typename?: 'RoleScopeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<RoleScope>;
};

/** Autogenerated return type of RoleUpdate. */
export type RoleUpdatePayload = {
  __typename?: 'RoleUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Role>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  /** Datetime the object was last updated */
  objUpdatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type SecondaryBillingContact = {
  __typename?: 'SecondaryBillingContact';
  accountId: Scalars['ID']['output'];
  contactId: Scalars['ID']['output'];
};

/** The connection type for SecondaryBillingContact. */
export type SecondaryBillingContactConnection = {
  __typename?: 'SecondaryBillingContactConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SecondaryBillingContactEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SecondaryBillingContact>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SecondaryBillingContactEdge = {
  __typename?: 'SecondaryBillingContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SecondaryBillingContact>;
};

/** Autogenerated return type of SignupActivate. */
export type SignupActivatePayload = {
  __typename?: 'SignupActivatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  loginUrl?: Maybe<Scalars['String']['output']>;
};

export type SignupAttributes = {
  company: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  subdomain?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of SignupCreate. */
export type SignupCreatePayload = {
  __typename?: 'SignupCreatePayload';
  errors: Array<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export enum SsoMode {
  /** auto */
  Auto = 'auto',
  /** prompt */
  Prompt = 'prompt'
}

export type Subscription = {
  __typename?: 'Subscription';
  account: Account;
  accountId: Scalars['ID']['output'];
  cancellationDate?: Maybe<Scalars['ISO8601Date']['output']>;
  charges?: Maybe<Array<SubscriptionCharge>>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  currencyId: Scalars['ID']['output'];
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  evergreen: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  period: Scalars['String']['output'];
  plan?: Maybe<Plan>;
  priceList?: Maybe<PriceList>;
  priceListId: Scalars['ID']['output'];
  priceOverride: Scalars['Boolean']['output'];
  product?: Maybe<Product>;
  provisioningRequired: Scalars['Boolean']['output'];
  rampIntervalMonths?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
  state: SubscriptionState;
  tenant?: Maybe<Tenant>;
  trialEndDate?: Maybe<Scalars['ISO8601Date']['output']>;
  trialPeriod: Scalars['String']['output'];
  trialStartDate?: Maybe<Scalars['ISO8601Date']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type SubscriptionAttributes = {
  /** Fields to create the company or organization that is subscribing */
  account?: InputMaybe<AccountAttributes>;
  /** The code of the company or organization that is subscribing */
  accountCode?: InputMaybe<Scalars['String']['input']>;
  /** The id of the company or organization that is subscribing */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** Set custom discount amount for price list charges */
  discounts?: InputMaybe<Array<QuoteChargeAttributes>>;
  /** Date that the subscription ends */
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /** Indicates if the subscription should be renewed automatically */
  evergreen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set custom quantity, price and discount rate for charges */
  priceListCharges?: InputMaybe<Array<QuoteChargeAttributes>>;
  /** The code of the plan to subscribe to */
  priceListCode?: InputMaybe<Scalars['String']['input']>;
  /** The id of the plan to subscribe to */
  priceListId?: InputMaybe<Scalars['ID']['input']>;
  /** Indicates if the subscription should be renewed with prices from the price list */
  priceOverride?: InputMaybe<Scalars['Boolean']['input']>;
  /** Date that the subscription starts */
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /** Fields to create a tenant for the subscription */
  tenant?: InputMaybe<TenantAttributes>;
  /** A unique code that represents the tenant in a SaaS application */
  tenantCode?: InputMaybe<Scalars['String']['input']>;
  /** The name of the tenant. Typically this is the account name */
  tenantName?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if the subscription is a trial or immediately active */
  trial?: InputMaybe<Scalars['Boolean']['input']>;
  /** Overrides the default trial start date */
  trialStartDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
};

/** Autogenerated return type of SubscriptionCancel. */
export type SubscriptionCancelPayload = {
  __typename?: 'SubscriptionCancelPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  subscriptions?: Maybe<Array<Subscription>>;
};

export type SubscriptionCharge = {
  __typename?: 'SubscriptionCharge';
  account: Account;
  amount?: Maybe<Scalars['Float']['output']>;
  billingPeriod?: Maybe<BillingPeriod>;
  chargeType?: Maybe<ChargeType>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Currency;
  currentPeriodPriceByTiers?: Maybe<Array<SubscriptionTieredPrice>>;
  discount?: Maybe<Scalars['Float']['output']>;
  discountedPrice?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['ISO8601Date']['output'];
  expired: Scalars['Boolean']['output'];
  feature?: Maybe<Feature>;
  id: Scalars['ID']['output'];
  invoiceLineText: Scalars['String']['output'];
  isAmendment: Scalars['Boolean']['output'];
  isRamp: Scalars['Boolean']['output'];
  kind?: Maybe<QuoteChangeKind>;
  name?: Maybe<Scalars['String']['output']>;
  periodPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  priceDecimals?: Maybe<Scalars['Int']['output']>;
  priceList?: Maybe<PriceList>;
  priceListCharge?: Maybe<PriceListCharge>;
  priceListChargeId?: Maybe<Scalars['ID']['output']>;
  priceListId?: Maybe<Scalars['ID']['output']>;
  priceTiers?: Maybe<Array<SubscriptionPriceTier>>;
  pricingModel?: Maybe<PricingModel>;
  prorationRate?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  quantityMax?: Maybe<Scalars['Int']['output']>;
  quantityMin?: Maybe<Scalars['Int']['output']>;
  selfServiceQuantity?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['ISO8601Date']['output'];
  subscription: Subscription;
  subscriptionId: Scalars['ID']['output'];
  /** Average price value when charge is Tiered */
  tieredAveragePrice?: Maybe<Scalars['Float']['output']>;
  trial: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for SubscriptionCharge. */
export type SubscriptionChargeConnection = {
  __typename?: 'SubscriptionChargeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubscriptionChargeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SubscriptionCharge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SubscriptionChargeEdge = {
  __typename?: 'SubscriptionChargeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SubscriptionCharge>;
};

/** The connection type for Subscription. */
export type SubscriptionConnection = {
  __typename?: 'SubscriptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubscriptionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Subscription>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of SubscriptionCreate. */
export type SubscriptionCreatePayload = {
  __typename?: 'SubscriptionCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  subscription?: Maybe<Subscription>;
};

/** Autogenerated return type of SubscriptionDelete. */
export type SubscriptionDeletePayload = {
  __typename?: 'SubscriptionDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<Subscription>;
};

/** An edge in a connection. */
export type SubscriptionEdge = {
  __typename?: 'SubscriptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Subscription>;
};

/** Representation of a price tier for a subscription charge. */
export type SubscriptionPriceTier = {
  __typename?: 'SubscriptionPriceTier';
  ends?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  starts?: Maybe<Scalars['Int']['output']>;
};

/** Autogenerated return type of SubscriptionReinstate. */
export type SubscriptionReinstatePayload = {
  __typename?: 'SubscriptionReinstatePayload';
  errors?: Maybe<Array<Scalars['JSON']['output']>>;
  subscriptions?: Maybe<Array<Subscription>>;
};

/** Autogenerated return type of SubscriptionSetAutoRenew. */
export type SubscriptionSetAutoRenewPayload = {
  __typename?: 'SubscriptionSetAutoRenewPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  subscriptions: Array<Subscription>;
};

export enum SubscriptionState {
  /** Active subscription */
  Active = 'ACTIVE',
  /** Cancelled subscription */
  Canceled = 'CANCELED',
  /** Expired subscription */
  Expired = 'EXPIRED',
  /** Pending subscription */
  Pending = 'PENDING',
  /** Trial subscription */
  Trial = 'TRIAL'
}

export type SubscriptionTenantUpdateAttributes = {
  tenantCode?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of SubscriptionTenantUpdate. */
export type SubscriptionTenantUpdatePayload = {
  __typename?: 'SubscriptionTenantUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  subscription: Subscription;
};

/** Detail of how is the price calculated by tiers for a tiered subscription charge. */
export type SubscriptionTieredPrice = {
  __typename?: 'SubscriptionTieredPrice';
  amount: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  tier: SubscriptionPriceTier;
};

/** Autogenerated return type of SubscriptionTrialConvert. */
export type SubscriptionTrialConvertPayload = {
  __typename?: 'SubscriptionTrialConvertPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
  subscription?: Maybe<Subscription>;
};

/** Autogenerated return type of SubscriptionTrialConvertPreview. */
export type SubscriptionTrialConvertPreviewPayload = {
  __typename?: 'SubscriptionTrialConvertPreviewPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
  subscription?: Maybe<Subscription>;
};

/** Autogenerated return type of SubscriptionTrialExtend. */
export type SubscriptionTrialExtendPayload = {
  __typename?: 'SubscriptionTrialExtendPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  invoice?: Maybe<Invoice>;
  subscription?: Maybe<Subscription>;
};

/** Autogenerated return type of SubscriptionUpdate. */
export type SubscriptionUpdatePayload = {
  __typename?: 'SubscriptionUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  subscription?: Maybe<Subscription>;
};

export enum TaxType {
  /** EIN number */
  Ein = 'EIN',
  /** General tax number */
  Generic = 'GENERIC',
  /** GST number */
  Gst = 'GST',
  /** VAT number */
  Vat = 'VAT'
}

export type TaxationEntityUseCode = {
  __typename?: 'TaxationEntityUseCode';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  validCountries?: Maybe<Array<Scalars['String']['output']>>;
};

export type Template = {
  __typename?: 'Template';
  body: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  fields: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['ID']['output'];
  subject: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type TemplateAttributes = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Template. */
export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TemplateEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Template>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Template>;
};

/** Autogenerated return type of TemplateUpdate. */
export type TemplateUpdatePayload = {
  __typename?: 'TemplateUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  template?: Maybe<Template>;
};

export type Tenant = {
  __typename?: 'Tenant';
  account: Account;
  accountId: Scalars['ID']['output'];
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  lastLogin?: Maybe<Scalars['ISO8601DateTime']['output']>;
  latestProvisioningChange?: Maybe<TenantProvisioningChange>;
  latestProvisioningChangeId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  platform: Platform;
  platformId: Scalars['ID']['output'];
  provisioningChanges?: Maybe<Array<TenantProvisioningChange>>;
  provisioningRequired?: Maybe<Scalars['Boolean']['output']>;
  provisioningState?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userCount?: Maybe<Scalars['Int']['output']>;
  utilizationMetrics?: Maybe<Scalars['JSON']['output']>;
};

export type TenantAttributes = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  platformCode?: InputMaybe<Scalars['String']['input']>;
  platformId?: InputMaybe<Scalars['ID']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Tenant. */
export type TenantConnection = {
  __typename?: 'TenantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TenantEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Tenant>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of TenantCreate. */
export type TenantCreatePayload = {
  __typename?: 'TenantCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  tenant?: Maybe<Tenant>;
};

/** Autogenerated return type of TenantDelete. */
export type TenantDeletePayload = {
  __typename?: 'TenantDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Tenant>;
};

/** An edge in a connection. */
export type TenantEdge = {
  __typename?: 'TenantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Tenant>;
};

export type TenantMetricsAttributes = {
  lastLogin?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  userCount?: InputMaybe<Scalars['Int']['input']>;
  utilizationMetrics?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of TenantMetricsUpdate. */
export type TenantMetricsUpdatePayload = {
  __typename?: 'TenantMetricsUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export type TenantProvisioningChange = {
  __typename?: 'TenantProvisioningChange';
  change?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  features?: Maybe<Scalars['String']['output']>;
  featuresJson?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  state: TenantProvisioningState;
  tenant?: Maybe<Tenant>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type TenantProvisioningChangeAttributes = {
  state?: InputMaybe<TenantProvisioningState>;
};

/** The connection type for TenantProvisioningChange. */
export type TenantProvisioningChangeConnection = {
  __typename?: 'TenantProvisioningChangeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TenantProvisioningChangeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TenantProvisioningChange>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type TenantProvisioningChangeEdge = {
  __typename?: 'TenantProvisioningChangeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<TenantProvisioningChange>;
};

/** Autogenerated return type of TenantProvisioningChangeUpdate. */
export type TenantProvisioningChangeUpdatePayload = {
  __typename?: 'TenantProvisioningChangeUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  tenantProvisioningChange?: Maybe<TenantProvisioningChange>;
};

export enum TenantProvisioningState {
  /** Tenant provisioning completed */
  Completed = 'COMPLETED',
  /** Tenant provisioning failed */
  Failed = 'FAILED',
  /** Changes have been made to the subscription that have not been applied yet */
  Pending = 'PENDING',
  /** Use this state to trigger a provisioning workflow */
  Started = 'STARTED'
}

/** Autogenerated return type of TenantUpdate. */
export type TenantUpdatePayload = {
  __typename?: 'TenantUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  tenant?: Maybe<Tenant>;
};

export type TieredAmount = {
  __typename?: 'TieredAmount';
  /** Total amount to pay for the period duration. Usage-based amounts could be null for future dates */
  amount?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']['output']>;
  /** Quantity on this tier */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Tier */
  tier?: Maybe<QuotePriceTier>;
};

export type Transaction = {
  __typename?: 'Transaction';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currencyId?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  kind: TransactionKind;
  payment?: Maybe<Payment>;
  state: Scalars['String']['output'];
  transactionable?: Maybe<TransactionableUnion>;
  transactionableId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for Transaction. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Transaction>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Transaction>;
};

export enum TransactionKind {
  /** Credit_note transaction */
  CreditNote = 'CREDIT_NOTE',
  /** Invoice transaction */
  Invoice = 'INVOICE',
  /** Payment transaction */
  Payment = 'PAYMENT'
}

/** Transactionable Object */
export type TransactionableUnion = CreditNote | Invoice | Payment;

export enum TrialExpirationAction {
  /** Activate subscription after trial expires */
  Activate = 'ACTIVATE',
  /** Cancel subscription after trial expires */
  Cancel = 'CANCEL'
}

export enum UsageCalculation {
  /** The billing process will take the quantity of the last usage entry for the billing period. */
  Last = 'LAST',
  /** The billing process will take the maximum quantity across all records in the billing period. */
  Max = 'MAX',
  /** The billing process will take the sum of quantity across all records in the billing period. */
  Sum = 'SUM'
}

export type UsageSubscriptionCharge = {
  __typename?: 'UsageSubscriptionCharge';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for UsageSubscriptionCharge. */
export type UsageSubscriptionChargeConnection = {
  __typename?: 'UsageSubscriptionChargeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UsageSubscriptionChargeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UsageSubscriptionCharge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type UsageSubscriptionChargeEdge = {
  __typename?: 'UsageSubscriptionChargeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<UsageSubscriptionCharge>;
};

export type User = {
  __typename?: 'User';
  allowLoginViaEmailLink?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  entityId?: Maybe<Scalars['ID']['output']>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['ISO8601DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  managerUser?: Maybe<User>;
  managerUserId?: Maybe<Scalars['ID']['output']>;
  profile?: Maybe<UserProfile>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['ID']['output']>;
  subordinates?: Maybe<Array<User>>;
  /** The user's work title */
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  uuid?: Maybe<Scalars['String']['output']>;
};

export type UserAttributes = {
  allowLoginViaEmailLink?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  managerUserId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UserProfileAttributes>;
  roleId?: InputMaybe<Scalars['ID']['input']>;
  sendLoginLink?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of UserCreate. */
export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  user?: Maybe<User>;
};

/** Autogenerated return type of UserDelete. */
export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  phone?: Maybe<Scalars['String']['output']>;
  tabnameIsSubdomain?: Maybe<Scalars['Boolean']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type UserProfileAttributes = {
  phone?: InputMaybe<Scalars['String']['input']>;
  tabnameIsSubdomain?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UserUpdate. */
export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  user?: Maybe<User>;
};

/** Defines table views with conditions and column configurations */
export type View = {
  __typename?: 'View';
  /** Comma-separated list of column names */
  columns?: Maybe<Scalars['String']['output']>;
  /** YAML-formatted conditions */
  conditions?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Field>>;
  /** Unique identifier for the view */
  id?: Maybe<Scalars['ID']['output']>;
  /** True if this view is to be shown by default on the page */
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** If true, only the user who created the view can see it */
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the view */
  name?: Maybe<Scalars['String']['output']>;
  /** Object this view is operating on */
  obj?: Maybe<Scalars['String']['output']>;
  /** Field the table is sorted by */
  sortBy?: Maybe<Scalars['String']['output']>;
  /** Sort order of the table */
  sortOrder?: Maybe<Scalars['String']['output']>;
  /** ID of the user who created the view */
  userId?: Maybe<Scalars['ID']['output']>;
};

/** Attributes for creating and updating a view */
export type ViewAttributes = {
  /** Comma-separated list of columns names */
  columns?: InputMaybe<Scalars['String']['input']>;
  /** YAML-formatted conditions */
  conditions?: InputMaybe<Scalars['String']['input']>;
  /** True if this view is to be shown by default on the page */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the view */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The object this view operates on */
  obj?: InputMaybe<Scalars['String']['input']>;
  /** Field the table is sorted by */
  sortBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort order of the table */
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for View. */
export type ViewConnection = {
  __typename?: 'ViewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ViewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<View>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of ViewCreate. */
export type ViewCreatePayload = {
  __typename?: 'ViewCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  view?: Maybe<View>;
};

/** Autogenerated return type of ViewDelete. */
export type ViewDeletePayload = {
  __typename?: 'ViewDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  view?: Maybe<View>;
};

/** An edge in a connection. */
export type ViewEdge = {
  __typename?: 'ViewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<View>;
};

/** Autogenerated return type of ViewUpdate. */
export type ViewUpdatePayload = {
  __typename?: 'ViewUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  view?: Maybe<View>;
};

export type Warren = {
  __typename?: 'Warren';
  featureFlags?: Maybe<Array<FeatureFlag>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
};

export type WarrenAttributes = {
  email?: InputMaybe<Scalars['String']['input']>;
  featureFlags?: InputMaybe<Array<FeatureFlagAttributes>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of WarrenProvision. */
export type WarrenProvisionPayload = {
  __typename?: 'WarrenProvisionPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  warren?: Maybe<Warren>;
};

export type WebPushAttributes = {
  endpoint: Scalars['String']['input'];
  expirationTime?: InputMaybe<Scalars['Int']['input']>;
  keys: WebPushKeysAttributes;
};

export type WebPushKeysAttributes = {
  auth: Scalars['String']['input'];
  p256dh: Scalars['String']['input'];
};

/** Autogenerated return type of WebPushSubscribe. */
export type WebPushSubscribePayload = {
  __typename?: 'WebPushSubscribePayload';
  errors: Array<Scalars['String']['output']>;
  registration: NotificationRegistration;
};

/** A webhook payload */
export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  /** Datetime the contact was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The headers sent with the webhook */
  headers?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the webhook event */
  id: Scalars['ID']['output'];
  /** Webhook payload that will be sent */
  payload?: Maybe<Scalars['String']['output']>;
  /** Indicates if it was a default or custom payload */
  payloadType?: Maybe<Scalars['String']['output']>;
  /** The response body received after sending the webhook */
  responseBody?: Maybe<Scalars['String']['output']>;
  /** The HTTP response code received after sending the webhook */
  responseCode?: Maybe<Scalars['String']['output']>;
  /** Datetime the contact was last updated */
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Destination url for webhook */
  url?: Maybe<Scalars['String']['output']>;
};

/** The connection type for WebhookEvent. */
export type WebhookEventConnection = {
  __typename?: 'WebhookEventConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WebhookEventEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<WebhookEvent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type WebhookEventEdge = {
  __typename?: 'WebhookEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<WebhookEvent>;
};

/** Autogenerated return type of WebhookEventRetry. */
export type WebhookEventRetryPayload = {
  __typename?: 'WebhookEventRetryPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  webhookEvent?: Maybe<WebhookEvent>;
};

/** Autogenerated return type of WidgetTokenCreate. */
export type WidgetTokenCreatePayload = {
  __typename?: 'WidgetTokenCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  host: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

/** A workflow containing triggers and jobs */
export type Workflow = {
  __typename?: 'Workflow';
  /** Description of the workflow */
  description?: Maybe<Scalars['String']['output']>;
  /** Determines whether this workflow runs or not */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the workflow */
  id: Scalars['ID']['output'];
  /** User who this workflow is isolated to */
  isolateTo?: Maybe<User>;
  /** ID of the user who this workflow is isolated to */
  isolateToUserId?: Maybe<Scalars['ID']['output']>;
  /** Whether this workflow is kept updated by Bunny or not */
  keepUpdated: Scalars['Boolean']['output'];
  /** Name of the workflow */
  name?: Maybe<Scalars['String']['output']>;
  /** The workflow recipe */
  recipe?: Maybe<Scalars['String']['output']>;
  /** Whether this workflow is standard or not */
  standard: Scalars['Boolean']['output'];
  /** Target class */
  targetClass?: Maybe<Scalars['String']['output']>;
  /** ID of the workflow category */
  workflowCategoryId: Scalars['ID']['output'];
  /** Workflow schedule */
  workflowSchedule?: Maybe<Scalars['String']['output']>;
};

/** A workflow action definition */
export type WorkflowAction = {
  __typename?: 'WorkflowAction';
  /** Unique name of the workflow action definition */
  name: Scalars['String']['output'];
};

export type WorkflowAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isolateToUserId?: InputMaybe<Scalars['ID']['input']>;
  keepUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipe?: InputMaybe<Scalars['String']['input']>;
  workflowCategoryId?: InputMaybe<Scalars['ID']['input']>;
};

/** A category of workflows */
export type WorkflowCategory = {
  __typename?: 'WorkflowCategory';
  /** Unique identifier for the workflow category */
  id: Scalars['ID']['output'];
  /** Name of the workflow */
  name?: Maybe<Scalars['String']['output']>;
  /** Workflows in the category */
  workflows?: Maybe<Array<Workflow>>;
};

export type WorkflowCategoryAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for WorkflowCategory. */
export type WorkflowCategoryConnection = {
  __typename?: 'WorkflowCategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkflowCategoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<WorkflowCategory>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of WorkflowCategoryCreate. */
export type WorkflowCategoryCreatePayload = {
  __typename?: 'WorkflowCategoryCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  workflowCategory?: Maybe<WorkflowCategory>;
};

/** Autogenerated return type of WorkflowCategoryDelete. */
export type WorkflowCategoryDeletePayload = {
  __typename?: 'WorkflowCategoryDeletePayload';
  errors?: Maybe<Scalars['String']['output']>;
  workflowCategory?: Maybe<WorkflowCategory>;
};

/** An edge in a connection. */
export type WorkflowCategoryEdge = {
  __typename?: 'WorkflowCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<WorkflowCategory>;
};

/** Autogenerated return type of WorkflowCategoryUpdate. */
export type WorkflowCategoryUpdatePayload = {
  __typename?: 'WorkflowCategoryUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  workflowCategory?: Maybe<WorkflowCategory>;
};

/** The connection type for Workflow. */
export type WorkflowConnection = {
  __typename?: 'WorkflowConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkflowEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Workflow>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Autogenerated return type of WorkflowCreate. */
export type WorkflowCreatePayload = {
  __typename?: 'WorkflowCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  workflow?: Maybe<Workflow>;
};

/** Autogenerated return type of WorkflowDelete. */
export type WorkflowDeletePayload = {
  __typename?: 'WorkflowDeletePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  workflow?: Maybe<Workflow>;
};

/** Autogenerated return type of WorkflowDuplicate. */
export type WorkflowDuplicatePayload = {
  __typename?: 'WorkflowDuplicatePayload';
  errors: Array<Scalars['String']['output']>;
  workflow?: Maybe<Workflow>;
};

/** An edge in a connection. */
export type WorkflowEdge = {
  __typename?: 'WorkflowEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Workflow>;
};

/** A workflow job log entry */
export type WorkflowJobLog = {
  __typename?: 'WorkflowJobLog';
  amountFailed?: Maybe<Scalars['Int']['output']>;
  amountProcessed?: Maybe<Scalars['Int']['output']>;
  amountTotal?: Maybe<Scalars['Int']['output']>;
  batchId?: Maybe<Scalars['String']['output']>;
  /** Datetime the lead was last updated */
  completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Datetime the lead was created */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Unique identifier for the workflow log entry */
  id: Scalars['ID']['output'];
  status?: Maybe<WorkflowJobLogStatus>;
  /** Datetime the lead was last updated */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  warrenId?: Maybe<Scalars['ID']['output']>;
  workflowId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for WorkflowJobLog. */
export type WorkflowJobLogConnection = {
  __typename?: 'WorkflowJobLogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkflowJobLogEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<WorkflowJobLog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type WorkflowJobLogEdge = {
  __typename?: 'WorkflowJobLogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<WorkflowJobLog>;
};

export enum WorkflowJobLogStatus {
  /** Completed */
  Completed = 'COMPLETED',
  /** Initializing */
  Initializing = 'INITIALIZING',
  /** Running */
  Running = 'RUNNING',
  /** Skipped */
  Skipped = 'SKIPPED'
}

/** Autogenerated return type of WorkflowUpdate. */
export type WorkflowUpdatePayload = {
  __typename?: 'WorkflowUpdatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  workflow?: Maybe<Workflow>;
};

/** Autogenerated return type of WorkflowsDefaultCreate. */
export type WorkflowsDefaultCreatePayload = {
  __typename?: 'WorkflowsDefaultCreatePayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
