/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import {
  TerminationAttribute,
  terminationAttributeSchema,
} from './terminationAttribute';

export interface TerminationAttributeWrapper {
  accountId?: number;
  attribute?: TerminationAttribute;
}

export const terminationAttributeWrapperSchema: Schema<TerminationAttributeWrapper> = object(
  {
    accountId: ['accountId', optional(number())],
    attribute: [
      'attribute',
      optional(lazy(() => terminationAttributeSchema)),
      { xmlName: 'TerminationAttribute' },
    ],
  }
);