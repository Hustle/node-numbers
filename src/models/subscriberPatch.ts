/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema } from '../schema';
import { AddressPatch, addressPatchSchema } from './addressPatch';
import { StringPatch, stringPatchSchema } from './stringPatch';
import {
  SubscriberTypePatch,
  subscriberTypePatchSchema,
} from './subscriberTypePatch';

export interface SubscriberPatch {
  delete?: boolean;
  subscriberType?: SubscriberTypePatch;
  businessName?: StringPatch;
  firstName?: StringPatch;
  middleInitial?: StringPatch;
  lastName?: StringPatch;
  serviceAddress?: AddressPatch;
}

export const subscriberPatchSchema: Schema<SubscriberPatch> = object({
  delete: ['delete', optional(boolean()), { isAttr: true }],
  subscriberType: [
    'subscriberType',
    optional(lazy(() => subscriberTypePatchSchema)),
    { xmlName: 'SubscriberType' },
  ],
  businessName: [
    'businessName',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'BusinessName' },
  ],
  firstName: [
    'firstName',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'FirstName' },
  ],
  middleInitial: [
    'middleInitial',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'MiddleInitial' },
  ],
  lastName: [
    'lastName',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'LastName' },
  ],
  serviceAddress: [
    'serviceAddress',
    optional(lazy(() => addressPatchSchema)),
    { xmlName: 'ServiceAddress' },
  ],
});