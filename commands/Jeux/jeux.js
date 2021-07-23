const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "jeux",
        aliases: ["jeux"],
        usage: "",
        category: "Jeux",
        description: "Affiche la liste des commandes de 'JEUX' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var jeuxinfo = "Jeux"
    let jeux = new MessageEmbed()
        .setAuthor(`${jeuxinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`bingo • dé • love • pfc • rps • dice • slots • roll`")
        .setColor("#FFFFFF")
    message.channel.send(jeux)
    setTimeout(() => message.delete(), 3000);

}
};