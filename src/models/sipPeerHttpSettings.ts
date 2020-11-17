/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SipPeerHttpSettings {
  applicationId?: string;
}

export const sipPeerHttpSettingsSchema: Schema<SipPeerHttpSettings> = object({
  applicationId: [
    'applicationId',
    optional(string()),
    { xmlName: 'HttpVoiceV2AppId' },
  ],
});