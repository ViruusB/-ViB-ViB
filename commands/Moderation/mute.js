const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "mute",
        aliases: ["mute"],
        usage: "@utilisateur <time h/m/s>",
        category: "Moderation",
        description: "Mute un utilisateur du serveur.",
        accessableby: "MODERATION"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    setTimeout(() => message.delete(), 3000);
    if(!message.member.hasPermission('MESSAGE_MEMBER')) {
        message.channel.send(" tu n'as pas la permission pour faire ça !");
      } else if(!args[0]){
        message.channel.send("Tu dois entrer un ***@utilisateur*** et du ***temps*** pour mute.\nIl faut le rôle ***Mute***");
    } else if(!args[1]){
        message.channel.send(`  \`\`\`fix\nAucun temps donné\nTemps par défaut: 60 secondes.\n\`\`\` `);

    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Mute');
    let muteTime = (args[1] || '60s');

    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'Mute',
                color: '#cd143c',
                permissions: []
            }
        });

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    };

    await user.roles.add(muteRole.id);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));

    const mute = new MessageEmbed()
        .setAuthor("Mute",  client.user.avatarURL())
        .setColor("#ffa500")
        .setDescription(`**Utilisateur:** <@${user.id}>\n **Action:** Mute du Serveur\n**Durée:** ${ms(ms(muteTime))}\n**Par:** ${message.author.username}`)
        .setTimestamp()

    message.channel.send(mute)
}
}}