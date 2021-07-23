const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const backup = require("discord-backup");
const chalk = require("chalk");
  backup.setStorageFolder(__dirname+"/backups/");

  module.exports = {
    config: {
        name: "2creerbackup",
        aliases: ["2creerbackup", "creebu"],
        usage: "",
        category: "Admin",
        description: "Créer une sauvegarde de votre serveur Discord",
        accessableby: "DISPONIBLE",
    },
    
      run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    
    let prefix = client.config.PREFIX
    let perms = message.member.hasPermission("ADMINISTRATOR");

    if (!perms)
      return message.channel.send(
       `${message.author}, tu n'as pas la permission d'utiliser la commande \`\`2creerbackup\`\``
      );
    backup
      .create(message.guild, {
        jsonBeautify: true
      })
      .then(backupData => {
        message.author.send(
          new MessageEmbed()
          .setAuthor(`Sauvegarde par ${message.author.username}`, `${message.guild.iconURL()}`)
          .setDescription(`Votre saugarde a été faite avec succès. \nUtilisez ${prefix}chargerbackup ${backupData.id} pour charger la sauvegarde.`)
          .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
          .setColor("RANDOM")

          )
          message.channel.send(
          new MessageEmbed()
          .setAuthor(`Sauvegarde par ${message.author.username}`, `${message.guild.iconURL()}.`)
          .setDescription(`Votre saugarde a été faite avec succès.\n**L'ID de le sauvegarde a été envoyé en message privé.**`)
          .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
          .setColor("RANDOM")
          );
      });
    }
  };