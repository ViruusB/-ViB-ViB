const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");
const moment = require("moment");
require('moment-duration-format')

module.exports = {
    config: {
        name: "uptime",
        aliases: ["uptime"],
        usage: "",
        category: "General",
        description: "Affiche la disponibilité du bot.",
        accessableby: "DISPONIBLE"
    },
    run: async (bot, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

        let uptime = moment.duration(bot.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL()
    const botuptime = new MessageEmbed()
        .setAuthor(`[ViB]ViB`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
        .setColor("RANDOM")
        .setDescription(`**[ViB]ViB est actif depuis:** \`${uptime}\`. \n **Latence du bot:** \`${bot.ws.ping} ms\`. \n\n  :exclamation:   **__Attention!__** **[ViB]ViB se redémarre après \`20 à 24 heures\` pour une meilleur qualité **`)
        .setFooter('© ViruusB •', 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .setThumbnail(bicon);
        message.channel.send(botuptime);

    setTimeout(() => message.delete(), 3000);
    }
}