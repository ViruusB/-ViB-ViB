const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "chuser",
        aliases: ["chuser"],
        usage: "@utilisateur",
        category: "Moderation",
        description: "Recherche un utilisateur.",
        accessableby: "MODERATION"
    },

run: async (client, message, args) => {
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
  setTimeout(() => message.delete(), 3000);

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" tu n'as pas la permission de faire ça!");
    let users = client.users;

    let searchTerm = args[0];
    if (!searchTerm) return message.reply(" tu dois entrer un ***Début de Pseudo*** pour rechercher un utilisateur.");

    let matches = users.cache.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

    message.reply("\nVoici ce que j'ai trouvé: \n***" + matches.map(u => u.tag) + "***");

}}