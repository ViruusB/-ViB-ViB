
const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
    config: {
        name: "dice",
        aliases: ["dice"],
        usage: "",
        category: "Jeux",
        description: "Renvoie la valeur de plusieurs dés.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Lancement des dés`, `${message.guild.iconURL()}`)
        .addFields(
            { name: "Dés #1", value: randomDice(), inline: true },
            { name: "Dés #2", value: randomDice(), inline: true },
            { name: "Dés #3", value: randomDice(), inline: true },
            { name: "Dés #4", value: randomDice(), inline: true },
            { name: "Dés #5", value: randomDice(), inline: true },
            { name: "Dés #6", value: randomDice(), inline: true },
        );

    embed.setFooter(`Total des dés obtenus: ${embed.fields.reduce((total, obj) => parseInt(obj.value) + total, 0)}`);
    message.channel.send(embed);
        setTimeout(() => message.delete(), 3000);
}
}