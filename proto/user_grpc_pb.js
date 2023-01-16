// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_user_pb = require('../proto/user_pb.js');

function serialize_users_CreateUserRequest(arg) {
  if (!(arg instanceof proto_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type users.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CreateUserRequest(buffer_arg) {
  return proto_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_CreateUserResponse(arg) {
  if (!(arg instanceof proto_user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type users.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CreateUserResponse(buffer_arg) {
  return proto_user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteUserRequest(arg) {
  if (!(arg instanceof proto_user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type users.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteUserRequest(buffer_arg) {
  return proto_user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteUserResponse(arg) {
  if (!(arg instanceof proto_user_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type users.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteUserResponse(buffer_arg) {
  return proto_user_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_EditUserRequest(arg) {
  if (!(arg instanceof proto_user_pb.EditUserRequest)) {
    throw new Error('Expected argument of type users.EditUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_EditUserRequest(buffer_arg) {
  return proto_user_pb.EditUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_EditUserResponse(arg) {
  if (!(arg instanceof proto_user_pb.EditUserResponse)) {
    throw new Error('Expected argument of type users.EditUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_EditUserResponse(buffer_arg) {
  return proto_user_pb.EditUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_Empty(arg) {
  if (!(arg instanceof proto_user_pb.Empty)) {
    throw new Error('Expected argument of type users.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_Empty(buffer_arg) {
  return proto_user_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetUserByEmailRequest(arg) {
  if (!(arg instanceof proto_user_pb.GetUserByEmailRequest)) {
    throw new Error('Expected argument of type users.GetUserByEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetUserByEmailRequest(buffer_arg) {
  return proto_user_pb.GetUserByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetUserByEmailResponse(arg) {
  if (!(arg instanceof proto_user_pb.GetUserByEmailResponse)) {
    throw new Error('Expected argument of type users.GetUserByEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetUserByEmailResponse(buffer_arg) {
  return proto_user_pb.GetUserByEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UsersList(arg) {
  if (!(arg instanceof proto_user_pb.UsersList)) {
    throw new Error('Expected argument of type users.UsersList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UsersList(buffer_arg) {
  return proto_user_pb.UsersList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getAllUsers: {
    path: '/users.UserService/getAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.Empty,
    responseType: proto_user_pb.UsersList,
    requestSerialize: serialize_users_Empty,
    requestDeserialize: deserialize_users_Empty,
    responseSerialize: serialize_users_UsersList,
    responseDeserialize: deserialize_users_UsersList,
  },
  getUserByEmail: {
    path: '/users.UserService/getUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.GetUserByEmailRequest,
    responseType: proto_user_pb.GetUserByEmailResponse,
    requestSerialize: serialize_users_GetUserByEmailRequest,
    requestDeserialize: deserialize_users_GetUserByEmailRequest,
    responseSerialize: serialize_users_GetUserByEmailResponse,
    responseDeserialize: deserialize_users_GetUserByEmailResponse,
  },
  createUser: {
    path: '/users.UserService/createUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.CreateUserRequest,
    responseType: proto_user_pb.CreateUserResponse,
    requestSerialize: serialize_users_CreateUserRequest,
    requestDeserialize: deserialize_users_CreateUserRequest,
    responseSerialize: serialize_users_CreateUserResponse,
    responseDeserialize: deserialize_users_CreateUserResponse,
  },
  editUserByEmail: {
    path: '/users.UserService/editUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.EditUserRequest,
    responseType: proto_user_pb.EditUserResponse,
    requestSerialize: serialize_users_EditUserRequest,
    requestDeserialize: deserialize_users_EditUserRequest,
    responseSerialize: serialize_users_EditUserResponse,
    responseDeserialize: deserialize_users_EditUserResponse,
  },
  deleteUserByEmail: {
    path: '/users.UserService/deleteUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.DeleteUserRequest,
    responseType: proto_user_pb.DeleteUserResponse,
    requestSerialize: serialize_users_DeleteUserRequest,
    requestDeserialize: deserialize_users_DeleteUserRequest,
    responseSerialize: serialize_users_DeleteUserResponse,
    responseDeserialize: deserialize_users_DeleteUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
