/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { MessagingRoute, messagingRouteSchema } from './messagingRoute';

export interface MessagingRoutes {
  routes?: MessagingRoute[];
}

export const messagingRoutesSchema: Schema<MessagingRoutes> = object({
  routes: [
    'routes',
    optional(array(lazy(() => messagingRouteSchema))),
    { xmlName: 'MessagingRoute' },
  ],
});