const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "admin",
        aliases: ["admin"],
        usage: "",
        category: "Admin",
        description: "Affiche la liste des commandes de 'ADMIN' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var musicinfo = "Admin"
    let admin = new MessageEmbed()
        .setAuthor(`${musicinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`1infobackup` • `2creerbackup` • `3chargerbackup`")
        .setColor("#FFFFFF")
    message.channel.send(admin)
    setTimeout(() => message.delete(), 3000);

}
};