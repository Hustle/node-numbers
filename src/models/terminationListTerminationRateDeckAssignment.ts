/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface TerminationListTerminationRateDeckAssignment {
  empty?: boolean;
}

export const terminationListTerminationRateDeckAssignmentSchema: Schema<TerminationListTerminationRateDeckAssignment> = object(
  { empty: ['empty', optional(boolean())] }
);