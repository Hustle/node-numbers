/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface EndpointResource {
  uriMethod?: string;
  uriPath?: string;
}

export const endpointResourceSchema: Schema<EndpointResource> = object({
  uriMethod: ['uriMethod', optional(string()), { xmlName: 'Method' }],
  uriPath: ['uriPath', optional(string()), { xmlName: 'Path' }],
});