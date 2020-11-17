/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ApplicationPayload,
  applicationPayloadSchema,
} from './applicationPayload';

export interface ApplicationResponse {
  payload?: ApplicationPayload;
}

export const applicationResponseSchema: Schema<ApplicationResponse> = object({
  payload: [
    'payload',
    optional(lazy(() => applicationPayloadSchema)),
    { xmlName: 'Application' },
  ],
});