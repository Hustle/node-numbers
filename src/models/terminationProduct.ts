/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  TerminationAttribute,
  terminationAttributeSchema,
} from './terminationAttribute';

export interface TerminationProduct {
  id?: number;
  name?: string;
  description?: string;
  attributes?: TerminationAttribute[];
}

export const terminationProductSchema: Schema<TerminationProduct> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  description: ['description', optional(string())],
  attributes: [
    'attributes',
    optional(
      array(
        lazy(() => terminationAttributeSchema),
        { xmlItemName: 'TerminationAttribute' }
      )
    ),
    { xmlName: 'TerminationAttributes' },
  ],
});