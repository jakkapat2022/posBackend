'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bills_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bills_product.init({
    bill_id: DataTypes.STRING,
    id_pdt: DataTypes.INTEGER,
    name: DataTypes.STRING,
    barcode: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'bills_product',
  });
  return bills_product;
};