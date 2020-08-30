import Mali, { Context } from 'mali';
import { logger } from 'juno-js';
import path from 'path';

import { HelloRequest, HelloResponse } from './proto/hello';

const sayHello = (ctx: Context) => {
  const { req }: { req: HelloRequest } = ctx;
  const res: HelloResponse = {
    message: `Hello ${req.name}`,
  };
  ctx.res = res;
};

const main = () => {
  const PORT = '0.0.0.0:50000';
  const PROTO_PATH = path.resolve(__dirname, '../proto/hello.proto');
  const app = new Mali(PROTO_PATH, 'GreeterService');
  app.use({ sayHello });
  app.start(PORT);
  logger.info(`🚀 Server ready at ${PORT}`);
};

main();
