const { MessageEmbed } = require("discord.js")
const chalk = require("chalk");

module.exports = {
    config: {
        name: "redtube",
        aliases: ["redtube"],
        usage: "<catégorie>",
        category: "NSFW",
        description: "Affiche une vidéo pornographique de la catégorie de son choix",
        accessableby: "+18",
    },
    
      run: async (client, message) => {

    const args = message.content.split(' ').slice(1);
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (!message.channel.nsfw) 
    return message.channel.send({embed: {
        color: 16734039,
        description: "Vous pouvez utiliser cette commande dans un canal NSFW."
    }})

    if (args.length === 0)
    return message.channel.send({embed: {
        color: 16734039,
        description: `${message.author}, tu dois décider quel type de pornographie tu voudrais voir`}}) 

    const Pornsearch = require('pornsearch');

    try {
      const Searcher = new Pornsearch(args.join(' '), 'redtube');
      const videos = await Searcher.videos();

      const result = Math.floor(Math.random() * videos.length);

      const { url } = videos[result - 1];
      const thumbnail = videos[result - 1].thumb;
      const { title } = videos[result - 1];
      const { duration } = videos[result - 1];

      const durationembed = (`${duration}`);
      const redtubecmd = new MessageEmbed()
        .setAuthor(`Recherche RedTube`, `${message.guild.iconURL()}`)
        .setDescription(`__**Résultat**__
        **•** \`Titre:\` **${title}**
        **•** \`Lien:\` **${url}**
        **•** \`Durée:\` **${durationembed}**`)
        .setThumbnail(thumbnail)
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}));
      return message.channel.send({redtubecmd});
    }
    catch (error) {
      return message.reply("Impossible de trouver la vidéo à ta demande");
    }
  }
};