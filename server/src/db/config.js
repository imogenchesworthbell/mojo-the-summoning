// add your database connection here
const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = { db, DataTypes, Model };
