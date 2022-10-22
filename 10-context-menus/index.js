const fs = require('node:fs')
const path = require('node:path')

// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// For commands
client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  client.commands.set(command.data.name, command)
}

// For contexts
client.contexts = new Collection()
const contextsPath = path.join(__dirname, 'contexts')
const contextFiles = fs
  .readdirSync(contextsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of contextFiles) {
  const filePath = path.join(contextsPath, file)
  const context = require(filePath)
  client.contexts.set(context.data.name, context)
}

// For events
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

// Login to Discord with your client's token
client.login(process.env.TOKEN)
