import * as grpc from 'grpc';

import { Context } from '../components';
import { HelloRequest, HelloResponse } from '../protoTypes/greeter.protoType';

class GreeterHandler {
  static sayHello = (ctx: Context<HelloRequest, HelloResponse>) => {
    if (!ctx.req.name) {
      const err = new Error('name must provied');
      // @ts-ignore
      err.code = grpc.status.INVALID_ARGUMENT;
      throw err;
    }
    ctx.res = { message: 'Hello '.concat(ctx.req.name) };
  };
}

export { GreeterHandler };
