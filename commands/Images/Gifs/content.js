const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");
const nekos = require("nekos.life");
const {
  sfw: { smug },
} = new nekos();


module.exports = {
    config: {
        name: "content",
        aliases: ["content", "satisfait", "smug"],
        usage: "",
        category: "Images/Gifs",
        description: "Permet de faire une réaction de satisfaction.",
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);

        const { url } = await smug().catch(() => {});

    if (!url) return message.channel.send(`Impossible de se connecter à nekos.life`);

    message.channel.send(
      new MessageEmbed()
        .setImage(url)
    );
  },
}

