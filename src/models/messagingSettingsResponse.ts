/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  MessagingSettings,
  messagingSettingsSchema,
} from './messagingSettings';

export interface MessagingSettingsResponse {
  payload?: MessagingSettings;
}

export const messagingSettingsResponseSchema: Schema<MessagingSettingsResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => messagingSettingsSchema)),
      { xmlName: 'MessagingSettings' },
    ],
  }
);