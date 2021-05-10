const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");
const superagent = require('superagent')

module.exports = {
    config: {
        name: "neko",
        aliases: ["neko"],
        usage: "",
        category: "Images/Gifs",
        description: "Renvoie une image Neko.",
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      setTimeout(() => message.delete(), 3000);
  
        superagent.get('https://shiro.gg/api/images/neko')
        .end((err, response) => {
      const nekoimg = new MessageEmbed()
      .setImage(response.body.url)
      .setColor("RANDOM")
    .setURL(response.body.url);
  message.channel.send(nekoimg);
            });
}
}