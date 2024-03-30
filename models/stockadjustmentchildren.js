'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockAdjustmentChildren extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StockAdjustmentChildren.init({
    id_adjust: DataTypes.INTEGER,
    pdt_id: DataTypes.INTEGER,
    pdt_name: DataTypes.STRING,
    pdt_stock: DataTypes.INTEGER,
    current_stock: DataTypes.INTEGER,
    pdt_price: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'StockAdjustmentChildren',
  });
  return StockAdjustmentChildren;
};