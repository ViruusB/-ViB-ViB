                                                                       
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const backup = require("discord-backup");
const chalk = require("chalk");
  backup.setStorageFolder(__dirname+"/backups/");
  
  module.exports = {
    config: {
        name: "1infobackup",
        aliases: ["1infobackup", "infobu"],
        usage: "ID",
        category: "Admin",
        description: "Affiche les informations de la sauvegarde de votre serveur Discord",
        accessableby: "ADMIN",
    },
    
      run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

        let backupID = args[0];
        if(!backupID){
            return message.channel.send(`${message.author}, vous devez spécifier un ID de sauvegarde valide`);
        }
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${(dd[1]?dd:"0"+dd[0])}/${(mm[1]?mm:"0"+mm[0])}/${yyyy}`;
            let infobackup = new MessageEmbed()
                .setAuthor(`Information du BackUp`, `${message.guild.iconURL()}`)
                .setDescription(`__**Information Général**__
      **•** \`ID de Sauvegarde:\` **${backupInfos.id}**
      **•** \`ID du Serveur:\` **${backupInfos.data.guildID}**
      **•** \`Taille:\` **${backupInfos.size} mb**
      **•** \`Créé le:\` **${formatedDate}**
      **•** \`Région:\` **${backupInfos.data.region}**`)
                .setColor("RANDOM");
                message.channel.send(infobackup);
        }).catch((err) => {
            return message.channel.send("Aucune sauvegarde trouvée pour `"+backupID+"`");
        });
    }
  };