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
          .setCustomId('primaryRow')
          .setLabel('Click me here!')
          .setStyle(ButtonStyle.Primary)
          .setDisabled(true)
      )

    const rowTwo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('primaryTwo')
        .setLabel('Click me too!')
        .setStyle(ButtonStyle.Primary)
        .setEmoji('854206837071151124')
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
