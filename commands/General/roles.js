const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "roles",
        aliases: ["roles", "listrole", "listerole", "listroles", "listeroles"],
        usage: "",
        category: "General",
        description: "Pour afficher les rôles disponible.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

    ROLEZZ = message.guild.roles.cache.array()

    var ROLES = "";

    ROLEZZ.forEach(function (element) {
        ROLES += element.name + "\n"
    });

    var rolesinfo = ("Liste des Rôles")
    let roles = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`${rolesinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
    .addField(
        `**__${message.guild.name}__**`,
        ` \`${ROLES}\` `)

        /*.setAuthor(`${rolesinfo}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .setColor("RANDOM")
        .setDescription(`${ROLES}`)*/

    message.channel.send(roles)

    setTimeout(() => message.delete(), 3000);

    /*message.channel.send("```" + "\n" +
        "---------------------------------" + "\n" +
        "LISTE DES ROLES" + "\n" +
        "---------------------------------" + "\n" +
        `${ROLES}` + "```");
    message.delete();*/

}}