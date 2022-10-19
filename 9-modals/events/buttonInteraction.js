const wait = require('node:timers/promises').setTimeout

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isButton()) return
    // console.log(interaction)

    // await interaction.reply('This button is clicked')

    // await interaction.update({
    //   content: 'A button was clicked!',
    //   components: [],
    // })

    if (interaction.customId === 'primary') {
      await interaction.deferUpdate()
      await wait(4000)
      await interaction.editReply({
        content: 'A button was clicked again!',
        components: [],
      })
    }
  },
}
