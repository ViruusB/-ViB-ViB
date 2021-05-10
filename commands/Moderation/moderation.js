const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "moderation",
        aliases: ["moderation"],
        usage: "",
        category: "Moderation",
        description: "Affiche la liste des commandes de 'MODERATION' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var musicinfo = "Moderation"
    let music = new MessageEmbed()
        .setAuthor(`${musicinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`annonce` • `ban` • `clear` • `id` • `kick` • `mute` • `prune` • `random` • `unmute` • `warn` • `chuser` • `moderation`")
        .setColor("#FFFFFF")
    message.channel.send(music)
    setTimeout(() => message.delete(), 3000);

}
};