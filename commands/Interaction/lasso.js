const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "lasso",
        aliases: ["lasso"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Attrape un utilisateur.",
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
        var lasso = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient d'attraper au lasso' <@" + member.user.id + "> !")
            .setColor("#34363C")
        message.channel.send(lasso)

        setTimeout(() => message.delete(), 3000);
    }
}
};