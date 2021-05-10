const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "ftp",
        aliases: ["ftp", "tfp", "toutfaitpeter", "faittoutpeter"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "A envie de tout faire pêter.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var ftp = new MessageEmbed()
        .setDescription("<@" + message.author.id + "> a tout fait péter !")
        .setColor("#34363C")
    message.channel.send(ftp)

        setTimeout(() => message.delete(), 3000);
}
};