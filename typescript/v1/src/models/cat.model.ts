import { Model, DataTypes } from 'sequelize';

import sequelize from '.';

class Cat extends Model {
  public id: string;

  public name: string;

  public color: string;

  public createdAt: Date;

  public updatedAt: Date;
}

Cat.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'cats',
});

export default Cat;
