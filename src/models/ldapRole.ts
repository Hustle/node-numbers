/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { LdapPermission, ldapPermissionSchema } from './ldapPermission';
import { LdapPermissions, ldapPermissionsSchema } from './ldapPermissions';

export interface LdapRole {
  id?: number;
  version?: number;
  roleId?: string;
  name?: string;
  description?: string;
  internal?: boolean;
  customerVisible?: boolean;
  permissions?: LdapPermissions;
  permissionIdList?: string[];
  firstPermission?: LdapPermission;
  new?: boolean;
}

export const ldapRoleSchema: Schema<LdapRole> = object({
  id: ['id', optional(number())],
  version: ['version', optional(number())],
  roleId: ['roleId', optional(string()), { xmlName: 'RoleId' }],
  name: ['name', optional(string()), { xmlName: 'RoleSimpleName' }],
  description: [
    'description',
    optional(string()),
    { xmlName: 'RoleDescription' },
  ],
  internal: ['internal', optional(boolean()), { xmlName: 'Internal' }],
  customerVisible: [
    'customerVisible',
    optional(boolean()),
    { xmlName: 'CustomerVisible' },
  ],
  permissions: [
    'permissions',
    optional(lazy(() => ldapPermissionsSchema)),
    { xmlName: 'PermissionList' },
  ],
  permissionIdList: ['permissionIdList', optional(array(string()))],
  firstPermission: [
    'firstPermission',
    optional(lazy(() => ldapPermissionSchema)),
    { xmlName: 'Permission' },
  ],
  new: ['new', optional(boolean())],
});