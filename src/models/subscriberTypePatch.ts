/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface SubscriberTypePatch {
  delete?: boolean;
}

export const subscriberTypePatchSchema: Schema<SubscriberTypePatch> = object({
  delete: ['delete', optional(boolean()), { isAttr: true }],
});