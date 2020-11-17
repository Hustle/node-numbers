/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DigestRequestedEnum
 */
export enum DigestRequestedEnum {
  None = 'none',
  Daily = 'daily',
}

/**
 * Schema for DigestRequestedEnum
 */
export const digestRequestedEnumSchema: Schema<DigestRequestedEnum> = stringEnum(DigestRequestedEnum);