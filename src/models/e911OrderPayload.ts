/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { E911Address, e911AddressSchema } from './e911Address';
import {
  E911AlternateEndUserIdentifier,
  e911AlternateEndUserIdentifierSchema,
} from './e911AlternateEndUserIdentifier';
import { GroupErrorObject, groupErrorObjectSchema } from './groupErrorObject';
import {
  ProcessingStatus3Enum,
  processingStatus3EnumSchema,
} from './processingStatus3Enum';

export interface E911OrderPayload {
  id?: string;
  accountId?: number;
  name?: string;
  lastModifiedDateInUtc?: string;
  lastModifiedBy?: string;
  createdByUser?: string;
  customerOrderId?: string;
  siteId?: number;
  peerId?: number;
  orderCreateDate?: string;
  callerName?: string;
  processingStatus?: ProcessingStatus3Enum;
  telephoneNumbers?: string[];
  alternateEndUserIdentifiers?: E911AlternateEndUserIdentifier[];
  address?: E911Address;
  additionalAddresses?: E911Address[];
  locationId?: string;
  errors?: GroupErrorObject[];
  e911OrderType?: string;
  revertToSipPeerAddress?: boolean;
}

export const e911OrderPayloadSchema: Schema<E911OrderPayload> = object({
  id: ['id', optional(string()), { xmlName: 'OrderId' }],
  accountId: ['accountId', optional(number()), { xmlName: 'AccountId' }],
  name: ['name', optional(string()), { xmlName: 'Name' }],
  lastModifiedDateInUtc: [
    'lastModifiedDateInUtc',
    optional(string()),
    { xmlName: 'LastModifiedDate' },
  ],
  lastModifiedBy: [
    'lastModifiedBy',
    optional(string()),
    { xmlName: 'LastModifiedBy' },
  ],
  createdByUser: [
    'createdByUser',
    optional(string()),
    { xmlName: 'CreatedByUser' },
  ],
  customerOrderId: [
    'customerOrderId',
    optional(string()),
    { xmlName: 'CustomerOrderId' },
  ],
  siteId: ['siteId', optional(number()), { xmlName: 'SiteId' }],
  peerId: ['peerId', optional(number()), { xmlName: 'PeerId' }],
  orderCreateDate: [
    'orderCreateDate',
    optional(string()),
    { xmlName: 'OrderCreateDate' },
  ],
  callerName: ['callerName', optional(string()), { xmlName: 'CallerName' }],
  processingStatus: [
    'processingStatus',
    optional(processingStatus3EnumSchema),
    { xmlName: 'ProcessingStatus' },
  ],
  telephoneNumbers: [
    'telephoneNumbers',
    optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
    { xmlName: 'TelephoneNumbers' },
  ],
  alternateEndUserIdentifiers: [
    'alternateEndUserIdentifiers',
    optional(
      array(
        lazy(() => e911AlternateEndUserIdentifierSchema),
        { xmlItemName: 'E911AlternateEndUserIdentifier' }
      )
    ),
    { xmlName: 'AlternateEndUserIdentifiers' },
  ],
  address: [
    'address',
    optional(lazy(() => e911AddressSchema)),
    { xmlName: 'Address' },
  ],
  additionalAddresses: [
    'additionalAddresses',
    optional(
      array(lazy(() => e911AddressSchema), { xmlItemName: 'E911Address' })
    ),
    { xmlName: 'AdditionalAddresses' },
  ],
  locationId: ['locationId', optional(string()), { xmlName: 'LocationId' }],
  errors: [
    'errors',
    optional(
      array(
        lazy(() => groupErrorObjectSchema),
        { xmlItemName: 'GroupErrorObject' }
      )
    ),
    { xmlName: 'ErrorList' },
  ],
  e911OrderType: [
    'e911OrderType',
    optional(string()),
    { xmlName: 'OrderType' },
  ],
  revertToSipPeerAddress: [
    'revertToSipPeerAddress',
    optional(boolean()),
    { xmlName: 'DeleteTNSpecificE911Address' },
  ],
});