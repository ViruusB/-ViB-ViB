const { MessageEmbed } = require('discord.js');
const sendError = require('../../util/error');
const chalk = require('chalk');

module.exports = {
  config: {
      name: 'resume',
      aliases: ['relancer'],
      usage: "",
      category: "Music",
      description: "Pour relancer la musique en pause.",
      accessableby: "DISPONIBLE"
  },

  run: async function (client, message, args) {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const serverQueue = message.client.queue.get(message.guild.id);
    setTimeout(() => message.delete(), 3000);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
        .setDescription('▶ | La musique a été relancé.')
        .setColor('YELLOW')
        .setAuthor(
          'Relance',
          'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/lecture.gif'
        );
      return message.channel.send(xd);
    }
    return sendError(
      "Il n'y a aucune musique qui joue actuellement.",
      message.channel
    );
  },
};
