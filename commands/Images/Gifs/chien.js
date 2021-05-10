const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "chien",
        aliases: ["chien", "dog"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie une image de chien.",
        accessableby: "DISPONIBLE",
    },
  
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => json.message);

    const chien = new MessageEmbed()
        .setImage(dog)

    message.channel.send(chien);
        setTimeout(() => message.delete(), 3000);
}}