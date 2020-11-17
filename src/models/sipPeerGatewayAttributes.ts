/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import {
  TerminationAttribute,
  terminationAttributeSchema,
} from './terminationAttribute';

export interface SipPeerGatewayAttributes {
  gatewayId?: number;
  attributes?: TerminationAttribute[];
}

export const sipPeerGatewayAttributesSchema: Schema<SipPeerGatewayAttributes> = object(
  {
    gatewayId: ['gatewayId', optional(number()), { xmlName: 'GatewayId' }],
    attributes: [
      'attributes',
      optional(
        array(
          lazy(() => terminationAttributeSchema),
          { xmlItemName: 'TerminationAttribute' }
        )
      ),
      { xmlName: 'GatewayAttributes' },
    ],
  }
);