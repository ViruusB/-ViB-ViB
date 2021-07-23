const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

/*const isFirstCharNumeric = c => /\d/.test(c);*/

module.exports = {
  config: {
      name: "reportu",
      aliases: ["reportu", "reportuser", "reportutilisateur"],
      usage: "@utilisateur <raison et/ou lien du message>",
      category: "General",
      description: "Permet de reporter un utilisateur",
      accessableby: "DISPONIBLE",
  },
    
  run: async (client, message) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    if(message.author.bot) return;
     if(message.channel.type === "dm") return;
   
     let messageArray = message.content.split(" ");
     let args = messageArray.slice(1);
   
          if (message.length == 1){
              if (message[0].charAt(0) == config.prefix) 
                  message[0] = message[0].slice(1);
   
         } 
   
       let errmention = new MessageEmbed()
       .setColor("#bc0000")
       .setDescription(`Tu dois mentionner un utilisateur \n\`\`${client.config.PREFIX}report @utilisateur <raison et/ou lien du message>\`\``)
       message.delete().catch(O_o=>{});
   
       const member = message.mentions.users.first();
       let mention = member || message.guild.members.cache.get(args[0]);;
       if(!mention) return message.channel.send(errmention);
   
       let reponsebfembed = new MessageEmbed()
       .setColor("#bc0000")
       .setDescription(`Tu dois définir une raison \n\`\`${client.config.PREFIX}report @utilisateur <raison et/ou lien du message>\`\``)
       message.delete().catch(O_o=>{});
   
       let reason = message.guild.members.cache.get([1]) || args.join(" ").slice(22);
       if(!reason) return message.channel.send(reponsebfembed) || message.delete(3600).catch(O_o=>{}); 
   
       let reportEmbed = new MessageEmbed()
       .setAuthor(`Report de: ${message.author.tag} - ${message.author.id}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
       /*.setColor("#15f153")
       .setThumbnail(client.user.displayAvatarURL())
       .addField(
        `**__${message.author}__**`
        `***∙ Par:*** \`${message.author} ID : ${message.author.id}\`
        ***∙ Canal:*** \`${message.channel}\` 
        ***∙ Le:*** \`${message.createdAt}\`
        ***∙ Raison:*** \`${reason}\`
        `
       )*/
       .setColor("RANDOM")
       .addField("Canal :", message.channel)
       .addField("Raison :", reason)
       .setFooter(`Date: ${message.createdAt}`);
   
       let canalerror = new MessageEmbed()
       .setColor("#bc0000")
       .setDescription("\`\`Erreur: Aucun canal nommé ***report*** trouvé. \nMerci de contacter un Administrateur.\`\`")
       message.delete().catch(O_o=>{});
   
       const reportschannel = client.channels.cache.find(channel => channel.name === "report");
       if(!reportschannel) return message.channel.send(canalerror);
   
       const reportutilisateur = message.author.tag;
       let reponsebvembed = new MessageEmbed()
       .setAuthor(`Validation - ${reportutilisateur}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
       .setColor("#15f153")
       .setDescription("Merci d'avoir report ce membre. \nCe report sera vérifié par l'équipe du discord.");
       message.channel.send(reponsebvembed);
   
       message.delete().catch(O_o=>{});  
       reportschannel.send(reportEmbed);
       return; 
  
}}