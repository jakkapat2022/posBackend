'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class darftBill_product_stack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  darftBill_product_stack.init({
    bill_id: DataTypes.STRING,
    id_pdt: DataTypes.INTEGER,
    name: DataTypes.STRING,
    barcode: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'darftBill_product_stack',
  });
  return darftBill_product_stack;
};