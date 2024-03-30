'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductStockBills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductStockBills.init({
    id_stock: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.STRING
    },
    dealer: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    total: {
      type: DataTypes.FLOAT
    },
  }, {
    sequelize,
    modelName: 'ProductStockBills',
  });
  return ProductStockBills;
};