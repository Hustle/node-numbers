/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  TerminationProduct,
  terminationProductSchema,
} from './terminationProduct';

export interface TerminationProductAttributeResponse {
  payload?: TerminationProduct;
}

export const terminationProductAttributeResponseSchema: Schema<TerminationProductAttributeResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => terminationProductSchema)),
      { xmlName: 'TerminationProduct' },
    ],
  }
);