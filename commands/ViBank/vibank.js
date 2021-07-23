const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "vibank",
        aliases: ["vibank"],
        usage: "",
        category: "vibank",
        description: "Affiche la liste des commandes de 'VIBANK' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var vibankinfo = "ViBank"
    let vibank = new MessageEmbed()
        .setAuthor(`${vibankinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`bonus • daily • leaderboard • pari • gestionmoney • gestionor • trademoney • tradeor`")
        .setColor("#FFFFFF")
    message.channel.send(vibank)
    setTimeout(() => message.delete(), 3000);

}
};