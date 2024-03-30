'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductStock.init({
    pdt_id: {
      type: DataTypes.INTEGER
    },
    stock: {
      type: DataTypes.INTEGER
    },
    unit: {
      type: DataTypes.STRING
    },
    unitcost: {
      type: DataTypes.FLOAT
    },
  }, {
    sequelize,
    modelName: 'ProductStock',
  });
  return ProductStock;
};