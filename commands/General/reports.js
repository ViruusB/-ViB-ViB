const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
  config: {
      name: "reports",
      aliases: ["reports", "reportserveur", "reportserv"],
      usage: "<votre_texte>",
      category: "General",
      description: "Permet de reporter un problème ou un bug sur le serveur.",
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

    let reponsebfembed = new MessageEmbed()
    .setColor("#bc0000")
    .setDescription(`Tu dois définir un texte \n\`\`${client.config.PREFIX}reportserv <votre_texte>\`\``)
    message.delete().catch(O_o=>{});

    let reportbug = message.guild.members.cache.get([0]) || args.join(" ").slice();
    if(!reportbug) return message.channel.send(reponsebfembed) || message.delete(3600).catch(O_o=>{}); 

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
       .addField("Raison du problème/bug:", reportbug)
       .setFooter(`Date: ${message.createdAt}`);

       let canalerror = new MessageEmbed()
       .setColor("#bc0000")
       .setDescription("\`\`Erreur: Aucun canal nommé ***report-bug*** trouvé. \nMerci de contacter un Administrateur.\`\`")
       message.delete().catch(O_o=>{});

    const reportschannel = client.channels.cache.find(channel => channel.name === "report-bug");
    if(!reportschannel) return message.channel.send(canalerror);

    const reportutilisateur = message.author.tag;
    let reponsebvembed = new MessageEmbed()
       .setAuthor(`Validation - ${reportutilisateur}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
       .setColor("#15f153")
       .setDescription("Merci d'avoir report votre problème/bug. \nCe report sera vérifié par l'équipe du discord.");
       message.channel.send(reponsebvembed);

    message.delete().catch(O_o=>{});    
    reportschannel.send(reportEmbed);
    return;

}}