const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "moquer",
        aliases: ["moquer"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Se moque d'un utilisateur.",
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
        var moquer = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de se moquer de <@" + member.user.id + "> !")
            .setColor("#34363C")
        message.channel.send(moquer)

        setTimeout(() => message.delete(), 3000);
    }
}
};