const { Collection } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');;

module.exports = async (client, message) => {
    let prefix = client.config.PREFIX
    try{
        if (message.author.bot || message.channel.type === "dm") return;
        if(!message.content.startsWith(prefix)) return;
    
        if(!db.has(`${message.guild.id}.${message.author.id}.messageCount`)) {
            db.set(`${message.guild.id}.${message.author.id}.messageCount`, 1)
        } else {
            db.add(`${message.guild.id}.${message.author.id}.messageCount`, 1)
        }
    
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();

        var commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

        const { cooldowns } = client;
        if (!cooldowns.has(cmd)) {
            cooldowns.set(cmd, new Discord.Collection());
        }
        
        const now = Date.now();
        const timestamps = client.cooldowns.get(cmd);
        const cooldownAmount = (cmd.cooldown || 15) * 1000;

        if (timestamps.has(message.author.id)) {
            const cdexpirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            if (now < cdexpirationTime) {
                timeLeft = (cdexpirationTime - now) / 1000;
                return message.reply(`veuillez attendre ${timeLeft.toFixed(1)} seconde(s) avant de ré-utiliser la commande \`${cmd}\` `);
            }
}
            timestamps.set(message.author.id, now)
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
            if (commandfile) commandfile.run(client, message, args);



    } catch (error) {
        console.log(error);
    }
   

};
