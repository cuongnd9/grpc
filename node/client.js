const grpc = require('grpc');

const CatService = grpc.load('./cats.proto').CatService;
const client = new CatService('127.0.0.1:50051', grpc.credentials.createInsecure());

module.exports = client;
