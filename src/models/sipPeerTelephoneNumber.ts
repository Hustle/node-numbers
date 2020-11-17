/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  MessagingSettings,
  messagingSettingsSchema,
} from './messagingSettings';
import {
  SipPeerTelephoneNumberWarningPayload,
  sipPeerTelephoneNumberWarningPayloadSchema,
} from './sipPeerTelephoneNumberWarningPayload';
import { TelephoneNumber, telephoneNumberSchema } from './telephoneNumber';

export interface SipPeerTelephoneNumber {
  fullNumber?: TelephoneNumber;
  numberFormat?: string;
  rpidFormat?: string;
  rewriteUser?: string;
  callForward?: TelephoneNumber;
  finalDestinationUri?: string;
  cnamLookup?: string;
  tnAttributes?: string[];
  messagingSettings?: MessagingSettings;
  portOutPasscode?: string;
  routePlanId?: string;
  warnings?: SipPeerTelephoneNumberWarningPayload[];
}

export const sipPeerTelephoneNumberSchema: Schema<SipPeerTelephoneNumber> = object(
  {
    fullNumber: [
      'fullNumber',
      optional(lazy(() => telephoneNumberSchema)),
      { xmlName: 'FullNumber' },
    ],
    numberFormat: [
      'numberFormat',
      optional(string()),
      { xmlName: 'NumberFormat' },
    ],
    rpidFormat: ['rpidFormat', optional(string()), { xmlName: 'RPIDFormat' }],
    rewriteUser: [
      'rewriteUser',
      optional(string()),
      { xmlName: 'RewriteUser' },
    ],
    callForward: [
      'callForward',
      optional(lazy(() => telephoneNumberSchema)),
      { xmlName: 'CallForward' },
    ],
    finalDestinationUri: [
      'finalDestinationUri',
      optional(string()),
      { xmlName: 'FinalDestinationURI' },
    ],
    cnamLookup: [
      'cnamLookup',
      optional(string()),
      { xmlName: 'CallingNameDisplay' },
    ],
    tnAttributes: [
      'tnAttributes',
      optional(array(string(), { xmlItemName: 'TnAttribute' })),
      { xmlName: 'TnAttributes' },
    ],
    messagingSettings: [
      'messagingSettings',
      optional(lazy(() => messagingSettingsSchema)),
      { xmlName: 'MessagingSettings' },
    ],
    portOutPasscode: [
      'portOutPasscode',
      optional(string()),
      { xmlName: 'PortOutPasscode' },
    ],
    routePlanId: [
      'routePlanId',
      optional(string()),
      { xmlName: 'RoutePlanId' },
    ],
    warnings: [
      'warnings',
      optional(
        array(
          lazy(() => sipPeerTelephoneNumberWarningPayloadSchema),
          { xmlItemName: 'Warning' }
        )
      ),
      { xmlName: 'Warnings' },
    ],
  }
);