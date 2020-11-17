/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProcessingStatus5Enum
 */
export enum ProcessingStatus5Enum {
  RECEIVED = 'RECEIVED',
  PROCESSING = 'PROCESSING',
  COMPLETE = 'COMPLETE',
  PARTIAL = 'PARTIAL',
  FAILED = 'FAILED',
}

/**
 * Schema for ProcessingStatus5Enum
 */
export const processingStatus5EnumSchema: Schema<ProcessingStatus5Enum> = stringEnum(ProcessingStatus5Enum);