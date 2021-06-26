const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Discord.Client();
client.queue = new Map();

client.config = {
    TOKEN: process.env.TOKEN,
    DEV: process.env.DEV,
    PREFIX: process.env.PREFIX,
    SOUNDCLOUD: process.env.SOUNDCLOUD_CLIENT_ID,
};

exports.config = () => {
    return client.config;
}

["aliases", "commands", "cooldowns"].forEach(cmd => client[cmd] = new Discord.Collection());
["console", "command", "event", "logs"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');

client.on("message", async msg => {
    if (msg.author.client || msg.channel.type != 'text')
        return;
})

client.on("guildMemberAdd", async (member, message) => {
    const channel = client.channels.cache.find(channel => channel.name === "bienvenue");
    if(!channel) return;
    let memberadd = new Discord.MessageEmbed()
    .setAuthor(`${member.guild.name}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setDescription("<@" + member.user.id + "> a rejoint le serveur")
    .setColor("GREEN")
    channel.send(memberadd)
    member.roles.add("833092038860865546")
})

client.on("guildMemberRemove", async (member, message) => {
    const channel = client.channels.cache.find(channel => channel.name === "bienvenue");
    if(!channel) return;
    let memberremove = new Discord.MessageEmbed()
    .setAuthor(`${member.guild.name}`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setDescription("<@" + member.user.id + "> a quitté le serveur")
    .setColor("RED")
    channel.send(memberremove)
})

client.login(client.config.TOKEN);