import { Context } from '../components';
import {
  ReadRequest, ReadResponse, CreateRequest, CreateResponse, ReadAllRequest, ReadAllResponse, UpdateRequest,
  UpdateResponse, DeleteRequest, DeleteResponse,
} from '../protoTypes/cat.protoType';
import { CatService } from '../services/cat.service';

class CatHandler {
  static create = async (ctx: Context<CreateRequest, CreateResponse>) => {
    if (!ctx.req.cat) {
      ctx.res = { cat: undefined };
      return;
    }
    const cat = await CatService.createCat(ctx.req.cat);
    ctx.res = { cat };
  }

  static read = async (ctx: Context<ReadRequest, ReadResponse>) => {
    const cat = await CatService.getCat(ctx.req.id) || undefined;
    ctx.res = { cat };
  };

  static readAll = async (ctx: Context<ReadAllRequest, ReadAllResponse>) => {
    const cats = await CatService.getCats();
    ctx.res = { cats };
  };

  static update = async (ctx: Context<UpdateRequest, UpdateResponse>) => {
    if (!ctx.req.cat) {
      ctx.res = { cat: undefined };
      return;
    }
    const [, [cat]] = await CatService.updateCat(ctx.req.cat);
    ctx.res = { cat };
  };

  static delete = async (ctx: Context<DeleteRequest, DeleteResponse>) => {
    const deleted = (await CatService.deleteCat(ctx.req.id)) === 1;
    ctx.res = { deleted };
  };
}

export { CatHandler };
