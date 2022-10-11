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

;(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
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
    const data = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    )

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    )
  } catch (error) {
    console.error(error)
  }
})()

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
