/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import { Hosts, hostsSchema } from './hosts';

export interface SipPeerHost {
  sipPeerId?: number;
  smsHosts?: Hosts;
  voiceHosts?: Hosts;
  terminationHosts?: Hosts;
}

export const sipPeerHostSchema: Schema<SipPeerHost> = object({
  sipPeerId: ['sipPeerId', optional(number()), { xmlName: 'SipPeerId' }],
  smsHosts: [
    'smsHosts',
    optional(lazy(() => hostsSchema)),
    { xmlName: 'SmsHosts' },
  ],
  voiceHosts: [
    'voiceHosts',
    optional(lazy(() => hostsSchema)),
    { xmlName: 'VoiceHosts' },
  ],
  terminationHosts: [
    'terminationHosts',
    optional(lazy(() => hostsSchema)),
    { xmlName: 'TerminationHosts' },
  ],
});