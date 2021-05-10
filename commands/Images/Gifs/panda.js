const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "panda",
        aliases: ["panda"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie une image de panda.",
        accessableby: "DISPONIBLE",
    },
  
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const { link } = await fetch('https://some-random-api.ml/img/panda').then(response => response.json());

    const panda = new MessageEmbed()
        .setImage(link)

    message.channel.send(panda);
        setTimeout(() => message.delete(), 3000);

}}