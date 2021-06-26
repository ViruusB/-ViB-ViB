const { MessageEmbed } = require("discord.js")

module.exports = async (client, channel, message) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: "CHANNEL_UPDATE"
    });

    const latestChannelUpdated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelUpdated;

    const update = new MessageEmbed()
    .setAuthor("Update de salon")
    .setThumbnail(client.user.avatarURL())
    .setColor("RANDOM")
    .setDescription(`**Nom:** ${channel.name}\n**Type:** ${channel.type}`)
    .setTimestamp()
    .setFooter(executor.username)
        client.channels.cache.get("845789870324711435").send(update)
}