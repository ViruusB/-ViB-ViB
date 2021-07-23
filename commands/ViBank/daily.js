const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const {DAILY} = require('../../util/money');
const {DAILYOR} = require('../../util/or');
const ms = require('ms');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "daily",
        aliases: ["daily"],
        usage: "",
        category: "ViBank",
        description: "Obtiens ton argent quotidien",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

  const daily = await db.fetch(`daily_${message.author.id}`);
  
  if (daily !== null && DAILY.timeout - (Date.now() - daily) > 0) {
    
    const time = DAILY.timeout - (Date.now() - daily);

    const errorDaily = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`Daily de ${message.author.username}`, `${message.guild.iconURL()}`)
      .setDescription(`Tu as déjà récupéré ton argent quotidien. Reviens dans **${ms(time)}**`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    return message.channel.send(errorDaily);

  } else {

    db.add(`money_${message.author.id}`, DAILY.amount);
    db.add(`or_${message.author.id}`, DAILYOR.amountor);
    db.set(`daily_${message.author.id}`, Date.now());

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`Daily de ${message.author.username}`, `${message.guild.iconURL()}`)
      .setDescription(`**${DAILY.amount}** ViBCoins et **${DAILYOR.amountor}** Or ont été crédités sur ton compte !`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    return message.channel.send(embed);

  };
}}