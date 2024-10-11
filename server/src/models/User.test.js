const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('./User')
const { Deck } = require('./Deck')
const {db} = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id set correctly', async () => {
    expect(user).toHaveProperty('id')
  }),
  
  it('has a username set correctly', async () => {
    expect(user).toHaveProperty('username')
  }),

  it('has a username set', async () => {
    expect(user.username).toBe('gandalf')
  }),
  it('has the correct types of data', async () => {
    expect(typeof user.id).toBe('number');
    expect(typeof user.username).toBe('string')
  })
});

describe('User - Stretch', () => {
  // STRETCH - add test - a user can be loaded with deck one to one

  User.hasOne(Deck);
  Deck.belongsTo(User);

  it('user can be loaded with deck', async () => {
    const testUser = await User.create({ username: 'Immie123' });
    const testDeck = await Deck.create({ name: 'Imogen', xp: 100 });
    await testUser.setDeck(testDeck);

    const userDeck = await testUser.getDeck();
    expect(userDeck.name).toBe('Imogen');
    expect(userDeck.xp).toBe(100);
})

});
