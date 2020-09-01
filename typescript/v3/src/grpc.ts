import Mali from 'mali';

import { loadProtoPackageDefinition } from './components';
import { GreeterHandler, CatHandler } from './handlers';

const createGRPCServices = (app: Mali) => {
  app.addService(loadProtoPackageDefinition('./proto/greeter.proto').Greeter.service, 'Greeter');
  app.use({
    Greeter: {
      sayHello: GreeterHandler.sayHello,
    },
  });

  app.addService(loadProtoPackageDefinition('./proto/cat.proto').v1.CatService.service, 'CatService');
  app.use({
    CatService: {
      create: CatHandler.create,
      read: CatHandler.read,
      update: CatHandler.update,
      delete: CatHandler.delete,
      readAll: CatHandler.readAll,
    },
  });
};

export { createGRPCServices };
