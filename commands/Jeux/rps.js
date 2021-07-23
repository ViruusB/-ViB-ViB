const { MessageEmbed } = require('discord.js')
const chalk = require("chalk");

module.exports = {
  config: {
      name: "rps",
      aliases: ["rps"],
      usage: "",
      category: "Jeux",
      description: "Joue a Pierre/Feuille/Ciseau",
      accessableby: "DISPONIBLE",
  },

  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    setTimeout(() => message.delete(), 3000);
    
        let rps = new MessageEmbed()
        .setAuthor(`Pierre, Feuille, Ciseau`, `${message.guild.iconURL()}`)
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        
        let msg = await message.channel.send(rps);
        await msg.react("✊")
        await msg.react("✂")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['✊', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['✊', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                let resultat = ("Résultat: ")
                const reaction = collected.first()
                let result = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`Pierre, Feuille, Ciseau`, `${message.guild.iconURL()}`)
                .addField(
                  `**__${resultat}__**`,
                  `***∙ Ton Choix:*** \`${reaction.emoji.name}\`
                  ***∙ Mon Choix:*** \`${me}\` `
              );
            await msg.edit(result)
                if ((me === "✊" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "✊") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.channel.send(`${message.author}, tu as perdu.`);
            } else if (me === reaction.emoji.name) {
                return message.channel.send(`${message.author}, c'est une égalité.`);
            } else {
                return message.channel.send(`${message.author}, tu as gagné.`);
            }
        })
        .catch(collected => {
                message.reply(`RPS interrompu. Vous avez mis trop de temps à jouer.`);
            })
}
}