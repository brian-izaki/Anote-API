"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../factory/sequelize");

class Notes extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Notes.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: DataTypes.STRING,
    page: DataTypes.STRING,
    author: DataTypes.STRING,
    observation: DataTypes.STRING,
    imageNotation: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Notes",
  }
);
module.exports = Notes;
