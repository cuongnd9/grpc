import * as grpc from '@grpc/grpc-js';
import { logger } from 'juno-js';

import { addServices } from './services';
import { config } from './components';

const createApp = () => {
  const server = new grpc.Server();

  addServices(server);

  server.bindAsync(
    `0.0.0.0:${config.port}`,
    grpc.ServerCredentials.createInsecure(),
    (error: Error | null): void => {
      if (error != null) {
        return logger.error('Server bind async error', error);
      }
      server.start();
      logger.info(`🚀 Server ready at http://127.0.0.1:${config.port}`);
    },
  );
};

export { createApp };
