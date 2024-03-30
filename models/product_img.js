'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_img.init({
    name: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.BLOB
    },
    pdt_name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'product_imgs',
  });
  return product_img;
};