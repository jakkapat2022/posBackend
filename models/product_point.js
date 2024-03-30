'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_point.init({
    uid: DataTypes.STRING,
    pdt_id: {
      type: DataTypes.STRING,
    },
    pdt_name: {
      type: DataTypes.STRING,
    },
    pdt_barcode: {
      type: DataTypes.INTEGER,
    },
    pdt_cateogry: {
      type: DataTypes.STRING,
    },
    pdt_costP: {
      type: DataTypes.INTEGER,
    },
    pdt_cost: {
      type: DataTypes.INTEGER,
    },
    pdt_img: {
      type: DataTypes.STRING,
    },
    pdt_price: {
      type: DataTypes.INTEGER,
    },
    pdt_stock: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'product_point',
  });
  return product_point;
};