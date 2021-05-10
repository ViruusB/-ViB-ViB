const chalk = require ("chalk");

module.exports = {
    config: {
        name: 'emojify',
		aliases: ["emojify"],
        usage: 'votre_texte',
		category: "Fun",
		description: 'Montre votre texte en emoji.',
        accessableby: "DISPONIBLE",
    },
    run: async (client, message, args) => {
		console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        setTimeout(() => message.delete(), 3000);
		if (!args.length) return message.channel.send({embed: {
            color: 16734039,
            description: "Tu dois écrire un texte."
            }})

		const specialChars = {
			'0': ':zero:',
			'1': ':one:',
			'2': ':two:',
			'3': ':three:',
			'4': ':four:',
			'5': ':five:',
			'6': ':six:',
			'7': ':seven:',
			'8': ':eight:',
			'9': ':nine:',
			'#': ':hash:',
			'*': ':asterisk:',
			'?': ':grey_question:',
			'!': ':grey_exclamation:',
			' ': '   ',
		};

		const emojified = `${args.join(' ')}`.toLowerCase().split('').map(letter => {
			if (/[a-z]/g.test(letter)) {
				return `:regional_indicator_${letter}: `;
			}
			else if (specialChars[letter]) {
				return `${specialChars[letter]} `;
			}
			return letter;
		}).join('');

		if(emojified.length > 1000) {
			return message.channel.send(`Vous ne pouvez pas éxcéder 1000 caractères.`);
		}

		message.channel.send(emojified);

    }
}

