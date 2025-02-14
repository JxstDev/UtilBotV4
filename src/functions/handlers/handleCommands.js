const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                
                // Add a check and log the command file causing the issue
                if (!command.data || !command.data.name) {
                    console.error(`Command file ${folder}/${file} is missing "data" or "data.name" property.`);
                    continue; // Skip this command file
                }
                
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passed through the handler`);
            }
        }

        const clientId = '958345110796533761';
        
        const rest = new REST({ version: '9' }).setToken(process.env.token);

        try {
            console.log(`Started refreshing application (/) commands.`);

            await rest.put(Routes.applicationCommands(clientId), {
                body: client.commandArray,
            });

            console.log("Successfully reloaded application (/) commands.");
        } catch (error) {
            console.error(error);
        }
    };
};
