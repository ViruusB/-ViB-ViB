const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");
const malScraper = require('mal-scraper');

module.exports = {
    config: {
        name: "rechanime",
        aliases: ["rechanime", "animerech", "searchanime", "animesearch", "rechercheanime", "animerecherche"],
        usage: "<nom_anime>",
        category: "Fun",
        description: "Permet de rechercher un animé",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new MessageEmbed()
      .setAuthor(`Recherche Anime`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
      .setDescription(`***__Recherche sur ${args}__***`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor("RANDOM")
      .addField(
        `**__Détail__**`,
        `***∙ Titre Anglais:*** \`${data.englishTitle}\`
  ***∙ Titre Japonais:*** \`${data.japaneseTitle}\`
  ***. Type:*** \`${data.type}\`
  ***∙ Episodes:*** \`${data.episodes}\`
  ***∙ Notation:*** \`${data.rating}\`
  ***∙ Diffusion:*** \`${data.aired}\`
  ***∙ Note:*** \`${data.score}\`
  ***∙ Link:*** ${data.url}
  `
  );
  message.channel.send(malEmbed);

  setTimeout(() => message.delete(), 3000);
      /*.addField('Titre Anglais', data.englishTitle)
      .addField('Titre Japonais', data.japaneseTitle)
      .addField('Type', data.type)
      .addField('Episodes', data.episodes)
      .addField('Notation', data.rating)
      .addField('Diffusion', data.aired)
      .addField('Note', data.score)
      .addField('Link', data.url);*/

    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Veuillez entrer un nom valide."
            }}));

}}