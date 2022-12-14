const fs = require('node:fs')
const path = require('node:path')

const { REST, Routes } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const commands = []
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

// for guild-based commands
// rest
//   .put(
//     Routes.applicationGuildCommands(
//       process.env.CLIENT_ID,
//       process.env.GUILD_ID
//     ),
//     { body: commands }
//   )
//   .then((data) =>
//     console.log(`Successfully registered ${data.length} application commands.`)
//   )
//   .catch(console.error)

// for global commands
rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error)
