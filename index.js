// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js')

const dotenv = require('dotenv').config()
// dotenv.config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!')
})

// Command responses
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const { commandName } = interaction

  if (commandName === 'ding') {
    await interaction.reply('Dong!')
  } else if (commandName === 'server') {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreated at: ${interaction.guild.createdAt}\nVerification level: ${interaction.guild.verificationLevel}`
    )
  } else if (commandName === 'user') {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    )
  }
})

// Login to Discord with your client's token
client.login(process.env.TOKEN)
