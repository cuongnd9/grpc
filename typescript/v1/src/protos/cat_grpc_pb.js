// GENERATED CODE -- DO NOT EDIT!

'use strict';
var cat_pb = require('./cat_pb.js');

function serialize_v1_CreateRequest(arg) {
  if (!(arg instanceof cat_pb.CreateRequest)) {
    throw new Error('Expected argument of type v1.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_CreateRequest(buffer_arg) {
  return cat_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_CreateResponse(arg) {
  if (!(arg instanceof cat_pb.CreateResponse)) {
    throw new Error('Expected argument of type v1.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_CreateResponse(buffer_arg) {
  return cat_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_DeleteRequest(arg) {
  if (!(arg instanceof cat_pb.DeleteRequest)) {
    throw new Error('Expected argument of type v1.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_DeleteRequest(buffer_arg) {
  return cat_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_DeleteResponse(arg) {
  if (!(arg instanceof cat_pb.DeleteResponse)) {
    throw new Error('Expected argument of type v1.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_DeleteResponse(buffer_arg) {
  return cat_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_ReadAllRequest(arg) {
  if (!(arg instanceof cat_pb.ReadAllRequest)) {
    throw new Error('Expected argument of type v1.ReadAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_ReadAllRequest(buffer_arg) {
  return cat_pb.ReadAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_ReadAllResponse(arg) {
  if (!(arg instanceof cat_pb.ReadAllResponse)) {
    throw new Error('Expected argument of type v1.ReadAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_ReadAllResponse(buffer_arg) {
  return cat_pb.ReadAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_ReadRequest(arg) {
  if (!(arg instanceof cat_pb.ReadRequest)) {
    throw new Error('Expected argument of type v1.ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_ReadRequest(buffer_arg) {
  return cat_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_ReadResponse(arg) {
  if (!(arg instanceof cat_pb.ReadResponse)) {
    throw new Error('Expected argument of type v1.ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_ReadResponse(buffer_arg) {
  return cat_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_UpdateRequest(arg) {
  if (!(arg instanceof cat_pb.UpdateRequest)) {
    throw new Error('Expected argument of type v1.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_UpdateRequest(buffer_arg) {
  return cat_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_UpdateResponse(arg) {
  if (!(arg instanceof cat_pb.UpdateResponse)) {
    throw new Error('Expected argument of type v1.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_UpdateResponse(buffer_arg) {
  return cat_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CatServiceService = exports['v1.CatService'] = {
  readAll: {
    path: '/v1.CatService/ReadAll',
    requestStream: false,
    responseStream: false,
    requestType: cat_pb.ReadAllRequest,
    responseType: cat_pb.ReadAllResponse,
    requestSerialize: serialize_v1_ReadAllRequest,
    requestDeserialize: deserialize_v1_ReadAllRequest,
    responseSerialize: serialize_v1_ReadAllResponse,
    responseDeserialize: deserialize_v1_ReadAllResponse,
  },
  read: {
    path: '/v1.CatService/Read',
    requestStream: false,
    responseStream: false,
    requestType: cat_pb.ReadRequest,
    responseType: cat_pb.ReadResponse,
    requestSerialize: serialize_v1_ReadRequest,
    requestDeserialize: deserialize_v1_ReadRequest,
    responseSerialize: serialize_v1_ReadResponse,
    responseDeserialize: deserialize_v1_ReadResponse,
  },
  create: {
    path: '/v1.CatService/Create',
    requestStream: false,
    responseStream: false,
    requestType: cat_pb.CreateRequest,
    responseType: cat_pb.CreateResponse,
    requestSerialize: serialize_v1_CreateRequest,
    requestDeserialize: deserialize_v1_CreateRequest,
    responseSerialize: serialize_v1_CreateResponse,
    responseDeserialize: deserialize_v1_CreateResponse,
  },
  update: {
    path: '/v1.CatService/Update',
    requestStream: false,
    responseStream: false,
    requestType: cat_pb.UpdateRequest,
    responseType: cat_pb.UpdateResponse,
    requestSerialize: serialize_v1_UpdateRequest,
    requestDeserialize: deserialize_v1_UpdateRequest,
    responseSerialize: serialize_v1_UpdateResponse,
    responseDeserialize: deserialize_v1_UpdateResponse,
  },
  delete: {
    path: '/v1.CatService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: cat_pb.DeleteRequest,
    responseType: cat_pb.DeleteResponse,
    requestSerialize: serialize_v1_DeleteRequest,
    requestDeserialize: deserialize_v1_DeleteRequest,
    responseSerialize: serialize_v1_DeleteResponse,
    responseDeserialize: deserialize_v1_DeleteResponse,
  },
};

