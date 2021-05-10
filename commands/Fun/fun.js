const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "fun",
        aliases: ["fun"],
        usage: "",
        category: "Fun",
        description: "Affiche la liste des commandes de 'FUN' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var musicinfo = "Fun"
    let music = new MessageEmbed()
        .setAuthor(`${musicinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`8ball` • `dice` • `morse` • `poll` • `qi` • `rechanime` • `roll` • `say` • `slots` • `timer` • `weather` • `binaire` • `eject` • `emojify` • `emojilist` • `avatar` • `calcul`")
        .setColor("#FFFFFF")
    message.channel.send(music)
    setTimeout(() => message.delete(), 3000);

}
};