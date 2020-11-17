/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Payload15, payload15Schema } from './payload15';

export interface TerminationRoutingExceptionsResponse {
  payload?: Payload15;
}

export const terminationRoutingExceptionsResponseSchema: Schema<TerminationRoutingExceptionsResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => payload15Schema)),
      { xmlName: 'TerminationRoutingExceptions' },
    ],
  }
);