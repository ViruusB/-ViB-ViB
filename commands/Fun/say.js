const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "say",
        aliases: ["say", "dis", "dit", "dire", "parle"],
        usage: "votre_phrase",
        category: "Fun",
        description: "Laisse parler le bot à ta place.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    /*if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(" tu n'as pas la permission de faire ça !"); {
        var error_permissions = new MessageEmbed()
            .setDescription("Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES"))*/ {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        if (!args[0]) {
            var error = new MessageEmbed()
                .setDescription("Merci d'entrer un texte pour effectuer cette commande.")
                .setColor("#F43436")
            message.channel.send(error)
        } else {
            var say = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setDescription(thingToEcho)
                .setColor("RANDOM")
            message.channel.send(say)
    setTimeout(() => message.delete(), 3000);
        }
    }
}}