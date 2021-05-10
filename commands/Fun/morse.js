const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "morse",
        aliases: ["morse"],
        usage: "votre_texte",
        category: "Fun",
        description: "Permet de passer un message en morse.",
        accessableby: "DISPONIBLE"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
text = args.join(" ").toUpperCase();
while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
text = text.replace("Ä", "AE").replace("Ö", "OE").replace("Ü", "UE");
}
if (text.startsWith(".") || text.startsWith("-")) {
text = text.split(" ");
let length = text.length;
for (i = 0; i < length; i++) {
    text[i] = alpha[morse.indexOf(text[i])];
}
text = text.join("");
} else {
text = text.split("");
let length = text.length;
for (i = 0; i < length; i++) {
    text[i] = morse[alpha.indexOf(text[i])];
}
text = text.join(" ");
}
message.channel.send("```" + text + "```");
        setTimeout(() => message.delete(), 3000);
}}