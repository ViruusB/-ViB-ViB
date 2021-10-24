const chalk = require ("chalk");

module.exports = {
    config: {
        name: "reload",
        aliases: ["reload",],
        usage: "",
        category: "Admin",
        description: "Permet de lancer un rappel de redémarrage du bot",
        accessableby: "ADMIN"
    },
  
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        
        let perms = message.member.hasPermission("ADMINISTRATOR");
        const channel = client.channels.cache.find(channel => channel.name === "chat-1");

    if (!perms)
      return message.channel.send(
       `${message.author}, tu n'as pas la permission d'utiliser la commande \`\`reload\`\``
      );

      if(!channel) return;
    channel.send("@everyone \n| :gear:  Le bot va redémarrer.");
    message.delete()
  }}