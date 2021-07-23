const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "trademoney",
        aliases: ["trademoney", "tmoney"],
        usage: "<@membre> <montant>",
        category: "ViBank",
        description: "Permet de faire de la transaction/echange de ViBCoins",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        
          const errorArgs = new MessageEmbed()
          .setColor('#c43131')
          .setAuthor(`Erreur de Transaction`, `${message.guild.iconURL()}`)
          .setDescription(`Tu dois nommer un membre et le montant. \n\`Utilisation ${prefix}tmoney <@membre> <montant>.\``)
        
          const errorNoMoney = new MessageEmbed()
            .setColor('#91c8ff')
            .setAuthor(`Erreur de Transaction`)
            .setDescription(`Tu n'as pas assez de ViBCoins sur ton compte.`)
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        
          const moneyAuthor = db.fetch(`money_${message.author.id}`);
        
          if (isNaN(args[1]) || args[1].includes('-')) return message.channel.send(errorArgs);
          if (moneyAuthor < args[1]) return message.channel.send(errorNoMoney);
        
          const soldeMention = await db.add(`money_${message.mentions.users.first().id}`, args[1]);
          const soldeAuthor = await db.add(`money_${message.author.id}`, `-${args[1]}`);
        
          const validtmoney = new MessageEmbed()
            .setColor('#3d93d9')
            .setAuthor(`Transaction effectuée`)
            .setDescription(`${message.author} vient de donner ${args[1]} ViBCoins à ${message.mentions.users.first()}`)
            .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
            .addFields(
              {name: `> Solde de ${message.author.username}`, value: `${soldeAuthor} `, inline: true},
              {name: `> Solde de ${message.mentions.users.first().username}`, value: `${soldeMention} `, inline: true}
            )
          return message.channel.send(validtmoney);
        
        }
}