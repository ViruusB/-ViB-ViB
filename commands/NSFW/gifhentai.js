const superagent = require("superagent");
const Discord = require('discord.js')
const chalk = require("chalk")

module.exports = {
    config: {
        name: "gifhentai",
        aliases: ["gifhentai"],
        usage: "",
        category: "NSFW",
        description: "Montre des gif hentai animé.",
        accessableby: "+18"
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        if (!message.channel.nsfw) 
        return message.channel.send({embed: {
            color: 16734039,
            description: "Vous pouvez utiliser cette commande dans un canal NSFW."
        }})
        superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
        .end((err, response) => {
        const gifhentai = new Discord.MessageEmbed()
        .setTitle("Gif Hentai")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setURL(response.body.url);
    message.channel.send(gifhentai);
    setTimeout(() => message.delete(), 3000)
        })}}