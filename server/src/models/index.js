const { User } = require("./User");
// import the rest of your models above
const { Deck } = require("./Deck");
const { Card } = require("./Card");
const { Attack } = require("./Attack");

// set up the associations here

// and then export them all below
module.exports = {
  User,
  Deck,
  Card,
  Attack,
};
