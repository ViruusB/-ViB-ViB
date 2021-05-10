const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "pete",
        aliases: ["pete", "peter"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "A envie de pêter sur un utilisateur.",
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
        var pete = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de péter sur <@" + member.user.id + "> !")
            .setColor("#34363C")
        message.channel.send(pete)

        setTimeout(() => message.delete(), 3000);
    }
}
};