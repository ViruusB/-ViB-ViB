const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "music",
        aliases: ["music"],
        usage: "",
        category: "Music",
        description: "Affiche la liste des commandes de 'MUSIC' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var musicinfo = "Musique"
    let music = new MessageEmbed()
        .setAuthor(`${musicinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`leave` • `loop` • `lyrics` • `nowplaying` • `pause` • `play` • `playlist` • `queue` • `remove` • `resume` • `search` • `shuffle` • `skip` • `skipto` • `stop` • `volume`")
        .setColor("#FFFFFF")
    message.channel.send(music)
    setTimeout(() => message.delete(), 3000);

}
};