'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stockBillProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stockBillProduct.init({
    id_stock: {
      type: DataTypes.STRING
    },
    pdt_id: {
      type: DataTypes.INTEGER
    },
    pdt_name: {
      type: DataTypes.STRING
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
    totalcost: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'stockBillProduct',
  });
  return stockBillProduct;
};