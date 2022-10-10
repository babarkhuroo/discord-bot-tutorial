const fs = require('node:fs')
const path = require('node:path')

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file)
  const event = require(filePath)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

// When the client is ready, run this code (only once)
// client.once('ready', (c) => {
//   console.log(`Ready! Logged in as ${c.user.tag}`)
// })

// Command responses
// client.on('interactionCreate', (interaction) => {
//   console.log(
//     `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
//   )
// })

// Login to Discord with your client's token
client.login(process.env.TOKEN)
