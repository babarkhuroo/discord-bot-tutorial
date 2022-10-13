const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('funny')
    .setDescription('Replies with something funny!'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true })
    await wait(2000)
    await interaction.editReply('Why')
    await interaction.editReply('Why are')
    await interaction.editReply('Why are you')
    await interaction.editReply('Why are you gay?')
  },
}
