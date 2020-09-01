import { credentials } from 'grpc';

import { loadProtoPackageDefinition, promisifyAll } from '../components';
import { HelloRequest, HelloResponse } from '../protoTypes/greeter.protoType';

const { Greeter } = loadProtoPackageDefinition('./proto/greeter.proto');
const client = promisifyAll(new Greeter('0.0.0.0:50000', credentials.createInsecure()));

class GreeterClient {
  static sayHello = (name: string): Promise<HelloResponse> => {
    const request: HelloRequest = { name };
    return client.sayHello(request);
  }
}

export { GreeterClient };
