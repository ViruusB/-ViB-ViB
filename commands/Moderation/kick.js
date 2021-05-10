const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "kick",
        aliases: ["kick"],
        usage: "@utilisateur <raison>",
        category: "Moderation",
        description: "Exclus un utilisateur du serveur.",
        accessableby: "MODERATION"
    },

run: async (client, message, args) => {
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.channel.send(" tu n'as pas la permission pour faire ça !");
      } else if(!args[0]){
        message.channel.send("Tu dois entrer un ***@utilisateur*** pour exclure.");
      } else if(!args[1]){
        message.channel.send("Tu dois entrer une ***raison***.");
      } else {
        try {
        let kicked = message.guild.member(message.mentions.users.first()); 
          const kicker = message.author.tag; 
          const reason = args[1]; 
          /*const channel = client.channels.cache.find(channel => channel.name === "●-▌logs");*/ 
          
          if(kicked){
            if(!message.guild.member(kicked).kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur.");
            kicked.kick();
  
            const kick = new MessageEmbed()
              .setColor("RANDOM")
              .setAuthor(`Exclusion du Serveur`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
              .setDescription(`**Raison:** ${reason}`)
              .addField('Utilisateur', `${kicked}`, true)
              .addField('Par', `${kicker}`, true)
              .setTimestamp()

  setTimeout(() => message.delete(), 3000);
            message.channel.send(kick);
          } else{
            message.channel.send("Membre non trouvé.");
          }
        } catch(e) {
          console.error(e); 
        }
      }
    }
  }