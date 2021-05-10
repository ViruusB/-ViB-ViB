const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");
const superagent = require('superagent');

module.exports = {
    config: {
        name: "hug",
        aliases: ["hug", "calin"],
        usage: "@utilisateur",
        category: "Images/Gifs",
        description: "Renvoie un calin en gif à un utilisateur.",
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/hug");
              const calingif = new MessageEmbed()
             .setColor("RANDOM")
          .setDescription(`${victim} a reçu un calin par ${message.author}`)
          .setImage(body.url)
        message.channel.send(calingif);
        
    }
}

