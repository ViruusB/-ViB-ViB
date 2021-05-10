const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "unmute",
        aliases: ["unmute"],
        usage: "@utilisateur",
        category: "Moderation",
        description: "Enlève le Mute à un utilisateur du serveur.",
        accessableby: "MODERATION"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" tu n'as pas la permission de faire ça !");

    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Mute');

    if (!user.roles.cache.has(muteRole.id)) return message.reply(" l'utilisateur mentionné n'est pas muté !");
    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> n'est plus muté !`);

    const embed = new MessageEmbed()
    .setAuthor("UnMute",  client.user.avatarURL())
    .setColor("#ffa500")
    .setDescription(`**Utilisateur:** <@${user.id}>\n **Action:** UnMute du Serveur\n**Par:** ${message.author.username}`)
    .setTimestamp()

    message.channel.send(embed);
  setTimeout(() => message.delete(), 3000);
}
}