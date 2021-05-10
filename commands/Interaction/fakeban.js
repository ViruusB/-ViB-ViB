const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "fakeban",
        aliases: ["fakeban"],
        usage: "@utilisateur",
        category: "Interaction",
        description: "Fait un fakeban à un utilisateur.",
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
        var fakeban = new MessageEmbed()
            .setDescription("<@" + message.author.id + "> vient de tenter de bannir " + "<@" + `${member.user.id}` + "> mais a échoué !")
            .setThumbnail("http://image.noelshack.com/fichiers/2018/43/6/1540632505-banned.png")
            .setColor("#E12631")
        message.channel.send(fakeban)

        setTimeout(() => message.delete(), 3000);
    }
}
};