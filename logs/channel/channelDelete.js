const { MessageEmbed } = require("discord.js")

module.exports = async (client, channel, message) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: "CHANNEL_DELETE"
    });

    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelDeleted;

    const deleted = new MessageEmbed()
    .setAuthor("Suppression de Salon")
    .setThumbnail(client.user.avatarURL())
    .setColor("RED")
    .setDescription(`**Nom:** ${channel.name}\n**Type:** ${channel.type}`)
    .setTimestamp()
    .setFooter(executor.username)
        client.channels.cache.get("845789870324711435").send(deleted)
}