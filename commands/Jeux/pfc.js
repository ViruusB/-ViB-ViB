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

  const rps = ['pierre', 'feuille', 'ciseau', 'rock', 'paper', 'scissor', '⛰️', '📄', '✂️', 'r', 'p', 's'];
  if (!rps.includes(args[0])) return message.channel.send(errorArgs);

  const emote = {
    'pierre': '⛰️',
    '⛰️': '⛰️',
    'rock' : '⛰️',
    'r': '⛰️',

    'feuille': '📄',
    '📄': '📄',
    'paper': '📄',
    'p': '📄',

    'ciseau': '✂️',
    '✂️': '✂️',
    'scissor': '✂️',
    's': '✂️',
  };

  const chooseArr = ["⛰️", "📄", "✂️"];
  const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Pierre, Feuille, Ciseau`, `${message.guild.iconURL()}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))

  if ((emote[args[0]] === '⛰️' && botChoice === '✂️') || (emote[args[0]] === '📄' && botChoice === '⛰️') || (emote[args[0]] === '✂️' && botChoice === '📄')) 
  embed.addField(`Tu as gagné !`, `Ton choix: ${emote[args[0]]} \nMon choix: ${botChoice}`);
  else if (emote[args[0]] === botChoice) embed.addField(`Égalité !`, `Ton choix: ${emote[args[0]]} \nMon choix: ${botChoice}`);
  else embed.addField(`Tu as perdu !`, `Ton choix: ${emote[args[0]]} \nMon choix: ${botChoice}`);

  return message.channel.send(embed);

}}