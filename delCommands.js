const { REST, Routes } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

// for deleting single registered-command
rest
  .delete(
    Routes.applicationGuildCommand(
      process.env.CLIENT_ID,
      process.env.GUILD_ID,
      '1028600626818580550' // ID for '/ping' command
    )
  )
  .then(() => console.log('Successfully deleted guild command'))
  .catch(console.error)

// for deleting all registered-commands
// rest
//   .put(
//     Routes.applicationGuildCommands(
//       process.env.CLIENT_ID,
//       process.env.GUILD_ID
//     ),
//     { body: [] }
//   )
//   .then(() => console.log('Successfully deleted all guild commands.'))
//   .catch(console.error)
