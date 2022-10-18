module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isSelectMenu()) return
    console.log(interaction)
  },
}
