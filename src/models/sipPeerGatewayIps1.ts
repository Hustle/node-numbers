/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface SipPeerGatewayIps1 {
  empty?: boolean;
}

export const sipPeerGatewayIps1Schema: Schema<SipPeerGatewayIps1> = object({
  empty: ['empty', optional(boolean())],
});