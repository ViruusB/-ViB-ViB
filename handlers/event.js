const fs = require('fs');
const chalk = require("chalk")

module.exports = (client) => {
    const load = dirs => {
        const events = fs.readdirSync(`./events/${dirs}`).filter(events => events.endsWith('.js'));
        for (let file of events) {
            const events = require(`../events/${dirs}/${file}`);
            let eventName = file.split('.')[0];
            console.log(chalk.green(`Chargement de l'évènement: ` + eventName + " -> En Ligne !"))
            client.on(eventName, events.bind(null,client));
        };
    };
    ['client', 'guild'].forEach(events => load(events));
};