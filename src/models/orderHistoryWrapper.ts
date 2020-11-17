/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { OrderHistory, orderHistorySchema } from './orderHistory';

export interface OrderHistoryWrapper {
  orderHistories?: OrderHistory[];
}

export const orderHistoryWrapperSchema: Schema<OrderHistoryWrapper> = object({
  orderHistories: [
    'orderHistories',
    optional(array(lazy(() => orderHistorySchema))),
    { xmlName: 'OrderHistory' },
  ],
});