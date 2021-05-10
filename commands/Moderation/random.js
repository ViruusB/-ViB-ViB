const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "random",
        aliases: ["random"],
        usage: "",
        category: "Moderation",
        description: "Choisi un utilisateur aléatoirement.",
        accessableby: "MODERATION"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(" tu n'as pas la permission pour faire ça !");

var members = [];
  
message.guild.members.cache.forEach((member) => {
  if (!member.user.bot)
    members.push(member);  
});

var randomUser = members[Math.floor(Math.random() * members.length)];
var randomAuthor = message.author.username

return message.channel.send({embed: {
    color: 3447003,
    description:`${randomUser}` + " vous avez été choisi par: " + `${randomAuthor}`
}})
}}