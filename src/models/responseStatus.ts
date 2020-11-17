/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ResponseStatus {
  errorCode?: number;
  description?: string;
}

export const responseStatusSchema: Schema<ResponseStatus> = object({
  errorCode: ['errorCode', optional(number()), { xmlName: 'ErrorCode' }],
  description: ['description', optional(string()), { xmlName: 'Description' }],
});