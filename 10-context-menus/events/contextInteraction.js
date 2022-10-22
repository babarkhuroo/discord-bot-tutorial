module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isContextMenuCommand()) return
    // console.log(interaction)

    const context = interaction.client.contexts.get(interaction.commandName)

    if (!context) return

    try {
      await context.execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: 'There was an error while executing this context menu!',
        ephemeral: true,
      })
    }
  },
}
