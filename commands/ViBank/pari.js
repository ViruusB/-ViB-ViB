const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "pari",
        aliases: ["pari", "coinflip"],
        usage: "<nombre> <pile ou face>",
        category: "ViBank",
        description: "Permet de faire des paris.",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      let prefix = client.config.PREFIX
  const name = {
    "Pile": "Pile",
    "p": "Pile",
    "pile": "Pile",

    "Face": "Face",
    "f": "Face",
    "face": "Face"
  };
 
  const game = {
    "1": "Pile",
    "2": "Face"
  };

  const number = {
    "Pile": "1",
    "Face": "2"
  };

  const errorMoneyEmbed = new MessageEmbed()
  .setColor('#c43131')
  .setAuthor(`Pari`, `${message.guild.iconURL()}`)
  .setDescription(`Tu dois entrer une somme supérieur à \`50\` et la face \`pile ou face\`. \n\`Utilisation ${prefix}pari <nombre> <face>.\``)

  const errorFaceEmbed = new MessageEmbed()
  .setColor('#c43131')
  .setAuthor(`Pari`, `${message.guild.iconURL()}`)
  .setDescription(`Tu dois entrer une somme supérieur à \`50\` et la face \`pile ou face\`. \n\`Utilisation ${prefix}pari <nombre> <face>.\``)

  const errorNoMoneyEmbed = new MessageEmbed()
  .setColor('#c43131')
  .setAuthor(`Pari`, `${message.guild.iconURL()}`)
  .setDescription(`Tu n'as pas assez d'argent pour parier.`)

  if (isNaN(args[0]) || args[0] < 50) return message.channel.send(errorMoneyEmbed);
  if (name[args[1]] === undefined) return message.channel.send(errorFaceEmbed);
  
  const money = db.fetch(`money_${message.author.id}`);
  if (money < args[0]) return message.channel.send(errorNoMoneyEmbed);

  const flip = Math.floor(Math.random()*2) + 1;

  const embed = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`Lancé du pari`, `${message.guild.iconURL()}`)
    .setDescription(`Tu as effectué un pari de **${args[0]}** sur **${name[args[1]]}** !`)
    .addField(`La pièce est tombée sur :`, game[flip], false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))

  if (number[name[args[1]]] == flip) {

    db.add(`money_${message.author.id}`, args[0]);
    embed.addField(`Tu as gagné ton pari.`, `Tu as remporté ${args[0]} ViBCoins !`, false);

  } else if (number[name[args[1]]] !== flip) {

    db.add(`money_${message.author.id}`, `-${args[0]}`);
    embed.addField(`Tu as perdu ton pari.`, `Tu as perdu ${args[0]} ViBCoins !`, false);

  };
  return message.channel.send(embed);

}}