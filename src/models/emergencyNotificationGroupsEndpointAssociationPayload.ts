/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  EmergencyNotificationGroupEndpointAssociationPayload,
  emergencyNotificationGroupEndpointAssociationPayloadSchema,
} from './emergencyNotificationGroupEndpointAssociationPayload';

export interface EmergencyNotificationGroupsEndpointAssociationPayload {
  payloadList?: EmergencyNotificationGroupEndpointAssociationPayload[];
}

export const emergencyNotificationGroupsEndpointAssociationPayloadSchema: Schema<EmergencyNotificationGroupsEndpointAssociationPayload> = object(
  {
    payloadList: [
      'payloadList',
      optional(
        array(
          lazy(() => emergencyNotificationGroupEndpointAssociationPayloadSchema)
        )
      ),
      { xmlName: 'EmergencyNotificationEndpointOrder' },
    ],
  }
);