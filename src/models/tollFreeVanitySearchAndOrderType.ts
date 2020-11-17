/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface TollFreeVanitySearchAndOrderType {
  vanity?: string;
  quantity?: number;
}

export const tollFreeVanitySearchAndOrderTypeSchema: Schema<TollFreeVanitySearchAndOrderType> = object(
  {
    vanity: ['vanity', optional(string()), { xmlName: 'TollFreeVanity' }],
    quantity: ['quantity', optional(number()), { xmlName: 'Quantity' }],
  }
);