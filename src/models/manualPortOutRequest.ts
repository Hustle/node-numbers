/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { BulkPortout, bulkPortoutSchema } from './bulkPortout';
import {
  PortOutActionEnum,
  portOutActionEnumSchema,
} from './portOutActionEnum';

export interface ManualPortOutRequest {
  accountId?: number;
  pin: string;
  nnspid: string;
  telephoneNumber: string;
  focDate: string;
  portOutAction: PortOutActionEnum;
  bulkPortout?: BulkPortout;
  internalPortOut?: boolean;
  stringAccountId?: string;
}

export const manualPortOutRequestSchema: Schema<ManualPortOutRequest> = object({
  accountId: ['accountId', optional(number())],
  pin: ['pin', string(), { xmlName: 'Pin' }],
  nnspid: ['nnspid', string(), { xmlName: 'NewNetworkSPID' }],
  telephoneNumber: [
    'telephoneNumber',
    string(),
    { xmlName: 'TelephoneNumberToPort' },
  ],
  focDate: ['focDate', string(), { xmlName: 'FocDate' }],
  portOutAction: [
    'portOutAction',
    portOutActionEnumSchema,
    { xmlName: 'PortOutAction' },
  ],
  bulkPortout: [
    'bulkPortout',
    optional(lazy(() => bulkPortoutSchema)),
    { xmlName: 'BulkPortOut' },
  ],
  internalPortOut: ['internalPortOut', optional(boolean())],
  stringAccountId: ['stringAccountId', optional(string())],
});