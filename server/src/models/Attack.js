const { db, DataTypes, Model } = require("../db/config.js");

let Attack = db.define("Attack", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  title: { type: DataTypes.STRING },
  mojoCost: { type: DataTypes.INTEGER },
  staminaCost: { type: DataTypes.INTEGER },
});

module.exports = {Attack};
