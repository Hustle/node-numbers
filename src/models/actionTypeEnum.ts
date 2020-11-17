/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ActionTypeEnum
 */
export enum ActionTypeEnum {
  DELETE = 'DELETE',
  GENERATE = 'GENERATE',
  GENERATEDAILY = 'GENERATE_DAILY',
}

/**
 * Schema for ActionTypeEnum
 */
export const actionTypeEnumSchema: Schema<ActionTypeEnum> = stringEnum(ActionTypeEnum);