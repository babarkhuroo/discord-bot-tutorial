const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setNameLocalizations({
      'en-US': 'ping',
      'en-GB': 'nudge',
    })
    .setDescription('Replies with Pong!')
    .setDescriptionLocalizations({
      'en-US': 'Replies wid Pong!!!',
      'en-GB': 'Replies wid Pong yea, innit!!!',
    }),
  async execute(interaction) {
    await interaction.reply('Pong!')
    await wait(6000)
    await interaction.editReply('Pong again!!!')
  },
}
