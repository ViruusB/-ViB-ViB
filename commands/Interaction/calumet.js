const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "calumet",
        aliases: ["calumet"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Fume un calumet.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var calumet = new MessageEmbed()
        .setDescription("<@" + message.author.id + "> vient de fumer un calumet !")
        .setColor("#34363C")
    message.channel.send(calumet)
        setTimeout(() => message.delete(), 3000);
}
}