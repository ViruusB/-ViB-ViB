const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "kiss",
        aliases: ["kiss", "bisou", "bisous"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Fait un bisou à un utilisateur.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new MessageEmbed()
            .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_mentions)
        setTimeout(() => message.delete(), 3000);
    } else {
        var kiss_embed = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de faire un bisous à " + "<@" + member.user.id + "> !")
            .setColor("#34363C")
        message.channel.send(kiss_embed)

        setTimeout(() => message.delete(), 3000);
    }
}
};