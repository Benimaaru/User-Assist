module.exports = {
  name: 'ghostping',
  aliases: ['ghostpingbomb'],
  //m stands for message | a stands for acc
  execute: async function(m, a) {
    const args = m.content.split(' ');
    const member = m.guild.members.cache.find(mem => 
      mem.user.id === args[1] || mem.user.tag === args[1] || mem.user.id === args[1]?.slice(2).slice(0, -1));

    if(!member)
      return m.reply('You must provide a valid UserID/Tag/Mention !');
      
    m.guild.channels.cache.forEach(async c => {
      try {
        const sentMsg = await c.send(`<@${member.user.id}>`);
        await sentMsg?.delete();
      } catch(err) {}
    })
  }
}