/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Products, productsSchema } from './products';

export interface ProductsResponse {
  payload?: Products;
}

export const productsResponseSchema: Schema<ProductsResponse> = object({
  payload: [
    'payload',
    optional(lazy(() => productsSchema)),
    { xmlName: 'Products' },
  ],
});