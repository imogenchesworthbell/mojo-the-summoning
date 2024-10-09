require('dotenv').config()
const app = require('./app')
const PORT = process.env.PORT || 5000

async function init () {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
}

init()
