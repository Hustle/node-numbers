/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  TnPortOutPasscodePayload,
  tnPortOutPasscodePayloadSchema,
} from './tnPortOutPasscodePayload';

export interface TnPortOutPasscodesPayload {
  tnPortOutPasscodes?: TnPortOutPasscodePayload[];
}

export const tnPortOutPasscodesPayloadSchema: Schema<TnPortOutPasscodesPayload> = object(
  {
    tnPortOutPasscodes: [
      'tnPortOutPasscodes',
      optional(array(lazy(() => tnPortOutPasscodePayloadSchema))),
      { xmlName: 'TelephoneNumber' },
    ],
  }
);