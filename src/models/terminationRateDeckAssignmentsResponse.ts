/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Payload2, payload2Schema } from './payload2';

export interface TerminationRateDeckAssignmentsResponse {
  payload?: Payload2;
}

export const terminationRateDeckAssignmentsResponseSchema: Schema<TerminationRateDeckAssignmentsResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => payload2Schema)),
      { xmlName: 'TerminationRateDeckAssignments' },
    ],
  }
);