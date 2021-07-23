const { MessageEmbed } = require('discord.js');
const translate = require("@vitalets/google-translate-api");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "trad",
        aliases: ["trad", "traduction"],
        usage: "<langue> <texte>",
        category: "Fun",
        description: "Traduit un texte dans la langue choisi",
        accessableby: "DISPONIBLE",
    },
    
      run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
    const prefix = client.config.PREFIX

        try {
            const toLanguage = args[0];
            const text = args.slice(1).join(" ");
            if (!toLanguage || !text) return message.channel.send(new MessageEmbed()
                .setDescription(`Tu dois entrer la langue et ton texte. \n\`Utilisation: ${prefix}trad <langue> <texte>\``)
                .setColor("RANDOM"));
            translate(text, { to: toLanguage }).then(res => {
                const translation = new MessageEmbed()
                    .setAuthor(`Traduction pour ${message.author.username}`, `${message.guild.iconURL()}.`)
                    .setDescription(`__**Détection de la Langue**__
      **•** \`Langue détecté:\` **${res.from.language.iso.toUpperCase()} **
      __**Langue Cible**__
      **•** \`Langue choisi:\` **${toLanguage.toUpperCase()}**
      __**Traduction**__
      **•** \`Traduction:\` \n**${res.text}**`)
                    .setColor("RANDOM")
                message.channel.send(translation);
            }).catch(error => {
                return message.channel.send(new MessageEmbed()
                .seAuthor(`Erreur`, `${message.guild.iconURL()}.`)
                .setDescription(`\`${error}\``)
                .setColor("RED"));
            });
        } catch (error) {
            return message.channel.send(new MessageEmbed()
                .seAuthor(`Erreur`, `${message.guild.iconURL()}.`)
                .setDescription(`\`${error}\``)
                .setColor("RED"));
        }
    }
};