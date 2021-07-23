const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const {BONUSMONEY} = require('../../util/bonusmoney');
const {BONUSOR} = require('../../util/bonusor');
const ms = require('ms');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "bonus",
        aliases: ["bonus"],
        usage: "",
        category: "ViBank",
        description: "Obtiens ton argent hebdomadaire",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

  const bonus = await db.fetch(`bonus_${message.author.id}`);
  
  if (bonus !== null && BONUSMONEY.timeout - (Date.now() - bonus) > 0) {
    
    const time = BONUSMONEY.timeout - (Date.now() - bonus);

    const errorBonnus = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`Bonus de ${message.author.username}`, `${message.guild.iconURL()}`)
      .setDescription(`Tu as déjà récupéré ton argent hebdomadaire. Reviens dans **${ms(time)}**`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    return message.channel.send(errorBonnus);

  } else {

    db.add(`bonusmoney_${message.author.id}`, BONUSMONEY.amount);
    db.add(`bonusor_${message.author.id}`, BONUSOR.amountor);
    db.set(`bonus_${message.author.id}`, Date.now());

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`Bonus de ${message.author.username}`, `${message.guild.iconURL()}`)
      .setDescription(`**${BONUSMONEY.amount}** ViBCoins et **${BONUSOR.amountor}** Or ont été crédités sur ton compte !`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    return message.channel.send(embed);

  };
}}