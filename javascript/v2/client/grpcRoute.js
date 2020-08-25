const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

const catProtoPath = path.join(__dirname, '..', 'protos', 'cat.proto');
const catProtoDefination = protoLoader.loadSync(catProtoPath);
const catPackageDefination = grpc.loadPackageDefinition(catProtoDefination).cat;

// grpc client
const client = new catPackageDefination.CatService('127.0.0.1:5001', grpc.credentials.createInsecure());

const listCats = (req, res) => {
    client.listCats({}, (err, result) => {
        res.json(result);
    });
};
const readCat = (req, res) => {
    const payload = { id: req.params.id };
    client.readCat(payload, (err, result) => {
        if (err) {
            res.json('That cat does not exist.');
        } else {
            res.json(result);
        }
    });
};
const createCat = (req, res) => {
    const payload = {
        name: req.body.name,
        color: req.body.color
    };
    client.createCat(payload, (err, result) => {
        res.json(result);
    });
};
const updateCat = (req, res) => {
    const payload = { id: parseInt(req.params.id), name: req.body.name, color: req.body.color };
    client.updateCat(payload, (err, result) => {
        if (err) {
          res.json('That cat does not exist.');
        } else {
          res.json(result);
        }
      });
};
const deleteCat = (req, res) => {
    const payload = { id: parseInt(req.params.id) };
    client.deleteCat(payload, (err, result) => {
        if (err) {
          res.json('That cat does not exist.');
        } else {
          res.json(result);
        }
      });
};

module.exports = {
    listCats,
    readCat,
    createCat,
    updateCat,
    deleteCat
}
