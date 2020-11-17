/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { LdapUser, ldapUserSchema } from './ldapUser';

export interface UserProfileResponse {
  payload?: LdapUser;
}

export const userProfileResponseSchema: Schema<UserProfileResponse> = object({
  payload: [
    'payload',
    optional(lazy(() => ldapUserSchema)),
    { xmlName: 'User' },
  ],
});