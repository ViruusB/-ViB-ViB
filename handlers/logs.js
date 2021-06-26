const fs = require('fs');
const chalk = require("chalk")

module.exports = (client) => {
    const load = dirs => {
        const logs = fs.readdirSync(`./logs/${dirs}`).filter(logs => logs.endsWith('.js'));
        for (let file of logs) {
            const logs = require(`../logs/${dirs}/${file}`);
            let logsName = file.split('.')[0];
            console.log(chalk.green(`Chargement des Logs: ` + logsName + " -> En Ligne !"))
            client.on(logsName, logs.bind(null,client));
        };
    }
    ['channel'].forEach(logs => load(logs));
};