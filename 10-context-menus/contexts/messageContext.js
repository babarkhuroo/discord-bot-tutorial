const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require('discord.js')

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('User Message')
    .setType(ApplicationCommandType.Message),
  async execute(interaction) {
    // Get the User's message from context menu
    const { content } = interaction.targetMessage
    console.log(content)
    await interaction.reply('User Message displayed in console.')
  },
}
