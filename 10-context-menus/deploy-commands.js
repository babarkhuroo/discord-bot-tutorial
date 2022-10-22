const fs = require('node:fs')
const path = require('node:path')

const { REST, Routes } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

// for deploying slash-commands
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

// for deploying context-menus
const contexts = []
const contextsPath = path.join(__dirname, 'contexts')
const contextFiles = fs
  .readdirSync(contextsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of contextFiles) {
  const filePath = path.join(contextsPath, file)
  const context = require(filePath)
  contexts.push(context.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

;(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    )
    console.log(
      `Started refreshing ${contexts.length} application context menus.`
    )

    // for deploying commands in the guild they were created in
    // ===============================================
    // const data = await rest.put(
    //   Routes.applicationGuildCommands(
    //     process.env.CLIENT_ID,
    //     process.env.GUILD_ID
    //   ),
    //   { body: commands }
    // )

    // for deploying commands globally (including DMs)
    // ===============================================
    const slashData = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    )
    const contextData = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: contexts }
    )

    console.log(
      `Successfully reloaded ${slashData.length} application (/) commands.`
    )
    console.log(
      `Successfully reloaded ${contextData.length} application context menus.`
    )
  } catch (error) {
    console.error(error)
  }
})()
