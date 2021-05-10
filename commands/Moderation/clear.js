const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');

module.exports = {
    config: {
        name: "clear",
        aliases: ["clear", "purge"],
        usage: "nombre",
        category: "Moderation",
        description: "Supprime un nombre de messages défini.",
        accessableby: "MODERATION"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(" tu n'as pas la permission pour faire ça !");
        if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply(' il faut spécifié un ***nombre*** entre 1 et 100 !');

        const messages = await message.channel.messages.fetch({
            limit: Math.min(args[0], 100),
            before: message.id,
        });
    
        await message.channel.bulkDelete(messages);
    
        const clear = new MessageEmbed()
            .setAuthor(`Suppression de message`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
            .setColor("RANDOM")
            .setDescription(`**Action**: Suppression de messages\n**Nombre de Messages**: ${args[0]}\n**Salon**: ${message.channel}`);
    
        message.channel.send(clear)
    }
    } 
        /*if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" tu n'as pas la permission de faire ça !");

        const amount = args.join(" ");

        if(!amount) return message.reply(" tu n'as pas rentré un ***nombre*** valide.")

        if(amount > 100) return message.reply(` tu dois saisir un ***nombre*** entre 1 et 99.`)

        if(amount < 1) return message.reply(` tu dois supprimer au moins un ***nombre*** valide.`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});
    const clear = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription(`**Messages Supprimés**: ${args[0]}`);
    message.channel.send(clear)
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` CLEAR `))+ ']')
}
    }*/
        /*if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(" tu n'as pas la permission pour faire ça !");
        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) {
            return message.reply(" tu n'as pas rentré un ***nombre*** valide.");
        } else if (amount <= 1 || amount > 100) {
            return message.reply(" tu dois saisir un ***nombre*** entre 1 et 99.");
        }

        message.channel.bulkDelete(amount, true).then(deletedMessages => {
            var botMessages = deletedMessages.filter(m => m.author.bot);
            var userMessages = deletedMessages.filter(m => !m.author.bot);

            const clear = new MessageEmbed()
                .setAuthor(`Suppression de message`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
                .setColor("RANDOM")
                .setDescription(`**Action:** Suppression de message\n **Utilisateurs:** ${userMessages.size}\n **Bot:** ${botMessages.size}\n **Total:** ${deletedMessages.size}\n`);
                /*.addField("__Bot__", botMessages.size, true)
                .addField("__Utilisateur__", userMessages.size, true)
                .addField("__Total__", deletedMessages.size, true)

            message.channel.send(clear);
            console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` PURGE `))+ ']')
        setTimeout(() => message.delete(), 3000);
        }).catch(err => {
            console.error(err);
            message.channel.send("Une erreur s'est produite, veuillez réessayer.");
        });
    },
}*/