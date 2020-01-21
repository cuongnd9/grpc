const grpc = require('grpc');
const data = require('./data.json');

// load proto file.
const catsProto = grpc.load('cats.proto');
// create new gRPC server.
const server = new grpc.Server();
server.addService(catsProto.CatService.service, {
  list: (_, callback) => {
    callback(null, data);
  }
})
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server is running at http:127.0.0.1:50051');
server.start();
