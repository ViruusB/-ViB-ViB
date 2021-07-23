const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "slots",
        aliases: ["slots"],
        usage: "",
        category: "Jeux",
        description: "Permet de jouer à la machine à sous.",
        accessableby: "DISPONIBLE"
    },

run: async (client, message, args) => {
    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')

var replys1 = [
    ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: "
];
let reponse = (replys1[Math.floor(Math.random() * replys1.length)])
var replys2 = [
    ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: ",
    ":gem: : :cherries: : :cherries:",
    ":gem: : :bell: : :star:"
];
let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
var replys3 = [
    ":lemon: : :lemon: : :lemon: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: "
];
let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])
const embed = new MessageEmbed()
    .setAuthor(`Machine à Sous`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setColor("RANDOM")
    .setDescription(`***__Lancé par: ${message.author}__***`)
    .addField(`${reponse} \n \n${reponse2}**<--** \n \n${reponse3}`, `** **`)
message.channel.send(embed)
  setTimeout(() => message.delete(), 3000);
}}