// Original file: proto/user.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';

export interface EditUserRequest {
  'email'?: (string);
  'user'?: (_users_User | null);
}

export interface EditUserRequest__Output {
  'email'?: (string);
  'user'?: (_users_User__Output);
}
