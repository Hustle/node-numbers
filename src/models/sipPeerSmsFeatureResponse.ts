/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SipPeerSmsFeature,
  sipPeerSmsFeatureSchema,
} from './sipPeerSmsFeature';

export interface SipPeerSmsFeatureResponse {
  payload?: SipPeerSmsFeature;
}

export const sipPeerSmsFeatureResponseSchema: Schema<SipPeerSmsFeatureResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => sipPeerSmsFeatureSchema)),
      { xmlName: 'SipPeerSmsFeature' },
    ],
  }
);