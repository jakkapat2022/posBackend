'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class darftBill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  darftBill.init({
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    total: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'darftBill',
  });
  return darftBill;
};