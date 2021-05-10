const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
    config: {
        name: "prune",
        aliases: ["prune"],
        usage: "@utilisateur",
        category: "Moderation",
        description: "Supprime un nombre de messages défini d'un utilisateur",
        accessableby: "MODERATION"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(" tu n'as pas la permission pour faire ça !");
    let user = message.guild.member(message.mentions.users.first());
    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply(' il faut spécifié un ***utilisateur*** et un ***nombre*** entre 1 et 100 !');
    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length = Math.min(args[1], messages.length);

    if (messages.length === 0 || !user) return message.reply(' aucun messages à supprimer de cet utilisateur !');

    if (messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor(`Suppression de message`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
        .setColor("RANDOM")
        .setDescription(`**Action:** Suppression de messages\n**Nombre de messages:** ${args[1]}\n**Utilisateur:** ${args[0]}`);
    message.channel.send(embed)
    setTimeout(() => message.delete(), 3000);
}}
  