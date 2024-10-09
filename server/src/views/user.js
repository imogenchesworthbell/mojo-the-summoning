const express = require('express')
const { User, Deck, Card } = require('../models')

const router = express.Router()

/**
 * Get a user by their id
 */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.sendStatus(404)
    res.send(user)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Get all users
 */
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Deck,
        include: Card
      }
    })
    res.send(users)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Create a new user
 */
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).send(user)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Update a user
 */
router.put('/:id', async (req, res) => {
  try {
    let user = await User.findByPk(req.params.id)
    if (!user) return res.sendStatus(404)
    user = await user.update({ ...user, ...req.body })
    res.send(user)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Delete a user
 */
router.delete('/:id', async (req, res) => {
  try {
    let user = await User.findByPk(req.params.id)
    if (!user) return res.sendStatus(404)
    user = await user.destroy()
    res.send(user)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

module.exports = { router }
