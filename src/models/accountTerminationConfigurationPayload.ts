/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  LegacyTerminationConfigurationPayload,
  legacyTerminationConfigurationPayloadSchema,
} from './legacyTerminationConfigurationPayload';
import {
  RogerTerminationConfigurationPayload,
  rogerTerminationConfigurationPayloadSchema,
} from './rogerTerminationConfigurationPayload';
import {
  RogerUsedForTerminationSettingsEnum,
  rogerUsedForTerminationSettingsEnumSchema,
} from './rogerUsedForTerminationSettingsEnum';

export interface AccountTerminationConfigurationPayload {
  rogerUsedForTerminationSettings?: RogerUsedForTerminationSettingsEnum;
  httpVoiceProxyTermHost?: string;
  legacyTerminationConfiguration?: LegacyTerminationConfigurationPayload;
  rogerTerminationConfiguration?: RogerTerminationConfigurationPayload;
}

export const accountTerminationConfigurationPayloadSchema: Schema<AccountTerminationConfigurationPayload> = object(
  {
    rogerUsedForTerminationSettings: [
      'rogerUsedForTerminationSettings',
      optional(rogerUsedForTerminationSettingsEnumSchema),
      { xmlName: 'RogerUsedForTerminationSettings' },
    ],
    httpVoiceProxyTermHost: [
      'httpVoiceProxyTermHost',
      optional(string()),
      { xmlName: 'HttpVoiceProxyTermHost' },
    ],
    legacyTerminationConfiguration: [
      'legacyTerminationConfiguration',
      optional(lazy(() => legacyTerminationConfigurationPayloadSchema)),
      { xmlName: 'LegacyTerminationSettings' },
    ],
    rogerTerminationConfiguration: [
      'rogerTerminationConfiguration',
      optional(lazy(() => rogerTerminationConfigurationPayloadSchema)),
      { xmlName: 'RogerTerminationSettings' },
    ],
  }
);