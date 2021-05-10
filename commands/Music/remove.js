const { MessageEmbed } = require('discord.js');
const sendError = require('../../util/error');
const chalk = require('chalk');

module.exports = {
  config: {
      name: 'remove',
      aliases: ['remove', "enlever", "enleve"],
      usage: "<numero>",
      category: "Music",
      description: "Supprimer la chanson de la file d'attente",
      accessableby: "DISPONIBLE"
  },

  run: async function (client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    setTimeout(() => message.delete(), 3000);
    if (!queue)
      return sendError('Aucune chanson est en attente.', message.channel).catch(
        console.error
      );
    if (!args.length)
      return sendError(`Utilisation: \`!remove <numero_dans_la_file>\``);
    if (isNaN(args[0]))
      return sendError(`Utilisation: \`!remove <numero_dans_la_file>\``);
    if (queue.songs.length == 1)
      return sendError('Aucune chanson est en attente.', message.channel).catch(
        console.error
      );
    if (args[0] > queue.songs.length)
      return sendError(
        `La liste est seulement de ${queue.songs.length} chansons !`,
        message.channel
      ).catch(console.error);
    try {
      const song = queue.songs.splice(args[0] - 1, 1);
      sendError(`❌ **|** **\`${song[0].title}\`**`, queue.textChannel).catch(
        console.error
      );
      message.react('✅');
    } catch (error) {
      return sendError(
        `:notes: Une erreur inattendue est apparue.\nType ${error}`,
        message.channel
      );
    }
  },
};
