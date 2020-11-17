/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import { PaginationLinks, paginationLinksSchema } from './paginationLinks';
import { TelephoneNumbers, telephoneNumbersSchema } from './telephoneNumbers';

export interface AccountTelephoneNumbersHistoryResponse {
  payload?: TelephoneNumbers;
  paginationLinks?: PaginationLinks;
  totalCount?: number;
}

export const accountTelephoneNumbersHistoryResponseSchema: Schema<AccountTelephoneNumbersHistoryResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => telephoneNumbersSchema)),
      { xmlName: 'TelephoneNumbers' },
    ],
    paginationLinks: [
      'paginationLinks',
      optional(lazy(() => paginationLinksSchema)),
      { xmlName: 'Links' },
    ],
    totalCount: ['totalCount', optional(number()), { xmlName: 'TotalCount' }],
  }
);