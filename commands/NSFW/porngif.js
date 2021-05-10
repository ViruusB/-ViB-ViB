const Discord = require('discord.js');
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "porngif",
        aliases: ["porngif"],
        usage: "anal, amateur, blowjob, etc...",
        description: "Montre des gifs pornographique de votre choix",
        accessableby: "DISPONIBLE"
    },

    run: async (client, msg) => {
        console.log(`${(chalk.green(`${msg.author.username}`))}` +' sur '+ (chalk.magenta(`${msg.guild.name}`)) + ' salon ' + (chalk.magenta(`${msg.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${msg.author.lastMessage}`))+ ']')
        setTimeout(() => msg.delete(), 3000);

    const args = msg.content.split(' ').slice(1);

    if (!msg.channel.nsfw) 
        return msg.channel.send({embed: {
            color: 16734039,
            description: "Vous pouvez utiliser cette commande dans un canal NSFW."
        }})
    if (args.length === 0) return msg.channel.send({embed: {
        color: 16734039,
        description: "Tu dois décider quel type de pornographie tu voudrais voir"
    }})
    const Pornsearch = require('pornsearch');

    try {
      const Searcher = await Pornsearch.search(args.join(' ')).gifs();

      const result = Math.floor(Math.random() * Searcher.length);
      const { url } = Searcher[result - 1];

      const porngif = new Discord.MessageEmbed()
        .setImage(url)
        .setColor('#ff0000')
        /*.setURL(url)*/

      return msg.channel.send({
        porngif
      });
    }
    catch (error) {
      return msg.reply(" impossible de trouver des gifs à ta demande");
    }
  }
};