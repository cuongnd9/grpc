import * as grpc from '@grpc/grpc-js';

import { ReadRequest } from '../protos/cat_pb';
import * as cat_grpc_pb from '../protos/cat_grpc_pb';

// @ts-ignore
const CatServiceClient = grpc.makeClientConstructor(cat_grpc_pb['v1.CatService'], 'CatService');
const client = new CatServiceClient('127.0.0.1:50000', grpc.credentials.createInsecure()) as any as cat_grpc_pb.CatServiceClient;

class CatClient {
  // eslint-disable-next-line promise/avoid-new
  read = (id: string) => new Promise((resolve, reject) => {
    const request = new ReadRequest();
    request.setId(id);
    client.read(request, (error, response) => {
      if (error) {
        return reject(error);
      }
      resolve(response.toObject());
    });
  })
}

export default CatClient;
