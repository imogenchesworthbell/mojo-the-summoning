const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('./User')
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
  
  it('has an username set correctly', async () => {
    expect(user).toHaveProperty('username')
  }),

  it('has a username set correctly', async () => {
    expect(user.username).toBe('gandalf')
  })
// correct data types
  // STRETCH - addd test - a user can be loaded with deck

})
