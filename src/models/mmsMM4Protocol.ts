/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { MmsMM4OrigHosts, mmsMM4OrigHostsSchema } from './mmsMM4OrigHosts';
import { MmsMM4TermHosts, mmsMM4TermHostsSchema } from './mmsMM4TermHosts';

export interface MmsMM4Protocol {
  tls?: string;
  termHosts?: MmsMM4TermHosts;
  origHosts?: MmsMM4OrigHosts;
}

export const mmsMM4ProtocolSchema: Schema<MmsMM4Protocol> = object({
  tls: ['tls', optional(string()), { xmlName: 'Tls' }],
  termHosts: [
    'termHosts',
    optional(lazy(() => mmsMM4TermHostsSchema)),
    { xmlName: 'MmsMM4TermHosts' },
  ],
  origHosts: [
    'origHosts',
    optional(lazy(() => mmsMM4OrigHostsSchema)),
    { xmlName: 'MmsMM4OrigHosts' },
  ],
});