/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  TerminationAttributesWrapper,
  terminationAttributesWrapperSchema,
} from './terminationAttributesWrapper';

export interface TerminationAttributesResponse {
  payload?: TerminationAttributesWrapper;
}

export const terminationAttributesResponseSchema: Schema<TerminationAttributesResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => terminationAttributesWrapperSchema)),
      { xmlName: 'TerminationAttributesWrapper' },
    ],
  }
);