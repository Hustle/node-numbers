/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, unknown } from '../schema';

export interface AccountSearchResponse {
  payload?: unknown;
}

export const accountSearchResponseSchema: Schema<AccountSearchResponse> = object(
  { payload: ['payload', optional(unknown()), { xmlName: 'AccountsSearch' }] }
);