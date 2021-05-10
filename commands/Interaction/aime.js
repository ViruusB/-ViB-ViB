const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "aime",
        aliases: ["aime"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Dit je t'aime à un utilisateur.",
        accessableby: "DISPONIBLE"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const member = message.mentions.members.first();
    if (!member) {
        var aime = new MessageEmbed()
            .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(aime)
        setTimeout(() => message.delete(), 3000);
    } else {
        var aime = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de dire je t'aime à <@" + member.user.id + "> !")
            .setColor("#34363C")
        message.channel.send(aime)


  setTimeout(() => message.delete(), 3000);
    }
}
}
