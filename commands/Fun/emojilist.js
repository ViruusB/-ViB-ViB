const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: 'emojilist',
        aliases: ["emojilist", "listemoji", "emolist", "listemo"],
        usage: '',
        category: "Fun",
        description: 'Montre tous les emojis disponible sur le serveur',
        accessableby: "DISPONIBLE",
    },
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    setTimeout(() => message.delete(), 3000);
    
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;

    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new MessageEmbed()
    .setAuthor(`Liste des Emojis sur ${message.guild.name}`, `${message.guild.iconURL()}` )
      .setDescription(
        `**Gifs [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}`
      )
      .setColor("RANDOM");

    if (Embed.length > 1000) {
      return message.channel.send(
        `Vous ne pouvez pas éxcéder 1000 caractères.`
      );
    } else {
      message.channel.send(Embed);
    }
  },
};
