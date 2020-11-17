/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Payload, payloadSchema } from './payload';

export interface AccountsResponse {
  payload?: Payload;
}

export const accountsResponseSchema: Schema<AccountsResponse> = object({
  payload: [
    'payload',
    optional(lazy(() => payloadSchema)),
    { xmlName: 'TerminationAccountList' },
  ],
});