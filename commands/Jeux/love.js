const {MessageEmbed} = require('discord.js');

module.exports = {
    config: {
        name: "love",
        aliases: ["love", "affi", "testlove", 'lovetest'],
        usage: "@utilisateur",
        category: "Jeux",
        description: "Calcul votre affinité avec un autre membre.",
        accessableby: "DISPONIBLE",
    },
  
    run: async (client, message, args) => {

  const lover = message.mentions.users.first();
  const loveRandom = Math.random() * 100;
  const loveIndex = Math.floor(loveRandom / 10);
  const loveLevel = `❤`.repeat(loveIndex) + `🖤`.repeat(10 - loveIndex);

  const embed = new MessageEmbed()
  .setColor('#ff94f6')
  .setAuthor(`Calcul d'Affinité`, `${message.guild.iconURL()}`)
  .setDescription(`__**Auteur**__
  **•** **${message.author}**
  __**Cible**__
  **•** **${lover}**
  __**Affinité**__
  **•** **${Math.floor(loveRandom)} %**
  `)

  if (loveIndex == 0) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 1) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 2) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 3) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 4) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 5) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 6) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 7) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 8) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 9) embed.addField(`------------------------`, `${loveLevel}`);
  if (loveIndex == 10) embed.addField(`------------------------`, `${loveLevel}`);

  const errorMentionEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`Affinité`, `${message.guild.iconURL()}`)
    .setDescription(`Tu dois mentionner un utilisateur pour faire ça.`)
  
  return args[0] = message.mentions.users.first() ? message.channel.send(embed) : message.channel.send(errorMentionEmbed);

}}