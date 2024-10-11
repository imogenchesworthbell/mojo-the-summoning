// add your database connection here
const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
  logging: false // this is from social sequelize W5D4 video to stop everything logging in the terminal
});

module.exports = { db, DataTypes, Model };
