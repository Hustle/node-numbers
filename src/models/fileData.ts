/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  FileMetaDataPayload,
  fileMetaDataPayloadSchema,
} from './fileMetaDataPayload';

export interface FileData {
  fileName?: string;
  fileMetaData?: FileMetaDataPayload;
}

export const fileDataSchema: Schema<FileData> = object({
  fileName: ['fileName', optional(string()), { xmlName: 'FileName' }],
  fileMetaData: [
    'fileMetaData',
    optional(lazy(() => fileMetaDataPayloadSchema)),
    { xmlName: 'FileMetaData' },
  ],
});