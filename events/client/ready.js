const chalk = require("chalk")
const moment = require('moment');
const version = "v2.1.1";

module.exports = async client => {
  let totalUsers = client.guilds.cache.reduce((users , value) => users + value.memberCount, 0);

    console.log("--------------------------------------");
    console.log('--> ' + (chalk.yellow('ViruusB ©️')) + ' \n--> ' 
    + (chalk.magenta('Nom:              ')) + `[ ${client.user.tag} ]` + ' \n--> ' 
    + (chalk.magenta('Préfix:           ')) + `[ ${client.config.PREFIX} ]` + '\n--> ' 
    + (chalk.magenta('Commandes:        ')) + `[ ${client.commands.size} ]` + ' \n--> '
    + (chalk.magenta('Channels:         ')) + `[ ${client.channels.cache.size} ]` + '\n--> '  
    + (chalk.magenta('Serveurs:         ')) + `[ ${client.guilds.cache.size} ]` + '\n--> ' 
    + (chalk.magenta('Utilisateurs:     ')) + `[ ` + totalUsers + ` ]` + ' \n--> '
    + (chalk.magenta('Version:          ')) + `[ ${version} ]` + ' \n--> ' 
    + (chalk.blue(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [API] ${client.user.username} est en ligne`)));
    console.log('______________________________________');

  let activities = [
    `${client.config.PREFIX}help`,
    `${version}`,
    '© ViruusB',
  ],
         i = 0;
     
       setInterval(
         () =>
           client.user.setPresence({
             activity: {
               name: `${activities[i++ % activities.length]}`,
               type: 'PLAYING',
             },
             status: 'online',
           }),
         3000
       )};

    /*client.user.setActivity(`Developpement | ` + client.config.PREFIX + `help | ` + version + ` || ViruusB `, {
      type: 'PLAYING'
  })};*/