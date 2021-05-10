const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "koala",
        aliases: ["koala"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie une image de koala.",
        accessableby: "DISPONIBLE",
    },
  
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json());

    const koala = new MessageEmbed()
        .setImage(link)

    message.channel.send(koala);
        setTimeout(() => message.delete(), 3000);

}}