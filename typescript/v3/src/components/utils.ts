import { resolve } from 'path';
import Umzug from 'umzug';
import { Sequelize } from 'sequelize';
import { loadSync } from '@grpc/proto-loader';
import { loadPackageDefinition } from 'grpc';
import { promisify } from 'util';

const migrateDB = (sequelize: Sequelize, path: string) => new Umzug({
  migrations: {
    path,
    pattern: /\.migration.[t|j]s$/,
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      () => {
        throw new Error(`Migration tried to use old style "done" callback.
          Please upgrade to "umzug" and return a promise instead.`);
      },
    ],
  },
  storage: 'sequelize',
  storageOptions: { sequelize },
}).up();

const loadProtoPackageDefinition = (path: string) => {
  const PROTO_PATH = resolve(__dirname, '..', path);
  const protoDefinition = loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const packageDefinition = loadPackageDefinition(protoDefinition) as any;
  return packageDefinition;
};

const promisifyAll = (client: any) => {
  const to: any = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const k in client) {
    // eslint-disable-next-line no-continue
    if (typeof client[k] !== 'function') continue;
    to[k] = promisify(client[k].bind(client));
  }
  return to;
};

export { migrateDB, loadProtoPackageDefinition, promisifyAll };
