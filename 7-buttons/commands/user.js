const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info!'),
  async execute(interaction) {
    await interaction.deferReply()
    await wait(3000)
    await interaction.editReply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    )
    await interaction.followUp({
      content: 'Info displayed successfully!!!',
      ephemeral: true,
    })
  },
}
