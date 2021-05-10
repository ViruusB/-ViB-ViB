const chalk = require('chalk');

module.exports = {
    config: {
        name: "roll",
        aliases: ["roll", "dé", "dés"],
        usage: "",
        category: "Fun",
        description: "Obtiens un nombre aléatoire entre 0 & 20",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
  message.channel.send(
    `**${message.author.username}**, tu as obtenu un **${
      Math.floor(Math.random() * 20) + 1
    }** !`
  );
    setTimeout(() => message.delete(), 3000);
}};
