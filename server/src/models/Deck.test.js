const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
const {Card } = require('./Card')
const {db} = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'gandalf-Deck', xp: 36 })
})


// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Decck', () => {
    it('has an id set correctly', async () => {
        expect(deck).toHaveProperty('id')
      }),
      it('has an name set correctly', async () => {
        expect(deck.name).toBe('gandalf-Deck')
      }),
      it('has an xp set correctly', async () => {
        expect(deck.xp).toBe(36)
      }),
      it('has the correct types of data', async () => {
        expect(typeof deck.id).toBe('number');
        expect(typeof deck.name).toBe('string');
        expect(typeof deck.xp).toBe('number')
      })
}); 
      // STRETCH - addd test - a deck can be loaded with cards one to many
describe('Deck - Stretch', () => {
    Deck.hasMany(Card);
    Card.belongsTo(Deck);
      
    it('deck can be loaded with cards', async () => {
        const testDeck = await Deck.create({ name: 'Immie123' });
        const testCard1 = await Card.create({ name: 'Imogen', mojo: 100 , stamina: 2, imgUrl:'https://picsum.photos/200'});
        const testCard2 = await Card.create({ name: 'Imogen2', mojo: 99 , stamina: 3, imgUrl:'https://picsum.photos/200'});
        
        await testDeck.setCards([testCard1, testCard2]);
      
        const userCard = await testDeck.getCards();
        expect(userCard.length).toBe(2);
        expect(userCard[0].mojo).toBe(100);
        expect(userCard[1].mojo).toBe(99);
        expect(userCard[0].stamina).toBe(2);
        expect(userCard[1].stamina).toBe(3);
        expect(userCard[0].imgUrl).toBe('https://picsum.photos/200');
        expect(userCard[1].imgUrl).toBe('https://picsum.photos/200');
        
})
});
