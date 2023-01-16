// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _users_CreateUserRequest, CreateUserRequest__Output as _users_CreateUserRequest__Output } from '../users/CreateUserRequest';
import type { CreateUserResponse as _users_CreateUserResponse, CreateUserResponse__Output as _users_CreateUserResponse__Output } from '../users/CreateUserResponse';
import type { DeleteUserRequest as _users_DeleteUserRequest, DeleteUserRequest__Output as _users_DeleteUserRequest__Output } from '../users/DeleteUserRequest';
import type { DeleteUserResponse as _users_DeleteUserResponse, DeleteUserResponse__Output as _users_DeleteUserResponse__Output } from '../users/DeleteUserResponse';
import type { EditUserRequest as _users_EditUserRequest, EditUserRequest__Output as _users_EditUserRequest__Output } from '../users/EditUserRequest';
import type { EditUserResponse as _users_EditUserResponse, EditUserResponse__Output as _users_EditUserResponse__Output } from '../users/EditUserResponse';
import type { Empty as _users_Empty, Empty__Output as _users_Empty__Output } from '../users/Empty';
import type { GetUserByEmailRequest as _users_GetUserByEmailRequest, GetUserByEmailRequest__Output as _users_GetUserByEmailRequest__Output } from '../users/GetUserByEmailRequest';
import type { GetUserByEmailResponse as _users_GetUserByEmailResponse, GetUserByEmailResponse__Output as _users_GetUserByEmailResponse__Output } from '../users/GetUserByEmailResponse';
import type { UsersList as _users_UsersList, UsersList__Output as _users_UsersList__Output } from '../users/UsersList';

export interface UserServiceClient extends grpc.Client {
  createUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  
  deleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  editUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  
  getAllUsers(argument: _users_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_Empty, callback: grpc.requestCallback<_users_UsersList__Output>): grpc.ClientUnaryCall;
  
  getUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<_users_CreateUserRequest__Output, _users_CreateUserResponse>;
  
  deleteUserByEmail: grpc.handleUnaryCall<_users_DeleteUserRequest__Output, _users_DeleteUserResponse>;
  
  editUserByEmail: grpc.handleUnaryCall<_users_EditUserRequest__Output, _users_EditUserResponse>;
  
  getAllUsers: grpc.handleUnaryCall<_users_Empty__Output, _users_UsersList>;
  
  getUserByEmail: grpc.handleUnaryCall<_users_GetUserByEmailRequest__Output, _users_GetUserByEmailResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  createUser: MethodDefinition<_users_CreateUserRequest, _users_CreateUserResponse, _users_CreateUserRequest__Output, _users_CreateUserResponse__Output>
  deleteUserByEmail: MethodDefinition<_users_DeleteUserRequest, _users_DeleteUserResponse, _users_DeleteUserRequest__Output, _users_DeleteUserResponse__Output>
  editUserByEmail: MethodDefinition<_users_EditUserRequest, _users_EditUserResponse, _users_EditUserRequest__Output, _users_EditUserResponse__Output>
  getAllUsers: MethodDefinition<_users_Empty, _users_UsersList, _users_Empty__Output, _users_UsersList__Output>
  getUserByEmail: MethodDefinition<_users_GetUserByEmailRequest, _users_GetUserByEmailResponse, _users_GetUserByEmailRequest__Output, _users_GetUserByEmailResponse__Output>
}
