const { SlashCommandBuilder } = require('discord.js')

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
  },
}
