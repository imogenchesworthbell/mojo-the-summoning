const { db, DataTypes, Model } = require("../db/config.js");

let Deck = db.define("Deck", {
  id: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING },
  xp: { type: DataTypes.INTEGER },
});

module.exports = Deck;
