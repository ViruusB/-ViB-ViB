const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "envie",
        aliases: ["envie"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Dit avoir envie d'un utilisateur.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const member = message.mentions.members.first();
    if (!member) {
        var envie = new MessageEmbed()
            .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(envie)
        setTimeout(() => message.delete(), 3000);
    } else {
        var envie = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> a envie de <@" + member.user.id + "> !")
            .setColor("#34363C")
        message.channel.send(envie)

        setTimeout(() => message.delete(), 3000);
    }
}

};