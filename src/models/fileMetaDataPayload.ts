/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { DocumentTypeEnum, documentTypeEnumSchema } from './documentTypeEnum';

export interface FileMetaDataPayload {
  documentName?: string;
  documentType?: DocumentTypeEnum;
}

export const fileMetaDataPayloadSchema: Schema<FileMetaDataPayload> = object({
  documentName: [
    'documentName',
    optional(string()),
    { xmlName: 'DocumentName' },
  ],
  documentType: [
    'documentType',
    optional(documentTypeEnumSchema),
    { xmlName: 'DocumentType' },
  ],
});