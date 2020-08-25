import * as grpc from '@grpc/grpc-js';
import { omit } from 'lodash';

import * as cat_grpc_pb from '../protos/cat_grpc_pb';
import * as cat_pb from '../protos/cat_pb';
import { ICatServiceServer } from '../protos/cat_grpc_pb';
import sequelize from '../models';
import CatModel from '../models/cat.model';

class CatHandler implements ICatServiceServer {
  readAll: grpc.handleUnaryCall<cat_pb.ReadAllRequest, cat_pb.ReadAllResponse> = async (call, callback) => {
    const cats = await CatModel.findAll();
    const res = new cat_pb.ReadAllResponse();
    res.setCatsList(cats.map((item) => {
      const catResponse = new cat_pb.Cat();
      catResponse.setId(item.id);
      catResponse.setName(item.name);
      catResponse.setColor(item.color);
      return catResponse;
    }));
    callback(null, res);
  }

  read: grpc.handleUnaryCall<cat_pb.ReadRequest, cat_pb.ReadResponse> = async (call, callback) => {
    const { id } = call.request.toObject();
    const cat = await CatModel.findOne({
      where: {
        id,
      },
    });
    const res = new cat_pb.ReadResponse();
    const catResponse = new cat_pb.Cat();
    catResponse.setId(cat.id);
    catResponse.setName(cat.name);
    catResponse.setColor(cat.color);
    res.setCat(catResponse);
    callback(null, res);
  }

  create: grpc.handleUnaryCall<cat_pb.CreateRequest, cat_pb.CreateResponse> = async (call, callback) => {
    const newCat = await sequelize.transaction((transaction) => CatModel.create(omit(call.request.toObject().cat, 'id'), {
      transaction,
    }));
    const res = new cat_pb.CreateResponse();
    const catResponse = new cat_pb.Cat();
    catResponse.setId(newCat.id);
    catResponse.setName(newCat.name);
    catResponse.setColor(newCat.color);
    res.setCat(catResponse);
    callback(null, res);
  }

  update: grpc.handleUnaryCall<cat_pb.UpdateRequest, cat_pb.UpdateResponse> = async (call, callback) => {
    const { id, ...updatedData } = call.request.toObject().cat as any;
    const [, [updatedCat]] = await sequelize.transaction((transaction) => CatModel.update(updatedData, {
      where: {
        id,
      },
      returning: true,
      transaction,
    }));
    const res = new cat_pb.UpdateResponse();
    const catResponse = new cat_pb.Cat();
    catResponse.setId(updatedCat.id);
    catResponse.setName(updatedCat.name);
    catResponse.setColor(updatedCat.color);
    res.setCat(catResponse);
    callback(null, res);
  }

  delete: grpc.handleUnaryCall<cat_pb.DeleteRequest, cat_pb.DeleteResponse> = async (call, callback) => {
    const { id } = call.request.toObject() as any;
    const result = await CatModel.destroy({
      where: {
        id,
      },
    });
    const res = new cat_pb.DeleteResponse();
    res.setDeleted(result === 1);
    callback(null, res);
  }
}

export default {
  // @ts-ignore
  service: cat_grpc_pb['v1.CatService'],
  handler: new CatHandler(),
};
