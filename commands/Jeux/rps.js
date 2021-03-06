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
        await msg.react("β")
        await msg.react("β")
        await msg.react("π°")

        const filter = (reaction, user) => {
            return ['β', 'β', 'π°'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['β', 'β', 'π°']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                let resultat = ("RΓ©sultat: ")
                const reaction = collected.first()
                let result = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`Pierre, Feuille, Ciseau`, `${message.guild.iconURL()}`)
                .addField(
                  `**__${resultat}__**`,
                  `***β Ton Choix:*** \`${reaction.emoji.name}\`
                  ***β Mon Choix:*** \`${me}\` `
              );
            await msg.edit(result)
                if ((me === "β" && reaction.emoji.name === "β") ||
                (me === "π°" && reaction.emoji.name === "β") ||
                (me === "β" && reaction.emoji.name === "π°")) {
                    message.channel.send(`${message.author}, tu as perdu.`);
            } else if (me === reaction.emoji.name) {
                return message.channel.send(`${message.author}, c'est une Γ©galitΓ©.`);
            } else {
                return message.channel.send(`${message.author}, tu as gagnΓ©.`);
            }
        })
        .catch(collected => {
                message.reply(`RPS interrompu. Vous avez mis trop de temps Γ  jouer.`);
            })
}
}