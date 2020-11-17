/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface CombinedSearchAndOrderType {
  npa?: string;
  npaNxx?: string;
  npaNxxBlock?: string;
  rateCenterAbbreviation?: string;
  lata?: string;
  city?: string;
  state?: string;
  zip?: string;
  localVanity?: string;
  endsIn?: boolean;
  quantity?: number;
}

export const combinedSearchAndOrderTypeSchema: Schema<CombinedSearchAndOrderType> = object(
  {
    npa: ['npa', optional(string()), { xmlName: 'AreaCode' }],
    npaNxx: ['npaNxx', optional(string()), { xmlName: 'NpaNxx' }],
    npaNxxBlock: ['npaNxxBlock', optional(string()), { xmlName: 'NpaNxxX' }],
    rateCenterAbbreviation: [
      'rateCenterAbbreviation',
      optional(string()),
      { xmlName: 'RateCenter' },
    ],
    lata: ['lata', optional(string()), { xmlName: 'LATA' }],
    city: ['city', optional(string()), { xmlName: 'City' }],
    state: ['state', optional(string()), { xmlName: 'State' }],
    zip: ['zip', optional(string()), { xmlName: 'Zip' }],
    localVanity: [
      'localVanity',
      optional(string()),
      { xmlName: 'LocalVanity' },
    ],
    endsIn: ['endsIn', optional(boolean()), { xmlName: 'EndsIn' }],
    quantity: ['quantity', optional(number()), { xmlName: 'Quantity' }],
  }
);