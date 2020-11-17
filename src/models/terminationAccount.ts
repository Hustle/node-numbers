/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface TerminationAccount {
  id?: number;
  externalAccountId?: number;
  lcrId?: number;
  core2Id?: number;
}

export const terminationAccountSchema: Schema<TerminationAccount> = object({
  id: ['id', optional(number())],
  externalAccountId: ['externalAccountId', optional(number())],
  lcrId: ['lcrId', optional(number())],
  core2Id: ['core2Id', optional(number())],
});