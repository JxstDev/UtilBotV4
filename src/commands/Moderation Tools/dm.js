const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dm')
        .setDescription('Sends a direct message to a specified user')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The user to send a DM to')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to send')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const targetUser = interaction.options.getUser('target');
        const message = interaction.options.getString('message');

        try {
            await targetUser.send(message);
            await interaction.reply({ content: `Message sent to ${targetUser.tag}`, ephemeral: true });
        } catch (error) {
            console.error(`Could not send DM to ${targetUser.tag}.`, error);
            await interaction.reply({ content: `Failed to send message to ${targetUser.tag}`, ephemeral: true });
        }
    },
};
