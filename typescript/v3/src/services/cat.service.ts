import { omit } from 'lodash';

import { sequelize } from '../models/sequelize';
import CatModel from '../models/cat.model';
import { Cat, CatWithoutId } from '../protoTypes/cat.protoType';

class CatService {
  static getCat(id: string) {
    return CatModel.findOne({
      where: {
        id,
      },
    });
  }

  static getCats() {
    return CatModel.findAll();
  }

  static createCat(cat: CatWithoutId) {
    return sequelize.transaction((transaction) => CatModel.create(cat, { transaction }));
  }

  static updateCat(cat: Cat) {
    return sequelize.transaction((transaction) => CatModel.update(omit(cat, 'id'), {
      where: {
        id: cat.id,
      },
      returning: true,
      transaction,
    }));
  }

  static deleteCat(id: string) {
    return sequelize.transaction((transaction) => CatModel.destroy({
      where: {
        id,
      },
      transaction,
    }));
  }
}

export { CatService };
