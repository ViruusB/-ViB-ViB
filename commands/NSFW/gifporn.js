const Discord = require('discord.js')
const get = require('axios')
const chalk = require("chalk")

module.exports = {
    config: {
        name: "gifporn",
        aliases: ["gifporn"],
        usage: "",
        category: "NSFW",
        description: "Montre des gifs pornographique.",
        accessableby: "+18"
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        if (!message.channel.nsfw) 
        return message.channel.send({embed: {
            color: 16734039,
            description: "Vous pouvez utiliser cette commande dans un canal NSFW."
        }})
			get('https://nekobot.xyz/api/image?type=pgif')
				.then(res => {
					const embed = new Discord.MessageEmbed()
  .setTitle("GifPorn")
  .setImage(res.data.message)
  .setColor("RANDOM")
  .setURL(res.data.message);
message.channel.send(embed);
setTimeout(() => message.delete(), 3000)
		})}}