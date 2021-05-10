const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  config: {
      name: "xbox",
      aliases: ["xbox"],
      usage: "",
      category: "Roles",
      description: "Permet d'obtenir le rôle XBOX.",
      accessableby: "DISPONIBLE"
  },

  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    let prefix = client.config.PREFIX
    if (message.content[0] === prefix) {
      if (message.content === prefix + 'xbox') {
        let role = message.guild.roles.cache.find(r => r.name === 'xbox');
        if (message.member.roles.cache.find(r => r.name === 'xbox')) {
          message.member.roles.remove(role);
          message.reply(`n'a plus le rôle **XBOX**`);
        } else {
          message.member.roles.add(role);
          message.reply(`a obtenu le rôle **XBOX**`);
        }
      }
    }
  }}