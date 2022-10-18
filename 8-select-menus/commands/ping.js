const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setNameLocalizations({
      de: 'peng',
      pl: 'świst',
    })
    .setDescription('Replies with Pong!')
    .setDescriptionLocalizations({
      de: 'Antwortet mit Pong',
      pl: 'Odpowiedzi pong',
    })
    .setDMPermission(false),
  async execute(interaction) {
    const localesName = {
      de: 'pong in german',
      pl: 'pong in polish',
    }
    const localesDescription = {
      de: 'pong again in german',
      pl: 'pong again in polish',
    }
    await interaction.reply(localesName[interaction.locale] ?? 'Pong!')
    await wait(3000)
    await interaction.editReply(
      localesDescription[interaction.locale] ?? 'Pong again!!!'
    )
    // await interaction.deleteReply()  //for deleting original reply()
  },
}
