/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ImportBillingTypeEnum
 */
export enum ImportBillingTypeEnum {
  NOCHARGE = 'NOCHARGE',
  PORTIN = 'PORTIN',
  NEWNUMBER = 'NEWNUMBER',
  PROJECTPORT = 'PROJECTPORT',
}

/**
 * Schema for ImportBillingTypeEnum
 */
export const importBillingTypeEnumSchema: Schema<ImportBillingTypeEnum> = stringEnum(ImportBillingTypeEnum);