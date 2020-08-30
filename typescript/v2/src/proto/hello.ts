/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


export interface HelloRequest {
  name: string;
}

export interface HelloResponse {
  message: string;
}

const baseHelloRequest: object = {
  name: "",
};

const baseHelloResponse: object = {
  message: "",
};

export interface GreeterService {

  sayHello(request: HelloRequest): Promise<HelloResponse>;

  sayHi(request: HelloRequest): Promise<HelloResponse>;

}

export class GreeterServiceClientImpl implements GreeterService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  sayHello(request: HelloRequest): Promise<HelloResponse> {
    const data = HelloRequest.encode(request).finish();
    const promise = this.rpc.request("helloworld.GreeterService", "sayHello", data);
    return promise.then(data => HelloResponse.decode(new Reader(data)));
  }

  sayHi(request: HelloRequest): Promise<HelloResponse> {
    const data = HelloRequest.encode(request).finish();
    const promise = this.rpc.request("helloworld.GreeterService", "sayHi", data);
    return promise.then(data => HelloResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const HelloRequest = {
  encode(message: HelloRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HelloRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHelloRequest } as HelloRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HelloRequest {
    const message = { ...baseHelloRequest } as HelloRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<HelloRequest>): HelloRequest {
    const message = { ...baseHelloRequest } as HelloRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
  toJSON(message: HelloRequest): unknown {
    const obj: any = {};
    obj.name = message.name || "";
    return obj;
  },
};

export const HelloResponse = {
  encode(message: HelloResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HelloResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHelloResponse } as HelloResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HelloResponse {
    const message = { ...baseHelloResponse } as HelloResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<HelloResponse>): HelloResponse {
    const message = { ...baseHelloResponse } as HelloResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
  toJSON(message: HelloResponse): unknown {
    const obj: any = {};
    obj.message = message.message || "";
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;