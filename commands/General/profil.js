const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
const moment = require("moment")
const chalk = require("chalk");
require('moment-duration-format')


module.exports = {
  config: {
      name: "profil",
      aliases: ["profil", "userinfo", "infouser"],
      usage: "ou @utilisateur",
      category: "General",
      description: "Donne les informations d'un utilisateur'.",
      accessableby: "DISPONIBLE",
  },
    run: async (client, message, args) => {
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(`${message.author.lastMessage}`))+ ']')
      setTimeout(() => message.delete(), 3000);
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let durumm;
        let durum = user.presence.status
        
        let roles = user.roles.cache.map(x => x).filter(z => z.name !== "@everyone")
        let messagecount = await db.get(`${message.guild.id}.${user.id}.messageCount`)
        
        if(!messagecount) messagecount = 0
        
        if(roles.length > 100) {
          roles = "Il y a tellement de rôles à montrer."
        }
        
        let safe = message.author.createdTimestamp
        
        if(safe > 604800017) {
          safe = "`Fiable` :ballot_box_with_check:"
        } else {
          safe = "`Suspicieux` :eye:"
        }
        
        /*let a = {
          "DISCORD_PARTNER": "<:partner_badge:736568773858951236>",
          "HYPESQUAD_EVENTS": "<:hypesquad_badge:736568773795905616>",
          "BUGHUNTER_LEVEL_1": "<:bug_hunter_badge:736568773963939900>  Bug Hunter Level 1",
          "HOUSE_BRAVERY": "<:bravery_badge:736568773699698708> HypeSquad Bravery",
          "HOUSE_BRILLIANCE": "<:brilliance_badge:736568773993037844> HypeSquad Brilliance",
          "HOUSE_BALANCE": "<:balance_badge:736568773070422068> HypeSquad Balance",
          "EARLY_SUPPORTER": "<:early_supporter_badge:736568773854756945> Early Supporter",
          "BUGHUNTER_LEVEL_2": "Discord Bug Hunter Level 2",
          "VERIFIED_DEVELOPER": "<:developer:718560145617190912> Discord Certifié Bot Developper",
          "VERIFIED_BOT": "Bot Certifié",
        }*/
        
          if(durum === "online") durum = `En Ligne `
          if(durum === "offline") durum = `Hors Ligne `
          if(durum === "idle") durum = `Inactif `
          if(durum === "dnd") durum = `Ne pas déranger `
          
          let lastMessage
          let lastMessageTime
          let nitroBadge = user.user.avatarURL({dynamic: true})
          let flags = user.user.flags.toArray().join(``)
          
          if(!flags) {
            flags = "L'utilisateur n'a pas de badge"
          }
        
         flags = flags.replace("MAISON_BRAVERY", "• <:hsquadbravery:757488491792826410>\`HypeSquad Bravery\`")
         flags = flags.replace("EARLY_SUPPORTER","• <a:nitro:740923343548579890> \`Early Supporter\`")
         flags = flags.replace("VERIFIED_DEVELOPER","• <:discordbotdev:757489652214267904> \`Verified Bot Developer\`")
         flags = flags.replace("EARLY_VERIFIED_DEVELOPER","• <:discordbotdev:757489652214267904> \`Verified Bot Developer\`")
         flags = flags.replace("HOUSE_BRILLIANCE","• <:hsquadbrilliance:757487710775672863> \`HypeSquad Brilliance\`")
         flags = flags.replace("HOUSE_BALANCE","• <:hsquadbalance:757487549605347348>\`HypeSquad Balance\`")
         flags = flags.replace("DISCORD_PARTNER","• <:partner:739714991732686848> \`Partner\`")
         flags = flags.replace("HYPESQUAD_EVENTS","• <a:hypesquad:755471122430034060>\`Hypesquad Event\`")
         flags = flags.replace("DISCORD_CLASSIC","• <a:classic:740922817683652754>\`Discord Classic\`")
      
          if(nitroBadge.includes("gif")) {
           flags = flags + `
      • <a:nitroboost:740923077973508156>  \`Nitro\``
          }
          
          let voice = db.get(`${message.guild.id}.${user.user.id}.voicetime`)
          let stat =  user.presence.activities[0]
          let custom
          
        if(user.presence.activities.some(r => r.name === "Spotify")) {
           custom = "Écouter Spotify"
         } else if(stat && stat.name !== "Statut personnalisé") {
           custom = stat.name
         } else {
           custom = "Aucune"
         }
      
          if(user.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
            stat = stat.state
          } else {
            stat = "Rien"
          }
         
          
          if(!voice) {
            voice = "0 heures, 0 minutes et 0 secondes"
          } else {
            voice = moment.duration(voice).format("h [ heures,] m [ minutes et] s[ secondes]")
          }
      
         if(user.lastMessage) {
           lastMessage = user.lastMessage.content
           lastMessageTime = moment(user.lastMessage.createdTimestamp).format('DD/MM/YYYY à HH:mm:ss')
         } else {
           lastMessage = "Aucun"
           lastMessageTime = "Aucun"
         }
          
          const profil = new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(`Information d'un utilisateur`, message.author.avatarURL({dynamic: true}))
          .setDescription(`__**Information Général**__
      **•** \`Nom:\` **${user}**
      **•** \`ID:\` **${user.id}**
      **•** \`Bot:\` **${user.user.bot ? 'Oui' : 'Non'}**
      **•** \`Créé le:\` **${moment(user.user.createdAt).format('DD/MM/YYYY à HH:mm:ss')}**
      __**Information Membre**__
      **•** \`Surnom:\` **${user.displayName ? user.displayName : 'yok'} **
      **•** \`Rejoint le:\` **${moment(user.joinedAt).format('DD/MM/YYYY à HH:mm:ss')}**
      **•** \`Activité:\` **${custom}**
      **•** \`Statut:\` **${durum}**
      __**Information Message**__
      **•** \`Dernier Message:\` **${lastMessage}**
      **•** \`Dernier Message le:\` **${lastMessageTime}**
      **•** \`Total de Message:\` **${messagecount}**
      __**Information Badge**__
      ${flags} 
      __**Information Rôles:**__
      ${roles}
      
      __**Contrôle de sécurité**__
      • ${safe}`)
          .setThumbnail(user.user.avatarURL({dynamic: true}))
          message.channel.send(profil)

    }
}
