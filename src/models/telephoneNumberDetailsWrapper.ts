/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  OrderDetailsReport,
  orderDetailsReportSchema,
} from './orderDetailsReport';

export interface TelephoneNumberDetailsWrapper {
  states?: OrderDetailsReport[];
  rateCenters?: OrderDetailsReport[];
  cities?: OrderDetailsReport[];
  tiers?: OrderDetailsReport[];
  vendors?: OrderDetailsReport[];
}

export const telephoneNumberDetailsWrapperSchema: Schema<TelephoneNumberDetailsWrapper> = object(
  {
    states: [
      'States',
      optional(
        array(
          lazy(() => orderDetailsReportSchema),
          { xmlItemName: 'TelephoneDetailsReport' }
        )
      ),
    ],
    rateCenters: [
      'RateCenters',
      optional(
        array(
          lazy(() => orderDetailsReportSchema),
          { xmlItemName: 'TelephoneDetailsReport' }
        )
      ),
    ],
    cities: [
      'Cities',
      optional(
        array(
          lazy(() => orderDetailsReportSchema),
          { xmlItemName: 'TelephoneDetailsReport' }
        )
      ),
    ],
    tiers: [
      'Tiers',
      optional(
        array(
          lazy(() => orderDetailsReportSchema),
          { xmlItemName: 'TelephoneDetailsReport' }
        )
      ),
    ],
    vendors: [
      'Vendors',
      optional(
        array(
          lazy(() => orderDetailsReportSchema),
          { xmlItemName: 'TelephoneDetailsReport' }
        )
      ),
    ],
  }
);