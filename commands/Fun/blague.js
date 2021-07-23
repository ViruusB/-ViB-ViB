const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "blague",
        aliases: ["blague", "joke"],
        usage: "",
        category: "Fun",
        description: "Affiche une blague aléatoire",
        accessableby: "DISPONIBLE",
    },
    
      run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);

    {
        var headers = { Authorization: "" }
        fetch('https://blague.xyz/api/joke/random/', { headers: headers }  )
        .then(rep => rep.json() )
        .then(json => {
        let blague = new MessageEmbed()
        .setAuthor(`Blague pour ${message.author.username}`, `${message.guild.iconURL()}`)
        .setColor("RANDOM")
        .setDescription(`**•** \`Blague:\` ${json.joke["question"]}\n**•** \`Réponse:\` ||${json.joke["answer"]}||`)
            message.channel.send(blague);
        })
    }
  }
};