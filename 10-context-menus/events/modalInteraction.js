module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return

    // Get the data entered by the user
    const favoriteColor =
      interaction.fields.getTextInputValue('favoriteColorInput')
    const hobbies = interaction.fields.getTextInputValue('hobbiesInput')
    console.log({ favoriteColor, hobbies })

    await interaction.reply({
      content: 'Your submission was received successfully!',
    })
  },
}
