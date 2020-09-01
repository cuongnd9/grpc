import path from 'path';
import { logger, globalOptions } from 'juno-js';

import { migrateDB, config } from './components';
import { sequelize, associate } from './models/sequelize';
import { createApp } from './app';

globalOptions.environment = config.nodeEnv;

const main = async () => {
  try {
    const pathToMigration = path.join(__dirname, 'migrations');
    await migrateDB(sequelize, pathToMigration).catch((error) => logger.error('Migrate error', error));
    associate();

    const app = createApp();
    app.start(`0.0.0.0:${config.port}`);
    logger.info(`🍣 Server ready at http://0.0.0.0:${config.port}`);
  } catch (error) {
    logger.error('Global error', error);
    process.exit(1);
  }
};

main();
