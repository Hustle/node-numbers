/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface PortinLosingCarrierInfo {
  spid?: string;
  name?: string;
  wireless?: boolean;
  accountNumberRequired?: boolean;
  minRespTime?: number;
}

export const portinLosingCarrierInfoSchema: Schema<PortinLosingCarrierInfo> = object(
  {
    spid: ['spid', optional(string()), { xmlName: 'Spid' }],
    name: ['name', optional(string()), { xmlName: 'Name' }],
    wireless: ['wireless', optional(boolean()), { xmlName: 'Wireless' }],
    accountNumberRequired: [
      'accountNumberRequired',
      optional(boolean()),
      { xmlName: 'AccountNumberRequired' },
    ],
    minRespTime: [
      'minRespTime',
      optional(number()),
      { xmlName: 'MinimumPortingInterval' },
    ],
  }
);