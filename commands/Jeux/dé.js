const {MessageEmbed} = require('discord.js');
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "dé",
        aliases: ["dé"],
        usage: "",
        category: "Jeux",
        description: "Choisi un nombre aléatoire entre 1 et 10",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);

  const number = {
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "10": ":keycap_ten: ",
  };

  const dé1 = Math.floor(Math.random()*10) + 1;

  const dé = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`Lancé de dé`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`__Résultat du lancé__`, number[dé1], false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    message.channel.send(dé);

}}
