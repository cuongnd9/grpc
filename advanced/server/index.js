const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

// config knex
const environment = process.env.ENVIRONMENT || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);

// define grpc service
const catProtoPath = path.join(__dirname, '..', 'protos', 'cat.proto');
const catProtoDefination = protoLoader.loadSync(catProtoPath);
const catPackageDefination = grpc.loadPackageDefinition(catProtoDefination).cat;

// knex queries
function listCats(call, callback) {}
function readCat(call, callback) {}
function createCat(call, callback) {}
function updateCat(call, callback) {}
function deleteCat(call, callback) {}

// main
function main() {
  const server = new grpc.Server();

  // grpc service
  server.addService(catPackageDefination.CatService.service, {
    listCats,
    readCat,
    createCat,
    updateCat,
    deleteCat
  });

  server.bind('127.0.0.1:5000', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('grpc server is listening at https://127.0.0.1:5000');
}

main()
