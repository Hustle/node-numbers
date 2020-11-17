/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { Endpoint, endpointSchema } from './endpoint';

export interface EndpointResponse {
  resourceCount?: number;
  endpoints?: Endpoint[];
}

export const endpointResponseSchema: Schema<EndpointResponse> = object({
  resourceCount: [
    'resourceCount',
    optional(number()),
    { xmlName: 'ResourceCount' },
  ],
  endpoints: [
    'endpoints',
    optional(array(lazy(() => endpointSchema), { xmlItemName: 'Endpoint' })),
    { xmlName: 'Endpoints' },
  ],
});