module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return
    console.log(interaction)
  },
}
