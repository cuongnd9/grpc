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
function listCats(call, callback) {
  knex('cats')
    .then(data => {
      callback(null, { cats: data });
    });
}
function readCat(call, callback) {
  knex('cats')
    .where({ id: parseInt(call.request.id) })
    .then((data) => {
      if (data.length) {
        callback(null, { cat: data[0] });
      } else {
        callback('That cat does not exist');
      }
    });
}
function createCat(call, callback) {
  knex('cats')
    .insert({
      name: call.request.name,
      color: call.request.color,
    })
    .then(cat => {
      callback(null, { cat });
    });
}
function updateCat(call, callback) {
  knex('cats')
    .where({ id: parseInt(call.request.id) })
    .update({
      name: call.request.name,
      color: call.request.color,
    })
    .returning()
    .then((cat) => {
      if (cat) {
        callback(null, { cat });
      } else {
        callback('That cat does not exist');
      }
    });
}
function deleteCat(call, callback) {
  knex('cats')
    .where({ id: parseInt(call.request.id) })
    .delete()
    .returning()
    .then((cat) => {
      if (cat) {
        callback(null, { cat });
      } else {
        callback('That cat does not exist');
      }
    });
}

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
