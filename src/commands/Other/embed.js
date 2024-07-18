const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const fs = require('fs');

module.exports = {
   data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed!'),
    async execute(interaction, client) {
       const embed = new EmbedBuilder()
       .setTitle(`This is an EMBED`)
       .setDescription(`This is a description of said embed`)
       .setColor(0x18e1ee)
       .setImage(client.user.displayAvatarURL())
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp(Date.now())
       .setAuthor({
        iconURL: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Ffatcat-gifs&psig=AOvVaw2A7L8eArFlEvNFI4zOb6Wq&ust=1693395337849000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjlva7jgYEDFQAAAAAdAAAAABAE`,
        name: interaction.user.tag
       })
       .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
       })
       .setURL(`https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Ffatcat-gifs&psig=AOvVaw2A7L8eArFlEvNFI4zOb6Wq&ust=1693395337849000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjlva7jgYEDFQAAAAAdAAAAABAE`)
       .addFields([
        {
            name: `Testing Field 1`,
            value: `Testing Field 1 Value`,
            inline: true

        },
        {
            name: `Testing Field 2`,
            value: `Testing Field 2 Value`,
            inline: true
        }
       ]);

       await interaction.reply({
        embeds: [embed]
       })
    }
        
}