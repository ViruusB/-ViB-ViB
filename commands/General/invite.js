const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  config: {
      name: "invite",
      aliases: ["invite"],
      usage: "",
      category: "General",
      description: "Permet d'inviter le bot sur ton serveur.",
      accessableby: "DISPONIBLE"
  },

  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    var permissions = 37080128;
    let invite = new MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setAuthor(`Invite ${client.user.username}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setDescription("**Voici les différents liens me concernant.**")
    .addField(
      "Invitation: ", `**[Lien](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)**`, true
    )
    .addField(
      "Discord: ", `**[Lien](https://discord.gg/YC4jNpeQkG)**`, true
    )
    .addField(
      "Support: ", "`-support`", true
    )
    .addField(
      "Contact: ", "`-contact`", true
    )
    .setURL(
      `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`
    )
    .setFooter("© ViruusB •", "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setColor('RANDOM');
    setTimeout(() => message.delete(), 3000);
    return message.channel.send(invite);
}
};