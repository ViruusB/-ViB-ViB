const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const chalk = require ("chalk");

module.exports = {
    config: {
        name: 'binaire',
        aliases: ["binaire"],
        usage: 'votre_texte',
        category: "Fun",
        description: 'Montre votre texte en format binaire',
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      setTimeout(() => message.delete(), 3000);
        
      const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
    response = await axios.get(url);
    data = response.data;
  } catch (e) {
    return message.channel.send(`Une erreur est survenue,  veuillez réessayer`);
  }

  const binary = new MessageEmbed()
  .setAuthor(`${message.author.username}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setDescription("***Texte: ***" + "\n" +` \`\`${message.content.split(" ").splice(1).join(" ")}\`\` `)
    .addField(
      `**__Code Binaire__**`,
      `\`${data.binary}\` `)

  await message.channel.send(binary);

    }
}

