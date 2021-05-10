const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const chalk = require ("chalk");

module.exports = {
    config: {
        name: 'eject',
        aliases: ["eject"],
        usage: '<@utilisateur>',
        category: "Fun",
        description: 'Eject un utilisateur en mode (Among Us)',
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      setTimeout(() => message.delete(), 3000);
    
         try {
 
const user = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const eject = new MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setTitle(`${message.author.username} a éjecter ${user.username}`)
      .setColor('RANDOM')
      .setImage(`${data.url}`)
      
    message.channel.send(eject);
  }catch(err) {
    const eject2 = new MessageEmbed()
    .setTitle(`Un problème est survenu.\n Note : Cela ne fonctionnera pas si l'utilisateur contient des caractères indésirables.`)
    .setColor(config.embedcolor)
    message.channel.send(eject2)
    }

    }
}

