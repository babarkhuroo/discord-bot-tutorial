const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('options')
    .setDescription('Information about the options provided.')
    .addStringOption((option) =>
      option
        .setName('input')
        .setDescription('The input to echo back')
        .setRequired(true)
        .addChoices(
          { name: 'hello', value: 'hello wassup' },
          { name: 'hi', value: 'hi wassup' },
          { name: 'hey', value: 'hey wassup' }
        )
    ),
  async execute(interaction) {
    const value = interaction.options.getString('input')
    if (value) return interaction.reply(`The options value is: \`${value}\``)
    return interaction.reply('No option was provided!')
  },
}
