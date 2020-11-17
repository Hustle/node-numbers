/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface LineOptionOrderWarningPayload {
  telephoneNumber?: string;
  description?: string;
}

export const lineOptionOrderWarningPayloadSchema: Schema<LineOptionOrderWarningPayload> = object(
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