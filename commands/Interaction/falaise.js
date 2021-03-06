const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "falaise",
        aliases: ["falaise"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Fait tomber un utilisateur d'une falaise.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const member = message.mentions.members.first();
    if (!member) {
        var error_nomentions = new MessageEmbed()
            .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_nomentions)
        setTimeout(() => message.delete(), 3000);
    } else {
        var falaise = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de jeter <@" + member.user.id + "> d'une falaise !")
            .setColor("#34363C")
        message.channel.send(falaise)

        setTimeout(() => message.delete(), 3000);
    }
}
};