// Original file: proto/user.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { NullValue as _users_NullValue, NullValue__Output as _users_NullValue__Output } from '../users/NullValue';

export interface GetUserByEmailResponse {
  'user'?: (_users_User | null);
  'null'?: (_users_NullValue | null);
  'userOrNull'?: "user"|"null";
}

export interface GetUserByEmailResponse__Output {
  'user'?: (_users_User__Output);
  'null'?: (_users_NullValue__Output);
}
