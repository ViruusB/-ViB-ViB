const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "warn",
        aliases: ["warn", "warning", "avertissement", "avert"],
        usage: "@utilisateur",
        category: "Moderation",
        description: "Averti un utilisateur.",
        accessableby: "MODERATION"
    },

run: async (client, message) => {
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(" tu n'as pas la permission pour faire ça !");
  //let reason = (args.slice(1).join(' ') || 'Aucune raison spécifiée !');
  let args = message.content.split(" ").slice(2);
  let reason = args.join(" ")
  let user = message.mentions.users.first();
  if (!user) return message.channel.send("\`\`\`fix\nMerci de mentionner un utilisateur et une raison pour avertir.\n\`\`\`");
  if(!args[0]) return message.channel.send("\`\`\`fix\nMerci de donner une raison pour envoyer un avertissement.\n\`\`\`");

  let dmsWarn = new MessageEmbed()
    .setAuthor('Avertissement', 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
    .setColor('#fc052e')
    .addField('Serveur: ', message.guild.name)
    .addField('Averti par: ', message.author.tag)
    .addField('Raison:', reason);

  user.send(dmsWarn);

  setTimeout(() => message.delete(), 3000);

  message.channel.send(` \`\`\`fix\n${user.tag} a été averti !\n\`\`\``);
}
}