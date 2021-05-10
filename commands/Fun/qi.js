const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "qi",
        aliases: ["qi", "iq"],
        usage: "",
        category: "Fun",
        description: "Défini votre QI aléatoire.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
try {

const iq = Math.floor(Math.random() * 226);
const embed = new MessageEmbed()
  .setAuthor(`${message.author.username}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
  .setDescription("Votre QI est défini à:`" + iq + "`")
  .setColor(`RANDOM`)
message.channel.send(embed);
        setTimeout(() => message.delete(), 3000);
} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Une erreur s'est produite, veuillez réessayer."
    }})
    setTimeout(() => message.delete(), 3000);
  }
}}