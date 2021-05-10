const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

const valide = "🟩";
const invalide = "🟥";

module.exports = {
    config: {
        name: "poll",
        aliases: ["poll", "sondage"],
        usage: "votre_question",
        category: "Fun",
        description: "Permet de créer un sondage.",
        accessableby: "DISPONIBLE"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    const pollmessage = await args.join(" ");
    if (pollmessage.length <= 0) return message.channel.send({embed: {
        color: 16734039,
        description: "Vous devez fournir un texte pour poser une question."
    }})
    // if (!args || args[0] === 'vote') return message.reply("```Utilisation : -vote <votre question>```")
    // Number.isInteger(itime)
    // if (args.join(" ")) return message.reply('please supply a valid time number in seconds')

    let msg = await message.channel.send({embed: {
        color: 3447003,
        title: "Sondage de: " + `${message.author.username}`,
        description: "***Question: ***" + "\n" + 
        `\`\`${message.content.split(" ").splice(1).join(" ")}\`\` ` + "\n" +
        "••••••••••••••••••••••••••••••••••••••••" + "\n" + 
            `
        🟩 - Pour (Oui)
        🟥 - Contre (Non)
        ` + "\n" +
        "Durée: 30 minutes.",
    }})
    /*message.channel.send(`Vote maintenant ! (Durée: 15min) \nQuestion: ${message.content.split(" ").splice(1).join(" ")}`);*/
    await msg.react(valide);
    await msg.react(invalide);

    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === valide || reaction.emoji.name === invalide, { time: 1800000 }); /*1800000*/
    msg.delete();

    var NO_Count = reactions.get(invalide).count;
    var YES_Count = reactions.get(valide);

    if (YES_Count == undefined) {
        var YES_Count = 1;
    } else {
        var YES_Count = reactions.get(valide).count;
    }

    var votepoll = new MessageEmbed()
        .setAuthor(`Sondage de: ${message.author.tag}`, message.author.avatarURL())
        .addField("Question: ", pollmessage + "\n" +
            "••••••••••••••••••••••••••••••••••••••••" + "\n" +
            /*message.content.split(" ").splice(1).join(" ") + "\n" +*/
            "Pour (Oui) 🟩 : " + `${YES_Count - 1}\n` +
            "Contre (Non) 🟥 : " + `${NO_Count - 1}\n`)
        .setFooter("Sondage")
        .setColor("RANDOM")
    await message.channel.send({ embed: votepoll });
    message.delete();
}
}