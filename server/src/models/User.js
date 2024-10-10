// create your User model here
const { db, DataTypes, Model } = require("../db/config.js");

let User = db.define("User", {
  id: { type: DataTypes.INTEGER },
  username: { type: DataTypes.STRING },
});

module.exports = User;
