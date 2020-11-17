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
  RoutingExceptionPrefix,
  routingExceptionPrefixSchema,
} from './routingExceptionPrefix';

export interface TerminationRoutingException {
  id?: number;
  routingExceptionName?: string;
  routingExceptions?: RoutingExceptionPrefix[];
}

export const terminationRoutingExceptionSchema: Schema<TerminationRoutingException> = object(
  {
    id: ['id', optional(number())],
    routingExceptionName: ['routingExceptionName', optional(string())],
    routingExceptions: [
      'routingExceptions',
      optional(
        array(
          lazy(() => routingExceptionPrefixSchema),
          { xmlItemName: 'RoutingExceptionPrefix' }
        )
      ),
      { xmlName: 'RoutingExceptionPrefixes' },
    ],
  }
);