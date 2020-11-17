/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AccountTerminationConfigurationPayload,
  accountTerminationConfigurationPayloadSchema,
} from './accountTerminationConfigurationPayload';

export interface AccountTerminationConfigurationResponse {
  payload?: AccountTerminationConfigurationPayload;
}

export const accountTerminationConfigurationResponseSchema: Schema<AccountTerminationConfigurationResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => accountTerminationConfigurationPayloadSchema)),
      { xmlName: 'TerminationSettings' },
    ],
  }
);