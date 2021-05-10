const fs = require('fs');
const chalk = require("chalk")

module.exports = (client) => {
    const load = dirs => {
        const commands = fs.readdirSync(`./commands/${dirs}/`).filter(cmd => cmd.endsWith('.js'));
        for (let cmd of commands) {
            let pull = require(`../commands/${dirs}/${cmd}`);
            client.commands.set(pull.config.name, pull);
            console.log(chalk.green(`Chargement de la commande: ` + pull.config.name + " -> En Ligne !"))
            if (pull.config.aliases) pull.config.aliases.forEach(cmd => client.aliases.set(cmd, pull.config.name));
        };
    };
    ["Fun", "General", "Images/Gifs", "Interaction", "Moderation", "Music", "NSFW", "Roles", "xTravaux"].forEach(cmd => load(cmd));
};
