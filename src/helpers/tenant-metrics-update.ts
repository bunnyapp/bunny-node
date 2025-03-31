import { TenantMetricsAttributes, TenantMetricsUpdatePayload } from '../generated/graphql';

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

interface TenantMetricsUpdateResponse {
  tenantMetricsUpdate?: TenantMetricsUpdatePayload;
}

const query = `mutation tenantMetricsUpdate ($code: String!, $attributes: TenantMetricsAttributes!){
  tenantMetricsUpdate (code: $code, attributes: $attributes) {
    errors
  }
}`;

export default async function tenantMetricsUpdate(
  this: { query: (query: string, variables: any) => Promise<GraphQLResponse<TenantMetricsUpdateResponse>> },
  code: string | undefined,
  lastLogin?: string | Date | null,
  userCount?: number | null,
  utilizationMetrics?: Record<string, any> | null
): Promise<boolean> {
  let variables = {
    code: code?.toString(),
    attributes: {
      lastLogin: lastLogin,
      userCount: userCount,
      utilizationMetrics: utilizationMetrics,
    },
  };

  const res = await this.query(query, variables);
  const tenantMetricsUpdate = res?.data?.tenantMetricsUpdate;

  if (res?.errors) {
    throw new Error(res.errors.map((e) => e.message).join());
  }

  if (tenantMetricsUpdate?.errors) {
    throw new Error(tenantMetricsUpdate.errors.join());
  }

  return true;
}
