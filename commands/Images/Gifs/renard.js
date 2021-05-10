const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "renard",
        aliases: ["renard", "fox"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie une image de renard.",
        accessableby: "DISPONIBLE",
    },
  
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const fox = await fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(json => json.image);

    const renard = new MessageEmbed()
        .setImage(fox)

    message.channel.send(renard);
    setTimeout(() => message.delete(), 3000);
}}