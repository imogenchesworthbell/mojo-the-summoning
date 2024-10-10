const { db, DataTypes, Model } = require("../db/config.js");

let Card = db.define("Card", {
  id: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING },
  mojo: { type: DataTypes.INTEGER },
  stamina: { type: DataTypes.INTEGER },
  imgUrl: { type: DataTypes.STRING },
});

module.exports = Card;
