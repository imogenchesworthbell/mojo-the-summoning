const { db } = require('./config')
const { User, Attack } = require('../models')

function randInt (a, b) {
  return a + Math.floor(Math.random() * (b - a))
}

async function seed () {
  await db.sync({ force: true })

  const users = await User.bulkCreate([
    { username: 'v1per' },
    { username: 'trinity' },
    { username: 'mr_spoon' }
  ])

  const deckNames = ['snake pit', 'the matrix', 'Doom Burger']
  const decks = await Promise.all(
    users.map((u, i) => u.createDeck({ name: deckNames[i], xp: randInt(0, 100)  }))
  )

  const cards = [
    {
      name: 'Arcturus Spellweaver',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/arcturus-spellweaver.jpg'
    },
    {
      name: 'Nimue Mistral',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/nimue-mistral.jpg'
    },
    {
      name: 'Theron Thunderstrike',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/theron-thunderstrike.jpg'
    },
    {
      name: 'Lirien Moonshadow',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/lirien-moonshadow.jpg'
    },
    {
      name: 'Alaric Flamecaller',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/alaric-flamecaller.jpg'
    }
  ]

  const cardPromises = []
  for (const deck of decks) {
    const cardCount = randInt(2, 5)
    for (let i = 0; i < cardCount; i++) {
      const j = randInt(0, cards.length)
      cardPromises.push(deck.createCard(cards[j]))
    }
  }
  
  const createdCards = await Promise.all(cardPromises)

  // Seed Attacks
  const attacks = await Attack.bulkCreate([
    { title: "Charge", mojoCost: 10, staminaCost: 15 },
    { title: "Thunderbolt", mojoCost: 20, staminaCost: 10 },
    { title: "Piledriver", mojoCost: 25, staminaCost: 20 },
    { title: "Fireball", mojoCost: 30, staminaCost: 25 },
    { title: "Ice Spear", mojoCost: 15, staminaCost: 20 },
    { title: "Heal", mojoCost: 10, staminaCost: 5 },
    { title: "Poison Strike", mojoCost: 35, staminaCost: 30 },
    { title: "Shadow Cloak", mojoCost: 40, staminaCost: 10 },
    { title: "Earthquake", mojoCost: 50, staminaCost: 35 },
    { title: "Wind Slash", mojoCost: 25, staminaCost: 15 },
  ]);

  // Create associations between cards and attacks
  const cardAttackPromises = [];
  for (const card of createdCards) {
    const attackCount = randInt(2, 4); // Assign 2-4 random attacks to each card
    for (let i = 0; i < attackCount; i++) {
      const j = randInt(0, attacks.length);
      cardAttackPromises.push(card.addAttack(attacks[j]));
    }
  }
  await Promise.all(cardAttackPromises);

  console.log('Database seeded')
}

seed()
