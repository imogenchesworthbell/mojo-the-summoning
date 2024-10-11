const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
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

describe('Attack', () => {
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

      // STRETCH - addd test - a deck can be loaded with cards

})