const { Sequelize } = require("sequelize");
const cfg = require("../../config/database").development

const sequelize = new Sequelize(cfg)

module.exports = sequelize;
