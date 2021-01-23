"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../factory/sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }

  static isPassword(pass, encodedPass) {
    bcrypt.compare(pass, encodedPass, (err, result) => {
      return result;
    });
  }
}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      },
    },
    sequelize,
    modelName: "User",
  }
);
module.exports = User;
