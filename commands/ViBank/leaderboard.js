const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const chalk = require("chalk");

module.exports = {
    config: {
        name: "leaderboard",
        aliases: ["leaderboard", "lb"],
        usage: "",
        category: "ViBank",
        description: "Affiche le classement de l'argent / Or",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

  const money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data);
  //const reputation = db.all().filter(data => data.ID.startsWith(`reputation`)).sort((a, b) => b.data - a.data);
  const or = db.all().filter(data => data.ID.startsWith(`or`)).sort((a, b) => b.data - a.data);

  if (!args[0]) {

    var finalLbmoney = '';
    for (var i in money) finalLbmoney += `\`${money.indexOf(money[i])+1}-\` <@${money[i].ID.split('_')[1]}> - ${money[i].data}\n`;

    /*var finalLbrep = '';
    for (var i in reputation) finalLbrep += `\`${reputation.indexOf(reputation[i])+1}-\` <@${reputation[i].ID.split('_')[1]}> - ${reputation[i].data}\n`*/

    var finalLbor = '';
    for (var i in or) finalLbor += `\`${or.indexOf(or[i])+1}-\` <@${or[i].ID.split('_')[1]}> - ${or[i].data}\n`;

    const LBembed = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`Classement`, `${message.guild.iconURL()}`)
      .setDescription(`__**Argent**__
      **${finalLbmoney}**
      __**Or**__
      **${finalLbor}**`)

    return message.channel.send(LBembed);
  };
}}