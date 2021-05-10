const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "annonce",
        aliases: ["annonce"],
        usage: "votre_annonce",
        category: "Moderation",
        description: "Passer une annonce encadré.",
        accessableby: "MODERATION"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(" tu n'as pas la permission pour faire ça !");
        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");
        if (!args[0]) {
        var error = new MessageEmbed()
        .setDescription("Merci d'entrer un texte pour effectuer cette commande.")
        .setColor("#F43436")
        message.channel.send(error)
    } else {
        var annonceinfo = "Annonce"
        var annonce = new MessageEmbed()
            .setAuthor(`${annonceinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
            .setDescription(contenu + " @everyone")
            .setColor("RANDOM")
        message.channel.send(annonce)
    setTimeout(() => message.delete(), 3000);
}}}
