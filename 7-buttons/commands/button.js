const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('Button example'),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Click me!')
          .setStyle(ButtonStyle.Primary)
      )
      .addComponents(
        new ButtonBuilder()
          .setCustomId('secondary')
          .setLabel('Click me, secondary!')
          .setStyle(ButtonStyle.Secondary)
          .setEmoji('854206837071151124')
      )
      .addComponents(
        new ButtonBuilder()
          .setCustomId('success')
          .setLabel('Click me, success!')
          .setStyle(ButtonStyle.Success)
      )
      .addComponents(
        new ButtonBuilder()
          .setCustomId('danger')
          .setLabel('Click me, danger!')
          .setStyle(ButtonStyle.Danger)
          .setDisabled(true)
      )

    const rowTwo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Click me, link!')
        .setStyle(ButtonStyle.Link)
        .setURL('https://google.com')
    )

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Some title')
      .setURL('https://discord.js.org')
      .setDescription('Some description here')

    await interaction.reply({
      content: 'I think you should,',
      ephemeral: true,
      embeds: [embed],
      components: [row, rowTwo],
    })
  },
}
