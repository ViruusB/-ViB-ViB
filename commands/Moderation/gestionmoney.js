const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');

module.exports = {
    config: {
        name: "gestionmoney",
        aliases: ["gestionmoney", "gmoney", "gvibank", "gestionvibank"],
        usage: "<@membre> <montant> / <@membre> <-montant>",
        category: "Moderation",
        description: "Permet de gérer l'argent d'un membre.",
        accessableby: "MODERATION",
    },

    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply( ` tu n'as pas la permission d'utiliser la commande \`\`gestionmoney\`\``);
      let prefix = client.config.PREFIX

  const errorNumber = new MessageEmbed()
  .setColor('#c43131')
  .setAuthor(`Erreur de Transaction ViBank`, `${message.guild.iconURL()}`)
  .setDescription(`Tu dois nommer un membre et le montant. \n\`Utilisation ${prefix}gmoney <@membre> <montant>.\` \nou \n\`Utilisation ${prefix}gmoney <@membre> <-montant>.\``)

  if (isNaN(args[1])) return message.channel.send(errorNumber);

  const solde = await db.add(`money_${message.mentions.users.first().id}`, args[1]);

  const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Transaction ViBank effectuée`, `${message.guild.iconURL()}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (args[1].includes('-')) embed.addField(`Le compte de ${message.mentions.users.first().username} vient d'être débité !`, `**${args[1]}** ViBCoins ont été débités du compte de ${message.mentions.users.first()}.\nSon nouveau solde est de ${solde} ViBCoins.`, false)
  else if (!args[1].includes('-')) embed.addField(`Le compte de ${message.mentions.users.first().username} vient d'être crédité !`, `**${args[1]}** ViBCoins ont été crédité sur le compte de ${message.mentions.users.first()}.\nSon nouveau solde est de ${solde} ViBCoins.`, false);

  return message.channel.send(embed);
}}