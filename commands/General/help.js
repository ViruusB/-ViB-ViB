const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const chalk = require ("chalk");

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "cmd", "commands", "cmds", "aide", "help"],
        usage: "ou ;help nom_de_la_commande",
        category: "General",
        description: "Pour afficher toutes les commandes.",
        accessableby: "DISPONIBLE"
    },

    run: async (client, message, args) => {
        console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
        let prefix = client.config.PREFIX
        const version = "v1.2.6";
        const help = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor('Liste des commandes de ' + `${message.guild.me.displayName}`, message.guild.iconURL())
            .setThumbnail(message.guild.iconURL())
            if (!args[0]) {
            help.addField(`:performing_arts: | Fun `, '`8ball • qi • poll • roll • say • morse • timer • dice • weather • slots • rechanime • binaire • eject • emojify • emojilist • avatar • calcul • fun`')
            help.addField(`:globe_with_meridians: | General `, '`help • invite • uptime • servinfo • roles • support • contact • profil • reportu • reports • general`')
            help.addField(`:dog: | Images/Gifs `, '`chat • chien • renard • koala • oiseau • panda • hug • karma • tape • content • neko • img`')
            help.addField(`:busts_in_silhouette: | Interaction `, '`aime • burger • calin • calumet • declareamitie • declareamour • dynamite • ecraser • envie • fakeban • fakemute • falaise • frapper • ftp • kiss • lasso • moquer • peine • pete • pietine • interaction`')
            help.addField(`:gear: | Moderation `,  '`warn • clear • prune • annonce • id • mute • kick • ban • unmute • random • chuser • moderation`')
            help.addField(`:notes: | Music `, '`leave • loop • lyrics • nowplaying • pause • play • playlist • queue • remove • resume • search • shuffle • skip • skipto • stop • volume • music`')
            help.addField(`:scroll: | Rôles `,  '`pc • playstation • xbox • nintendo • sega`')
            if(message.channel.nsfw) {
                help.addField(`:underage: | NSFW `, '`hentai • thighs • bondage • anal • baka • blowjob • cum • erofeet • erokemo • eroyuri • feet • femdom • foxgirl • futa • gifhentai • slap • pussy • porngif • girl • gifporn • nsfw`')
            } else {
                help.addField(`:underage: | NSFW `, `  \`\`\`fix\nPeut être utilisé sur un canal NSFW.\n\`\`\` `)
            }
            help.setFooter(`Pour obtenir des informations sur une commande.\nUtiliser ${prefix}help [nom_de_la_commande] | Exemple: ${prefix}help chat\nCommandes chargées: ${client.commands.size - 1}\n© ViruusB - ${version}`)
        setTimeout(() => message.delete(), 3000);
            return message.channel.send(help)
        } else {
            let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if (!command) return message.channel.send(embed.setTitle("**Commande invalide.**").setDescription(`**Faire \`${prefix}help\` pour la liste des commandes.**`))
            command = command.config

            /*embed.setDescription(stripIndents`**Karma Prefix Is \`${prefix}\`**\n
            ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
            ** Description -** ${command.description || "No Description provided."}\n
            ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
            ** Needed Permissions -** ${command.accessableby || "everyone can use this command!"}\n
            ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
            embed.setFooter(message.guild.name, message.guild.iconURL())

            return message.channel.send(embed)*/

        let commandinfo = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle ("Information de la commande: " + ` \`\`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\` `)
        .setDescription(`
        Prefix: \`\`${prefix}\`\`
        Categorie: \`\`${command.category || "Aucune"}\`\`
        Nom: \`\`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\`
        Description: \`\`${command.description || "Aucune description."}\`\`
        Utilisation: \`\`${prefix}${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} ${command.usage}\`\`
        Alias: \`\`${command.aliases ? command.aliases.join(", ") : "Aucun"}\`\`
        Permission: \`\`${command.accessableby || "Aucune"}\`\` `);
        message.channel.send(commandinfo);
        setTimeout(() => message.delete(), 3000);
        }
    }
};
