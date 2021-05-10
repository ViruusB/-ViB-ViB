const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "chat",
        aliases: ["chat", "cat"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie une image de chat.",
        accessableby: "DISPONIBLE",
    },
  
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const cat = await fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(json => json.file);

    const chat = new MessageEmbed()
        .setImage(cat)

    message.channel.send(chat);
        setTimeout(() => message.delete(), 3000);

}}