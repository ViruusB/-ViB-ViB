const chalk = require('chalk');

module.exports = {
    config: {
        name: "id",
        aliases: ["id"],
        usage: "ou ;id @utilisateur",
        category: "Moderation",
        description: "Donne l'ID de la personne voulu.",
        accessableby: "MODERATION"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" tu n'as pas la permission de faire ça !");
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    message.channel.send(` \`\`\`js\nID: ${member.user.id}\n\`\`\` `);
    setTimeout(() => message.delete(), 3000);

}}