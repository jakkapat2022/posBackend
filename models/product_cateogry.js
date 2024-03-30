'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_cateogry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_cateogry.init({
    cateogry_code: DataTypes.STRING,
    cateogry_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_cateogry',
  });
  return product_cateogry;
};