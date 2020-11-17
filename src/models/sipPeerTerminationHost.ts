/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SipPeerTerminationHost {
  hostName?: string;
  port?: string;
  customerTraffic?: string;
}

export const sipPeerTerminationHostSchema: Schema<SipPeerTerminationHost> = object(
  {
    hostName: ['hostName', optional(string()), { xmlName: 'HostName' }],
    port: ['port', optional(string()), { xmlName: 'Port' }],
    customerTraffic: [
      'customerTraffic',
      optional(string()),
      { xmlName: 'CustomerTrafficAllowed' },
    ],
  }
);