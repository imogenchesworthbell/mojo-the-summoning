const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const {db} = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  attack = await Attack.create({ title: 'gandalf-attack', mojoCost: 12, staminaCost: 1 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
    it('has an id set correctly', async () => {
        expect(attack).toHaveProperty('id')
      }),
      it('has a username set correctly', async () => {
        expect(attack.title).toBe('gandalf-attack');
      }),
      it('has a username set correctly', async () => {
        expect(attack.mojoCost).toBe(12);
      }),
      it('has a username set correctly', async () => {
        expect(attack.staminaCost).toBe(1);
      }),
      it('has the correct types of data', async () => {
        expect(typeof attack.id).toBe('number')
        expect(typeof attack.title).toBe('string');
        expect(typeof attack.mojoCost).toBe('number');
        expect(typeof attack.staminaCost).toBe('number')
      })
      

})