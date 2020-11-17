/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface LdapAccount {
  id?: number;
  name?: string;
}

export const ldapAccountSchema: Schema<LdapAccount> = object({
  id: ['id', optional(number()), { xmlName: 'AccountId' }],
  name: ['name', optional(string()), { xmlName: 'AccountName' }],
});