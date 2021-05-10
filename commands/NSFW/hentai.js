const Discord = require('discord.js');
const superagent = require("superagent");
const chalk = require("chalk")

module.exports = {
    config: {
        name: "hentai",
        aliases: ["hentai"],
        usage: "",
        description: "Montre des photos de hentai.",
        accessableby: "+18"
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        if (!message.channel.nsfw) {
            return message.channel.send({embed: {
                    color: 16734039,
                    description: "Vous pouvez utiliser cette commande dans un canal NSFW."
                }})
        }
        superagent.get('https://shiro.gg/api/images/nsfw/hentai')
            .end((err, response) => {
          const hentai = new Discord.MessageEmbed()
          .setTitle("Hentai")
          .setImage(response.body.url)
          .setColor("RANDOM")
          .setURL(response.body.url);
      message.channel.send(hentai);

    setTimeout(() => message.delete(), 3000);
        })
    }
}

