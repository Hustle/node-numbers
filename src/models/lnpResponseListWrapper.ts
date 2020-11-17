/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import {
  LnpResponseWrapper,
  lnpResponseWrapperSchema,
} from './lnpResponseWrapper';
import { PaginationLinks, paginationLinksSchema } from './paginationLinks';

export interface LnpResponseListWrapper {
  totalCount?: number;
  paginationLinks?: PaginationLinks;
  lnpPortInfoForGivenStatus?: LnpResponseWrapper[];
}

export const lnpResponseListWrapperSchema: Schema<LnpResponseListWrapper> = object(
  {
    totalCount: ['totalCount', optional(number()), { xmlName: 'TotalCount' }],
    paginationLinks: [
      'paginationLinks',
      optional(lazy(() => paginationLinksSchema)),
      { xmlName: 'Links' },
    ],
    lnpPortInfoForGivenStatus: [
      'lnpPortInfoForGivenStatus',
      optional(array(lazy(() => lnpResponseWrapperSchema))),
      { xmlName: 'LNPPortInfoForGivenStatus' },
    ],
  }
);