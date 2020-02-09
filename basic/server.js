const grpc = require('grpc');
const { thinid } = require('thinid');

const cats = [
  {
    id: '80f6563e-a26e-4270-afc2-af09986280d1',
    name: 'DOg',
    color: 'yellow',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '80f6563e-a26e-4270-afc2-af09986280c2',
    name: 'Lily',
    color: 'black',
    image: 'https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }
];

// load proto file.
const catsProto = grpc.load('cats.proto');
// create new gRPC server.
const server = new grpc.Server();
server.addService(catsProto.CatService.service, {
  list: (_, callback) => {
    callback(null, cats);
  },
  insert: (call, callback) => {
    const cat = call.request;
    cat.id = thinid();
    cats.push(cat);
    callback(null, cat);
  },
  update: (call, callback) => {
    const updatedCat = call.request;
    const index = cats.findIndex(item => item.id === updatedCat.id);
    cats.splice(index, 1, updatedCat);
    callback(null, updatedCat);
  },
  delete: (call, callback) => {
    const deletedId = call.request;
    cats.splice(deletedId, 1);
    callback(null, deletedId);
  }
})
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server is running at http:127.0.0.1:50051');
server.start();
