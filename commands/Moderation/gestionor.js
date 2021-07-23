const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');

module.exports = {
    config: {
        name: "gestionor",
        aliases: ["gestionor", "gor"],
        usage: "<@membre> <montant> / <@membre> <-montant>",
        category: "moderation",
        description: "Permet de gérer l'or d'un membre.",
        accessableby: "MODERATION",
    },

    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply( ` tu n'as pas la permission d'utiliser la commande \`\`gestionor\`\``);
      let prefix = client.config.PREFIX

  const errorNumber = new MessageEmbed()
  .setColor('#c43131')
  .setAuthor(`Erreur de Transaction ViBankOr`, `${message.guild.iconURL()}`)
  .setDescription(`Tu dois nommer un membre et le montant. \n\`Utilisation ${prefix}gor <@membre> <montant>.\` \nou \n\`Utilisation ${prefix}gor <@membre> <-montant>.\``)

  if (isNaN(args[1])) return message.channel.send(errorNumber);

  const solde = await db.add(`or_${message.mentions.users.first().id}`, args[1]);

  const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Transaction ViBankOr effectuée`, `${message.guild.iconURL()}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (args[1].includes('-')) embed.addField(`Le compte de ${message.mentions.users.first().username} vient d'être débité !`, `**${args[1]}** Or ont été débités du compte de ${message.mentions.users.first()}.\nSon nouveau solde est de ${solde} Or.`, false)
  else if (!args[1].includes('-')) embed.addField(`Le compte de ${message.mentions.users.first().username} vient d'être crédité !`, `**${args[1]}** Or ont été crédité sur le compte de ${message.mentions.users.first()}.\nSon nouveau solde est de ${solde} Or.`, false);

  return message.channel.send(embed);
}}