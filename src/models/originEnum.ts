/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OriginEnum
 */
export enum OriginEnum {
  CORE2 = 'CORE2',
  LCR = 'LCR',
  BILLING = 'BILLING',
}

/**
 * Schema for OriginEnum
 */
export const originEnumSchema: Schema<OriginEnum> = stringEnum(OriginEnum);