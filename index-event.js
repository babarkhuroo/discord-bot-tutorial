// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once)
client.once('ready', (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`)
})

// Command responses
client.on('interactionCreate', (interaction) => {
  console.log(
    `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
  )
})

// Login to Discord with your client's token
client.login(process.env.TOKEN)
