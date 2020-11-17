/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  TnsReprovisioningDto,
  tnsReprovisioningDtoSchema,
} from './tnsReprovisioningDto';

export interface TnsReprovisioningResponse {
  payload?: TnsReprovisioningDto;
}

export const tnsReprovisioningResponseSchema: Schema<TnsReprovisioningResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => tnsReprovisioningDtoSchema)),
      { xmlName: 'ReprovisionTnsResponse' },
    ],
  }
);