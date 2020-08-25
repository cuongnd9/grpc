// package: v1
// file: cat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as cat_pb from "./cat_pb";

interface ICatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    readAll: ICatServiceService_IReadAll;
    read: ICatServiceService_IRead;
    create: ICatServiceService_ICreate;
    update: ICatServiceService_IUpdate;
    delete: ICatServiceService_IDelete;
}

interface ICatServiceService_IReadAll extends grpc.MethodDefinition<cat_pb.ReadAllRequest, cat_pb.ReadAllResponse> {
    path: string; // "/v1.CatService/ReadAll"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cat_pb.ReadAllRequest>;
    requestDeserialize: grpc.deserialize<cat_pb.ReadAllRequest>;
    responseSerialize: grpc.serialize<cat_pb.ReadAllResponse>;
    responseDeserialize: grpc.deserialize<cat_pb.ReadAllResponse>;
}
interface ICatServiceService_IRead extends grpc.MethodDefinition<cat_pb.ReadRequest, cat_pb.ReadResponse> {
    path: string; // "/v1.CatService/Read"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cat_pb.ReadRequest>;
    requestDeserialize: grpc.deserialize<cat_pb.ReadRequest>;
    responseSerialize: grpc.serialize<cat_pb.ReadResponse>;
    responseDeserialize: grpc.deserialize<cat_pb.ReadResponse>;
}
interface ICatServiceService_ICreate extends grpc.MethodDefinition<cat_pb.CreateRequest, cat_pb.CreateResponse> {
    path: string; // "/v1.CatService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cat_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<cat_pb.CreateRequest>;
    responseSerialize: grpc.serialize<cat_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<cat_pb.CreateResponse>;
}
interface ICatServiceService_IUpdate extends grpc.MethodDefinition<cat_pb.UpdateRequest, cat_pb.UpdateResponse> {
    path: string; // "/v1.CatService/Update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cat_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<cat_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<cat_pb.UpdateResponse>;
    responseDeserialize: grpc.deserialize<cat_pb.UpdateResponse>;
}
interface ICatServiceService_IDelete extends grpc.MethodDefinition<cat_pb.DeleteRequest, cat_pb.DeleteResponse> {
    path: string; // "/v1.CatService/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cat_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<cat_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<cat_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<cat_pb.DeleteResponse>;
}

export const CatServiceService: ICatServiceService;

export interface ICatServiceServer {
    readAll: grpc.handleUnaryCall<cat_pb.ReadAllRequest, cat_pb.ReadAllResponse>;
    read: grpc.handleUnaryCall<cat_pb.ReadRequest, cat_pb.ReadResponse>;
    create: grpc.handleUnaryCall<cat_pb.CreateRequest, cat_pb.CreateResponse>;
    update: grpc.handleUnaryCall<cat_pb.UpdateRequest, cat_pb.UpdateResponse>;
    delete: grpc.handleUnaryCall<cat_pb.DeleteRequest, cat_pb.DeleteResponse>;
}

export interface ICatServiceClient {
    readAll(request: cat_pb.ReadAllRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadAllResponse) => void): grpc.ClientUnaryCall;
    readAll(request: cat_pb.ReadAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadAllResponse) => void): grpc.ClientUnaryCall;
    readAll(request: cat_pb.ReadAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadAllResponse) => void): grpc.ClientUnaryCall;
    read(request: cat_pb.ReadRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    read(request: cat_pb.ReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    read(request: cat_pb.ReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    create(request: cat_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: cat_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: cat_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    update(request: cat_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: cat_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: cat_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    delete(request: cat_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: cat_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: cat_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
}

export class CatServiceClient extends grpc.Client implements ICatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public readAll(request: cat_pb.ReadAllRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadAllResponse) => void): grpc.ClientUnaryCall;
    public readAll(request: cat_pb.ReadAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadAllResponse) => void): grpc.ClientUnaryCall;
    public readAll(request: cat_pb.ReadAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadAllResponse) => void): grpc.ClientUnaryCall;
    public read(request: cat_pb.ReadRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public read(request: cat_pb.ReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public read(request: cat_pb.ReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public create(request: cat_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: cat_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: cat_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public update(request: cat_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: cat_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: cat_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public delete(request: cat_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: cat_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: cat_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: cat_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
}
