const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: "karma",
        aliases: ["karma"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie un gif aléatoire de Karma.",
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
        let res = await fetch('https://api.deltaa.me/karma')
        let data = await res.json()

    let gifkarma = new MessageEmbed()
        .setImage(data.url);
    message.channel.send(gifkarma);
        
    }
}

