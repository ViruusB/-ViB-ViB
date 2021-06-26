const { MessageEmbed } = require("discord.js")

module.exports = async (client, channel, message) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: "CHANNEL_CREATE"
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated;

    const create = new MessageEmbed()
    .setAuthor("Création de salon")
    .setThumbnail(client.user.avatarURL())
    .setColor("GREEN")
    .setDescription(`**Nom:** ${channel.name}\n**Type:** ${channel.type}`)
    .setTimestamp()
    .setFooter(executor.username)
        client.channels.cache.get("845789870324711435").send(create)
}