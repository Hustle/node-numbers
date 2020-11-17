/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface TelephoneNumberTotalsHistory {
  count?: number;
}

export const telephoneNumberTotalsHistorySchema: Schema<TelephoneNumberTotalsHistory> = object(
  { count: ['count', optional(number()), { xmlName: 'Count' }] }
);