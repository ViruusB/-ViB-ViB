const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "interaction",
        aliases: ["interaction"],
        usage: "",
        category: "Interaction",
        description: "Affiche la liste des commandes 'INTERACTION' disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var interinfo = "Interaction"
    let embed = new MessageEmbed()
        .setAuthor(`${interinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Liste des commandes", "`aime` • `burger` • `calin` • `calumet` • `declareamitie` • `declareamour` • `dynamite` • `ecraser` • `envie` • `fakeban` • `fakemute` • `falaise` • `frapper` • `ftp` • `kiss` • `lasso` • `moquer` • `peine` • `pete`")
        .setColor("#FFFFFF")
    message.channel.send(embed)

    setTimeout(() => message.delete(), 3000);

}
};