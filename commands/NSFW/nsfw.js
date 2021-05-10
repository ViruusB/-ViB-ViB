const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "nsfw",
        aliases: ["nsfw"],
        usage: "",
        category: "NSFW",
        description: "Affiche la liste des commandes de 'NSFW' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var musicinfo = "NSFW"
    let nsfw = new MessageEmbed()
        .setAuthor(`${musicinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`anal` • `baka` • `blowjob` • `bondage` • `cum` • `erofeet` • `erokemo` • `eroyuri` • `feet` • `femdom` • `foxgirl` • `futa` • `gifhentai` • `hentai` • `pussy` • `slap` • `thighs` • `porngif` • `girl` • `gifporn`")
        .setColor("#FFFFFF")
    message.channel.send(nsfw)
    setTimeout(() => message.delete(), 3000);

}
};