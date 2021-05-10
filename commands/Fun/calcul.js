const Discord = require('discord.js');
const math = require('math-expression-evaluator');
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "calcul",
        aliases: ["calcul", "calc"],
        usage: "1+1 | 1-1 | 1/1 | 1*1",
        category: "Fun",
        description: "Permet de faire un calcul (/ + * x)",
        accessableby: "DISPONIBLE"
    },

    run: async (client, msg) => {
        console.log(`${(chalk.green(`${msg.author.username}`))}` +' sur '+ (chalk.magenta(`${msg.guild.name}`)) + ' salon ' + (chalk.magenta(`${msg.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${msg.author.lastMessage}`))+ ']')
        setTimeout(() => msg.delete(), 3000);
    const args = msg.content.split(' ').slice(1);
    const calculator_noinput = (" Tu dois effectuer un ***Calcul***.")

    if (args.length < 1) {
        msg.channel.send(calculator_noinput);
    }

    const mathEquation = args.join(' ');
    let answer;
    try {
      answer = math.eval(mathEquation);
    }
    catch (err) {
        return msg.channel.send("__Addition__ = ***+***\n__Soustraction__ = ***-***\n__Division__ = ***/***\n__Multiplication__ = *") 
    }

    let calculator_calculation = ("Calculateur :")
    let calculator_result = ("Résultat :")
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL())
      /*.setDescription(`**${calculator_calculation}**\n\`\`\`${mathEquation}\`\`\`\n**${calculator_result}**\n\`\`\`${answer}\`\`\`\n`)*/
      .addField(`**${calculator_calculation}**`, 
      `***∙ Calcul:*** \`${mathEquation}\` 
      ***∙ Résultat:*** \`${answer}\`
      `
      )  
      .setColor('RANDOM');
    msg.channel.send({ embed });
  }
};