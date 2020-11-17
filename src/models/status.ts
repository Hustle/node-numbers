/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Status {
  description?: string;
  code?: number;
}

export const statusSchema: Schema<Status> = object({
  description: ['description', optional(string()), { xmlName: 'Description' }],
  code: ['code', optional(number()), { xmlName: 'Code' }],
});