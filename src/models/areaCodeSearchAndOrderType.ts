/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface AreaCodeSearchAndOrderType {
  npa?: string;
  quantity?: number;
}

export const areaCodeSearchAndOrderTypeSchema: Schema<AreaCodeSearchAndOrderType> = object(
  {
    npa: ['npa', optional(string()), { xmlName: 'AreaCode' }],
    quantity: ['quantity', optional(number()), { xmlName: 'Quantity' }],
  }
);