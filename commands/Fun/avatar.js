const { MessageEmbed } = require('discord.js')
const chalk = require ("chalk");

module.exports = {
    config: {
        name: 'avatar',
        aliases: ["avatar"],
        usage: 'ou @utilisateur',
        category: "Fun",
        description: "Montre l'avatar d'un utilisateur",
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      setTimeout(() => message.delete(), 3000);
    
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    const avatar = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor("RANDOM")
        .setDescription(`\`Lien:\` **[png](${member.user.displayAvatarURL({format: "png", size: 1024})}) | [jpg](${member.user.displayAvatarURL({format: "jpg", size: 1024})}) | [gif](${member.user.displayAvatarURL({format: "gif", size: 1024, dynamic: true})}) | [webp](${member.user.displayAvatarURL({format: "webp", size: 1024})})**`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setFooter(`Requête par ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
    return message.channel.send(avatar)
    
    }
}

