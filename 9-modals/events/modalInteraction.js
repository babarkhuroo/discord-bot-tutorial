module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return

    await interaction.reply({
      content: 'Your submission was received successfully!',
    })
  },
}
