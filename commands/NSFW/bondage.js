const Discord = require('discord.js');
const superagent = require('superagent');
const chalk = require("chalk")

module.exports = {
    config: {
        name: "bondage",
        aliases: ["bondage"],
        usage: "",
        description: "Montre des photos de bondage animé.",
        accessableby: "+18",
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        if (!message.channel.nsfw) 
        return message.channel.send({embed: {
            color: 16734039,
            description: "Vous pouvez utiliser cette commande dans un canal NSFW."
        }})

superagent.get('https://shiro.gg/api/images/nsfw/bondage')
    .end((err, response) => {
  const bondage = new Discord.MessageEmbed()
  .setTitle("Bondage")
  .setImage(response.body.url)
  .setColor("RANDOM")
  .setURL(response.body.url);
message.channel.send(bondage);

setTimeout(() => message.delete(), 3000);
})
}
}

