const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
const fs = require('fs');

module.exports = {
   data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Return a button!'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
        .setLabel(`Click Me!`)
        .setStyle(ButtonStyle.Link)
        .setURL('https://google.com')

    await interaction.reply({ 
        components: [new ActionRowBuilder().addComponents(button)]
    });
    },      
};