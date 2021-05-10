const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  config: {
      name: "contact",
      aliases: ["contact"],
      usage: "<votre_message>",
      category: "General",
      description: "Permet de contacter l'administrateur du bot.",
      accessableby: "DISPONIBLE"
  },

  run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
    if (args[0] == "help") {
        let contactfalse = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`\`\`Tu dois écrire un texte pour faire ça\`\``)
message.channel.send(contactfalse);
        return;
    }

    let Invite = await message.guild.channels.cache.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if (!sayMessage) return message.channel.send("```Tu dois écrire un texte pour faire ça.```");

    let contactmp = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor('Contact Support', 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .addField("Serveur:", `[${message.guild.name}](${Invite.url})`, true)
        .addField("Utilisateur:", Sender, true)
        .addField("Utilisateur ID: ", Sender.id, true)
        .addField("Message: ", sayMessage)
        .setTimestamp()

    client.users.cache.get("297388490595762186").send(contactmp);

    const contactutilisateur = message.author.tag;
    let contact = new MessageEmbed()
        .setAuthor(`${contactutilisateur}`, 'https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg')
        .setColor("#00ff00")
        .setDescription("Merci d'avoir contacté le support.\n Votre message a bien été envoyé.")
        .setFooter("Vérifiez vos DM's")
    message.channel.send(contact)

    setTimeout(() => message.delete(), 3000);
}}
