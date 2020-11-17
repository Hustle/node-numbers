/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  BasicAuthenticationCredentials,
  basicAuthenticationCredentialsSchema,
} from './basicAuthenticationCredentials';

export interface CallbackCredentials {
  basicAuthenticationCredentials?: BasicAuthenticationCredentials;
  publicKey?: string;
}

export const callbackCredentialsSchema: Schema<CallbackCredentials> = object({
  basicAuthenticationCredentials: [
    'basicAuthenticationCredentials',
    optional(lazy(() => basicAuthenticationCredentialsSchema)),
    { xmlName: 'BasicAuthentication' },
  ],
  publicKey: ['publicKey', optional(string()), { xmlName: 'PublicKey' }],
});