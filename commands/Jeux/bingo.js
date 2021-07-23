const {MessageEmbed, MessageCollector} = require('discord.js');
const ms = require('ms');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "bingo",
        aliases: ["bingo"],
        usage: "nombre",
        category: "Jeux",
        description: "Permet de jouer au BINGO",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);

    const errorArgs = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`Bingo`, `${message.guild.iconURL()}`)
    .setDescription(`Tu dois rentrer un nombre entre 5 et 500 pour faire ça.`)

  let embedStart = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`Bingo`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`J'ai choisi un nombre compris entre 1 et ${parseInt(args[0])}.`)
    .setFooter(`À vous de retrouver ce nombre en 1 minute.`)

  if (isNaN(args[0]) || Math.round(parseInt(args[0])) < 5 || Math.round(parseInt(args[0])) > 500) return message.channel.send(errorArgs);

  const max = parseInt(args[0]);
  const rdm = Math.floor(Math.random()*max) + 1;

  message.channel.send(embedStart);

  const collector = new MessageCollector(message.channel, m => !m.author.bot, {
    time: ms('60s')
  });
  
  collector.on('collect', async msg => {
    if (msg.content === rdm.toString()) {

      const embedCollect = new MessageEmbed()
        .setColor('#91c8ff')
        .setAuthor(`Bingo`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
        .addField(`Le nombre que j'ai choisi est: \`${rdm}\` !`, `Bravo à ${msg.author} qui a trouvé.`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      message.channel.send(embedCollect);
      return collector.stop(msg.author.username);

    };
  });
  
  collector.on('end', (_collected, reason) => {
    if (reason === 'time') {

      const embedEnd = new MessageEmbed()
        .setColor('#91c8ff')
        .setAuthor(`Bingo`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
        .setDescription(`Le nombre que j'ai choisi est: \`${rdm}\` mais personne ne l'a trouvé !`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      return message.channel.send(embedEnd);

    };
  });
}}