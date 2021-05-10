const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "general",
        aliases: ["general"],
        usage: "",
        category: "General",
        description: "Affiche la liste des commandes de 'GENERAL' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var musicinfo = "General"
    let music = new MessageEmbed()
        .setAuthor(`${musicinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`contact` • `help` • `invite` • `reports` • `reportu` • `roles` • `servinfo` • `support` • `uptime` • `profil` • `general`")
        .setColor("#FFFFFF")
    message.channel.send(music)
    setTimeout(() => message.delete(), 3000);

}
};