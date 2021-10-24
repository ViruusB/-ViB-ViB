const chalk = require ("chalk");

module.exports = {
    config: {
        name: "eval",
        aliases: ["eval",],
        usage: "",
        category: "Admin",
        description: "Permet d'évaluer les options de votre choix",
        accessableby: "ADMIN"
    },
  
    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
        let perms = message.member.hasPermission("ADMINISTRATOR");

        if (!perms)
      return message.channel.send(
       `${message.author}, tu n'as pas la permission d'utiliser la commande \`\`eval\`\``
      );

    function clean(text) {
      if (typeof text === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
    }
  
    if (!args.length) return;
    if (!perms) return;
    const code = args.join(" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, { code: "js" });
  }}