const ms = require('ms');
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "timer",
        aliases: ["timer", "time", "temps"],
        usage: "<1s ou m ou h>",
        category: "Fun",
        description: "Active une minuterie",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    let Timer = args[0];

    if (!args[0]) {
        return message.channel.send("```Utilisation : -timer <1s ou m ou h>```");
    }

    if (args[0] <= 0) {
        return message.channel.send("```Utilisation : -timer <1s ou m ou h>```");
    }

    message.channel.send(message.author.toString() + "\`\`\`css\n" + " Minuterie démarrée pour: " + `${ms(ms(Timer), { long: true })}\n\`\`\` `)

    setTimeout(function () {
        message.channel.send(message.author.toString() + "\`\`\`css\n" + `Le temps est écoulé ! ` + "\n" + `Timer: ${ms(ms(Timer), { long: true })}\n\`\`\` `)

    }, ms(Timer));
        setTimeout(() => message.delete(), 3000);
}
}