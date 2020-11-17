/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface LineOptionTelephoneNumberError {
  telephoneNumber?: string;
  code?: number;
  description?: string;
}

export const lineOptionTelephoneNumberErrorSchema: Schema<LineOptionTelephoneNumberError> = object(
  {
    telephoneNumber: [
      'telephoneNumber',
      optional(string()),
      { xmlName: 'TelephoneNumber' },
    ],
    code: ['code', optional(number()), { xmlName: 'ErrorCode' }],
    description: [
      'description',
      optional(string()),
      { xmlName: 'Description' },
    ],
  }
);