const {
  SlashCommandBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
  EmbedBuilder,
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('select')
    .setDescription('displays the select menu'),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new SelectMenuBuilder()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .addOptions(
          {
            label: 'Select me',
            description: 'This is a description',
            value: 'first_option',
          },
          {
            label: 'You can select me too',
            description: 'This is also a description',
            value: 'second_option',
          }
        )
    )

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setDescription('Some description here')

    await interaction.reply({
      content: 'Here is your select menu',
      components: [row],
      embeds: [embed],
      ephemeral: true,
    })
  },
}
