const { REST, Routes } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

// =============================
// for deleting specific command
// =============================
// for guild-based commands
rest
  .delete(
    Routes.applicationGuildCommand(
      process.env.CLIENT_ID,
      process.env.GUILD_ID,
      '1028600626818580550' // ID of the command to be deleted
    )
  )
  .then(() => console.log('Successfully deleted guild command'))
  .catch(console.error)

// for global commands
rest
  .delete(
    Routes.applicationCommand(process.env.CLIENT_ID, '1028600626818580550')
  )
  .then(() => console.log('Successfully deleted application command'))
  .catch(console.error)

// =========================
// for deleting all commands
// =========================
// for guild-based commands
rest
  .put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    { body: [] }
  )
  .then(() => console.log('Successfully deleted all guild commands.'))
  .catch(console.error)

// for global commands
rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
  .then(() => console.log('Successfully deleted all application commands.'))
  .catch(console.error)
