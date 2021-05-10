const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "declareamour",
        aliases: ["declareamour", "declareramour", "damo"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Déclare son amour à un utilisateur.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const member = message.mentions.members.first();
    if (!member) {
        var declareramour = new MessageEmbed()
            .setDescription("Merci de mentionner une personne pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(declareramour)
        setTimeout(() => message.delete(), 3000);
    } else {
        var declareramour = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de déclarer son amour pour <@" + member.user.id + ">")
            .setColor("#34363C")
        message.channel.send(declareramour)
        setTimeout(() => message.delete(), 3000);
    }
}
};