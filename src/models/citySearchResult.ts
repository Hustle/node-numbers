/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CitySearchResult {
  name?: string;
  abbreviation?: string;
  availableTelephoneNumberCount?: number;
}

export const citySearchResultSchema: Schema<CitySearchResult> = object({
  name: ['name', optional(string()), { xmlName: 'Name' }],
  abbreviation: [
    'abbreviation',
    optional(string()),
    { xmlName: 'RcAbbreviation' },
  ],
  availableTelephoneNumberCount: [
    'availableTelephoneNumberCount',
    optional(number()),
    { xmlName: 'AvailableTelephoneNumberCount' },
  ],
});