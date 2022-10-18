const wait = require('node:timers/promises').setTimeout

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isSelectMenu()) return
    // console.log(interaction)

    if (interaction.customId === 'select') {
      //   await interaction.update({
      //     content: 'Something was selected!',
      //     components: [],
      //   })

      await interaction.deferUpdate()
      await wait(4000)
      await interaction.editReply({
        content: 'Something was selected!',
        components: [],
      })
    }
  },
}
