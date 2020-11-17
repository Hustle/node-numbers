/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  BillingReportDateRange,
  billingReportDateRangeSchema,
} from './billingReportDateRange';

export interface BillingReportCreationPayload {
  reportType?: string;
  reportDateRange?: BillingReportDateRange;
}

export const billingReportCreationPayloadSchema: Schema<BillingReportCreationPayload> = object(
  {
    reportType: ['reportType', optional(string()), { xmlName: 'Type' }],
    reportDateRange: [
      'reportDateRange',
      optional(lazy(() => billingReportDateRangeSchema)),
      { xmlName: 'DateRange' },
    ],
  }
);