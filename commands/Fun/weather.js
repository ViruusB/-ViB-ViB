const { MessageEmbed } = require("discord.js");
const chalk = require ("chalk");
const weather = require('weather-js')

module.exports = {
    config: {
        name: "weather",
        aliases: ["weather"],
        usage: "<location>",
        category: "Fun",
        description: "Affiche la météo.",
        accessableby: "DISPONIBLE"
    },

run: async (client, message, args) => {

if(args.length === 0){
    let errorembed = new MessageEmbed()
    .setDescription("Veuillez entrer une location.")
	.setColor("FF5757")
  setTimeout(() => message.delete(), 3000);
  return message.channel.send(errorembed);
}

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
  
if(result.length === 0){
    let errorembed = new MessageEmbed()
    .setDescription("Veuillez entrer une location valide.")
	.setColor("FF5757")
  setTimeout(() => message.delete(), 3000);
  return message.channel.send(errorembed);
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) {
	let errorembed = new MessageEmbed()
    .setDescription("Veuillez entrer une location valide.")
	.setColor("FF5757")
  setTimeout(() => message.delete(), 3000);
  return message.channel.send(errorembed);
	}
	
    let weather = new MessageEmbed()
    .setAuthor(`Météo`, "https://raw.githubusercontent.com/ViruusB/-ViB-/main/assets/vib.jpg")
    .setDescription(`${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor("RANDOM")
    .addField(
      `**__Détail__**`,
      `***  ∙ Ciel:*** \`${current.skytext}\`
  ***∙ Temperature:*** \`${current.temperature} Degrés\`
  ***. Ressenti*** \`${current.feelslike} Degrés\`
  ***∙ Vent:*** \`${current.winddisplay}\`
  ***∙ Humidité:*** \`${current.humidity} %\`
  ***∙ Fuseau:*** \`UTC ${location.timezone}\`
  ***∙ Type:*** \`${location.degreetype}\`
  `
  );
  message.channel.send(weather)
    /*.addField('Fuseau', `UTC${location.timezone}`, true)
    .addField('Type', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrés`, true)
    .addField('Vent', current.winddisplay, true)
    .addField('Humidité', `${current.humidity}%`, true)*/

    setTimeout(() => message.delete(), 3000);
})}}