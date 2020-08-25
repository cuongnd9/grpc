import path from 'path';
import fs from 'fs';
import { Server } from '@grpc/grpc-js';

const services: {
  handler: any;
  service: any;
}[] = [];

fs
  .readdirSync(__dirname)
  .filter((fileName: string) => /service.[t|j]s/.test(fileName))
  .forEach((fileName) => {
    const service = require(path.resolve(__dirname, fileName));
    services.push(service.default);
  });

const addServices = (server: Server) => {
  services.forEach((item: { service: any; handler: any }) => {
    server.addService(item.service, item.handler);
  });
};

export { addServices };
