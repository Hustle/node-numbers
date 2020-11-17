/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface Value {
  id?: string;
  display?: string;
  active?: boolean;
}

export const valueSchema: Schema<Value> = object({
  id: ['id', optional(string()), { xmlName: 'Id' }],
  display: ['display', optional(string()), { xmlName: 'Display' }],
  active: ['active', optional(boolean()), { xmlName: 'Active' }],
});