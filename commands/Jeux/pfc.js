const {MessageEmbed} = require('discord.js');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "pfc",
        aliases: ["pfc"],
        usage: "pierre feuille ciseau rock paper scissor r p s",
        category: "Jeux",
        description: "Joue a Pierre/Feuille/Ciseau",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);

  const errorArgs = new MessageEmbed()
  .setColor('#c43131')
  .setAuthor(`Pierre, Feuille, Ciseau`, `${message.guild.iconURL()}`)
  .setDescription(`Tu dois mentionner *pierre*, *feuille*, *ciseau* | *rock*, *paper*, *scissor* | *r*, *p*, *s*`)

  const rps = ['pierre', 'feuille', 'ciseau', 'rock', 'paper', 'scissor', 'â°ï¸', 'ð', 'âï¸', 'r', 'p', 's'];
  if (!rps.includes(args[0])) return message.channel.send(errorArgs);

  const emote = {
    'pierre': 'â°ï¸',
    'â°ï¸': 'â°ï¸',
    'rock' : 'â°ï¸',
    'r': 'â°ï¸',

    'feuille': 'ð',
    'ð': 'ð',
    'paper': 'ð',
    'p': 'ð',

    'ciseau': 'âï¸',
    'âï¸': 'âï¸',
    'scissor': 'âï¸',
    's': 'âï¸',
  };

  const chooseArr = ["â°ï¸", "ð", "âï¸"];
  const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Pierre, Feuille, Ciseau`, `${message.guild.iconURL()}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))

  if ((emote[args[0]] === 'â°ï¸' && botChoice === 'âï¸') || (emote[args[0]] === 'ð' && botChoice === 'â°ï¸') || (emote[args[0]] === 'âï¸' && botChoice === 'ð')) 
  embed.addField(`Tu as gagnÃ© !`, `Ton choix: ${emote[args[0]]} \nMon choix: ${botChoice}`);
  else if (emote[args[0]] === botChoice) embed.addField(`ÃgalitÃ© !`, `Ton choix: ${emote[args[0]]} \nMon choix: ${botChoice}`);
  else embed.addField(`Tu as perdu !`, `Ton choix: ${emote[args[0]]} \nMon choix: ${botChoice}`);

  return message.channel.send(embed);

}}