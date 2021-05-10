const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "8ball",
        aliases: ["8ball" ,"huitball", "eightball", "randomball"],
        usage: "votre_texte",
        category: "Fun",
        description: "Renvoie une réponse aléatoire.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
        if (!args.length) return message.channel.send({embed: {
            color: 16734039,
            description: "Tu dois me poser une question pour faire ça."
            }})
        let replies = ["Oui ", " Non ", " Je ne sais pas ", " Demander plus tard ! ", " Je ne suis pas sûr ! ", " Tu me dis ", " Sans aucun doute ", "Impossible de prédire maintenant", "Sans aucun doute",];
     
        let result = Math.floor((Math.random() * replies.length));
        let question = args.join(" ");
     
        let ballembed = new MessageEmbed()
           .setAuthor(`8ball de ${message.author.username}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
           .setColor("RANDOM")
           .addField("__Question__", question)
           .addField("__Réponse__", replies[result]);

        message.channel.send(ballembed)
        }
    }
