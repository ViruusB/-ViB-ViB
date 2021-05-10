const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
    config: {
        name: "support",
        aliases: ["support"],
        usage: "",
        category: "General",
        description: "Donne le support ViruusB ©️",
        accessableby: "DISPONIBLE",
    },
  
  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    var creditinfo = "ViruusB ©️"
    let bicon = client.user.displayAvatarURL;
    let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(bicon)
        .setAuthor('Support ViruusB ©️', message.guild.iconURL())
        .addField("Serveur Discord:", ` \`\`\`fix\nViruusB\n\`\`\` [Lien d'invitation](https://discord.gg/YC4jNpeQkG)`, true)
        .addField("Bot General:", ` \`\`\`fix\nViB\n\`\`\` [Lien d'invitation](https://discord.com/api/oauth2/authorize?client_id=742118190561099817&permissions=8&scope=bot)`, true)
        .addField("Bot Musical:", ` \`\`\`fix\n[ViB]Music\n\`\`\` [Lien d'invitation](https://discord.com/oauth2/authorize?client_id=749823254126133318&permissions=37080128&scope=bot)`, true)
        .addField("Bot RolePlayGame:", ` \`\`\`css\n[ViB]RPG \n\`\`\` [En Développement]`, true)
        .addField("Pour nous contacter, utilisez:", "`-contact`")

    message.channel.send(embed)
    setTimeout(() => message.delete(), 3000);
}}
