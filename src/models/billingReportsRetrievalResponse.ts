/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  BillingReportsRetrievePayload,
  billingReportsRetrievePayloadSchema,
} from './billingReportsRetrievePayload';

export interface BillingReportsRetrievalResponse {
  billingReportsRetrievePayload?: BillingReportsRetrievePayload;
  reportStatus?: string;
  description?: string;
}

export const billingReportsRetrievalResponseSchema: Schema<BillingReportsRetrievalResponse> = object(
  {
    billingReportsRetrievePayload: [
      'billingReportsRetrievePayload',
      optional(lazy(() => billingReportsRetrievePayloadSchema)),
      { xmlName: 'BillingReportList' },
    ],
    reportStatus: [
      'reportStatus',
      optional(string()),
      { xmlName: 'ReportStatus' },
    ],
    description: [
      'description',
      optional(string()),
      { xmlName: 'Description' },
    ],
  }
);