'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Developer.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    job: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    skill: DataTypes.STRING,
    email: DataTypes.STRING,
    instagram: DataTypes.STRING,
    github: DataTypes.STRING,
    gitlab: DataTypes.STRING,
    portfolio: DataTypes.STRING,
    experience: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};