const { MessageEmbed } = require('discord.js');
var moment = require('moment');
const chalk = require('chalk');

module.exports = {
  config: {
      name: "servinfo",
      aliases: ["servinfo", "infoserv", "infodiscord", "discordinfo"],
      usage: "",
      category: "General",
      description: "Donne les informations du serveur.",
      accessableby: "DISPONIBLE",
  },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    var infodiscord = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`Information du serveur`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
    .addField(
        `**__${message.guild.name}__**`,
        `***∙ Région:*** \`${message.guild.region}\`
    ***∙ ID:*** \`${message.guild.id}\`
    ***∙ Salon Vocaux:*** \`${message.guild.channels.cache.filter(ch => ch.type === "voice").size}\`
    ***∙ Salon Textes:*** \`${message.guild.channels.cache.filter(ch => ch.type === "text").size}\`
    ***∙ Utilisateurs:*** \`${message.guild.memberCount}\`
    ***∙ Rôles:*** \`${message.guild.roles.cache.size}\`
    ***∙ Emojis:*** \`${message.guild.emojis.cache.size}\`
    ***∙ Création:*** \`${moment(message.channel.guild.createdAt).format('DD/MM/YYYY')}\`
    `
    );
    message.channel.send(infodiscord)
    
    
    /*var infodiscord = new MessageEmbed()
        .setAuthor(`Information du serveur ${message.guild.name}`, message.guild.iconURL())
        .setThumbnail(message.guild.iconURL)
        .addField("• __Propriétaire__ :", ` ${message.guild.owner.user}`, true)
        .addField("• __Région__ :", message.guild.region, true)
        .addField("• __ID__ :", message.guild.id, true)
        .addField("• __Salon Vocaux__", `${message.guild.channels.cache.filter(ch => ch.type === "voice").size}`, true)
        .addField("• __Salon Textes__", `${message.guild.channels.cache.filter(ch => ch.type === "text").size}`, true)
        .addField("• __Utilisateurs :__ ", `**${message.guild.memberCount}** utilisateurs`, true)
        .addField("• __Nombre de rôles__ :", `**${message.guild.roles.cache.size}** rôles`, true)
        .addField("• __Nombre d'émojis :__", `**${message.guild.emojis.cache.size}** émojis`, true)
        .addField("• __Date de création__ :", `${moment(message.channel.guild.createdAt).format('DD/MM/YYYY')}`, true)
        .setColor("RANDOM")
    message.channel.send(infodiscord)*/

    /*var embed = new Discord.MessageEmbed()
            .setColor(9955331)
            .setThumbnail(sicon)
            .setAuthor(message.guild.name, sicon)
            .addField("ID Serveur", ` \`\`\`js\n${message.guild.id}\n\`\`\` `, true)
            .addField("Créé le", ` \`\`\`js\n${moment(message.guild.createdAt).format('DD/MM/YYYY')}\n\`\`\` `, true)
            .addField("Membres", ` \`\`\`js\n${message.guild.memberCount}\n\`\`\` `, true)
            .addField("Rôles", ` \`\`\`js\n${message.guild.roles.cache.size}\n\`\`\` `, true)
            .addField("Salon Textes", ` \`\`\`js\n${message.guild.channels.cache.filter(ch => ch.type === "text").size}\n\`\`\` `, true)
            .addField("Salon Vocaux", ` \`\`\`js\n${message.guild.channels.cache.filter(ch => ch.type === "voice").size}\n\`\`\` `, true)
            .addField("Admin", ` \`\`\`fix\n${message.guild.owner.displayName}\n\`\`\` `, true)
            .addField("Region", ` \`\`\`fix\n${message.guild.region}\n\`\`\` `, true)
            .addField("Bot", ` \`\`\`fix\n${message.guild.name}\n\`\`\` `, true)

        message.channel.send(embed);*/

    setTimeout(() => message.delete(), 3000);
}}
