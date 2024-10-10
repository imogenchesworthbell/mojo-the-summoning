const { User } = require("./User");
// import the rest of your models above
const { Deck } = require("./Deck");
const { Card } = require("./Card");
const { Attack } = require("./Attack");

// set up the associations here

// Users and Decks one-to-one 

User.hasOne(Deck);
Deck.belongsTo(User);

// Decks and Cards with a one-to-many 

Deck.hasMany(Card);
Card.belongsTo(Deck);


// Card and Attack many-to-many
 Card.belongsToMany(Attack, {through: "card-attack"});
 Attack.belongsToMany(Card, {through: "card-attack"});



// and then export them all below
module.exports = {
  User,
  Deck,
  Card,
  Attack,
};
