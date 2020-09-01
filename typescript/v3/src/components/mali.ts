import Mali, { Request, Response } from 'mali';
import grpc from 'grpc';

type GrpcCall =
  grpc.ServerUnaryCall<any> |
  grpc.ServerReadableStream<any> |
  grpc.ServerWriteableStream<any> |
  grpc.ServerDuplexStream<any, any>

export interface Context<GrpcRequest, GrpcResponse> {
  name: string;
  fullName: string;
  service: string;
  package: string;
  app: Mali;
  call: GrpcCall;
  request: Request;
  response: Response;
  req: GrpcRequest;
  res: GrpcResponse;
  type: string;
  metadata: any;
  locals: object;
  get (field: string): any;
  set (field: any, val?: any): void;
  sendMetadata (md: any): void;
  getStatus (field: string): any;
  setStatus (field: any, val?: any): void;
}
