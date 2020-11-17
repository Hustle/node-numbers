/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface TnOptionOrderWarningPayload {
  telephoneNumber?: string;
  description?: string;
}

export const tnOptionOrderWarningPayloadSchema: Schema<TnOptionOrderWarningPayload> = object(
  {
    telephoneNumber: [
      'telephoneNumber',
      optional(string()),
      { xmlName: 'TelephoneNumber' },
    ],
    description: [
      'description',
      optional(string()),
      { xmlName: 'Description' },
    ],
  }
);