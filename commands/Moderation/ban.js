const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "ban",
        aliases: ["ban"],
        usage: "@utilisateur ou ID <raison>",
        category: "Moderation",
        description: "Banni un utilisateur du serveur.",
        accessableby: "MODERATION"
    },

run: async (client, message, args) => {
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    if(!message.member.hasPermission('BAN_MEMBERS')) {
        message.channel.send(" tu n'as pas la permission pour faire ça !");
      } else if(!args[0]){
        message.channel.send("Tu dois entrer un ***@utilisateur*** pour bannir.");
      } else if(!args[1]){
        message.channel.send("Tu dois donner une ***raison***.");
      } else {
        try {
          const banned = await message.mentions.members.first(); 
          const banner = message.author.tag; 
          const reason = args[1]; 
          /*const channel = client.channels.cache.find(channel => channel.name === "mod-logs");*/ 
  
          if(banned){
            if(!message.guild.member(banned).bannable) return message.channel.send("Je ne peux pas exclure cet utilisateur.");
            await banned.ban(); 
  
            const ban = new MessageEmbed()
              .setColor("RANDOM")
              .setAuthor(`Bannissement du Serveur`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
              .setDescription(`**Raison:** ${reason}`)
              .addField('Utilisateur', `${banned}`, true)
              .addField("Par", `${banner}`, true)
              .setTimestamp()
  
  setTimeout(() => message.delete(), 3000);
            message.channel.send(ban);
          } else{
              message.channel.send("Membre non trouvé.");
          }
        } catch(e) {
          console.error(e); 
        }
      }
    }
  }