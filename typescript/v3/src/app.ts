import Mali, { Context } from 'mali';
import { logger } from 'juno-js';

import { createGRPCServices } from './grpc';

const createApp = () => {
  const app = new Mali();
  createGRPCServices(app);
  app.on('error', (err: Error, ctx: Context) => {
    logger.error(`😥 Server error for call ${ctx.name} of type ${ctx.type}`, err);
  });
  return app;
};

export { createApp };
