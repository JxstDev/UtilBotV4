const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('Deletes a specified number of messages from the channel')
        .addIntegerOption(option =>
            option.setName('count')
                .setDescription('The number of messages to delete')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const count = interaction.options.getInteger('count');

        if (count < 1 || count > 100) {
            return interaction.reply({ content: 'You need to input a number between 1 and 100.', ephemeral: true });
        }

        await interaction.channel.bulkDelete(count, true)
            .then(deletedMessages => {
                interaction.reply({ content: `Successfully deleted ${deletedMessages.size} messages.`, ephemeral: true });
            })
            .catch(error => {
                console.error(error);
                interaction.reply({ content: 'There was an error trying to delete messages in this channel!', ephemeral: true });
            });
    },
};
