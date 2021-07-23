const fetch = require('node-fetch');
const backup = require("discord-backup");
const chalk = require("chalk");
  backup.setStorageFolder(__dirname+"/backups/");

  module.exports = {
    config: {
        name: "3chargerbackup",
        aliases: ["3chargerbackup", "chargebu"],
        usage: "ID",
        category: "Admin",
        description: "Charger une sauvegarde de votre serveur Discord",
        accessableby: "DISPONIBLE",
    },
    
      run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
          let prefix = client.config.PREFIX
    
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(`${message.author}, tu n'as pas la permission d'utiliser la commande \`\`3chargerbackup\`\``);
        }
        let backupID = args[0];
        if(!backupID){
            return message.channel.send(`${message.author} ,pour charger la sauvegarde: \`Utilisation ${prefix}chargebu <ID>\``);
        }
        backup.fetch(backupID).then(async () => {
            message.channel.send("Lorsque la sauvegarde est chargée, tous les salon, rôles, etc. seront remplacés. Réagissez avec ✅ pour confirmer. Vous avez 20 secondes.").then(m => {
        m.react("✅")
      const filtro = (reaction, user) => {
            return ["✅"].includes(reaction.emoji.name) && user.id == message.author.id;
            };
                m.awaitReactions(filtro, {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch(() => {
                    m.edit("Le temps est écoulé. Le chargement de la sauvegarde a été annulé.");
                }).then(coleccionado=> {
          
        const reaccion = coleccionado.first();
        if(reaccion.emoji.name === "✅"){
                  message.author.send("Votre sauvegarde c'est charger correctement.");
                  backup.load(backupID, message.guild).then(() => {
                      backup.remove(backupID);
                  }).catch((err) => {
                      return message.author.send("Désolé, une erreur s'est produite.");
                  });
        };
    
        })
      })
    });
}};