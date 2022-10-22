const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require('discord.js')

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('User Information')
    .setType(ApplicationCommandType.User),
  async execute(interaction) {
    // Get the User's username from context menu
    const { username } = interaction.targetUser
    console.log(username)
    await interaction.reply('Username displayed in console.')
  },
}
