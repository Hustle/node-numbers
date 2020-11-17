/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import { AddressTypeEnum, addressTypeEnumSchema } from './addressTypeEnum';

export interface Address {
  id?: number;
  version?: number;
  housePrefix?: string;
  houseNo?: string;
  houseSuffix?: string;
  preDirectional?: string;
  streetName?: string;
  streetSuffix?: string;
  postDirectional?: string;
  addressLine2?: string;
  city?: string;
  regionId?: number;
  stateCode?: string;
  zip?: string;
  zip4?: string;
  county?: string;
  country?: string;
  addressType?: string;
  legacyAddressId?: string;
  legacyEntityId?: string;
  resetAddressFields?: boolean;
  latitude?: string;
  longitude?: string;
  addressTypeEnum?: AddressTypeEnum;
  countryWithoutDefault?: string;
  new?: boolean;
}

export const addressSchema: Schema<Address> = object({
  id: ['id', optional(number())],
  version: ['version', optional(number())],
  housePrefix: ['housePrefix', optional(string()), { xmlName: 'HousePrefix' }],
  houseNo: ['houseNo', optional(string()), { xmlName: 'HouseNumber' }],
  houseSuffix: ['houseSuffix', optional(string()), { xmlName: 'HouseSuffix' }],
  preDirectional: [
    'preDirectional',
    optional(string()),
    { xmlName: 'PreDirectional' },
  ],
  streetName: ['streetName', optional(string()), { xmlName: 'StreetName' }],
  streetSuffix: [
    'streetSuffix',
    optional(string()),
    { xmlName: 'StreetSuffix' },
  ],
  postDirectional: [
    'postDirectional',
    optional(string()),
    { xmlName: 'PostDirectional' },
  ],
  addressLine2: [
    'addressLine2',
    optional(string()),
    { xmlName: 'AddressLine2' },
  ],
  city: ['city', optional(string()), { xmlName: 'City' }],
  regionId: ['regionId', optional(number())],
  stateCode: ['stateCode', optional(string()), { xmlName: 'StateCode' }],
  zip: ['zip', optional(string()), { xmlName: 'Zip' }],
  zip4: ['zip4', optional(string()), { xmlName: 'PlusFour' }],
  county: ['county', optional(string()), { xmlName: 'County' }],
  country: ['country', optional(string()), { xmlName: 'Country' }],
  addressType: ['addressType', optional(string()), { xmlName: 'AddressType' }],
  legacyAddressId: ['legacyAddressId', optional(string())],
  legacyEntityId: ['legacyEntityId', optional(string())],
  resetAddressFields: [
    'resetAddressFields',
    optional(boolean()),
    { xmlName: 'ResetAddressFields' },
  ],
  latitude: ['latitude', optional(string()), { xmlName: 'Latitude' }],
  longitude: ['longitude', optional(string()), { xmlName: 'Longitude' }],
  addressTypeEnum: ['addressTypeEnum', optional(addressTypeEnumSchema)],
  countryWithoutDefault: ['countryWithoutDefault', optional(string())],
  new: ['new', optional(boolean())],
});