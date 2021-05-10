const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "fakemute",
        aliases: ["fakemute"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Fait un fakemute à un utilisateur.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const member = message.mentions.members.first();
    if (!member) {
        var error = new MessageEmbed()
            .setDescription("Merci de mentionner un utilisateur.")
            .setColor("#DD2E44")
        message.channel.send(error)
        setTimeout(() => message.delete(), 3000);
    }
    if (member) {
        var fakemute = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de tenter de mute " + "<@" + `${member.user.id}` + "> mais a échoué !")
            .setThumbnail("http://image.noelshack.com/fichiers/2018/43/6/1540646885-muted.png")
            .setColor("#000000")
        message.channel.send(fakemute)

        setTimeout(() => message.delete(), 3000);
    }
}
};