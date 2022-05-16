module.exports = {
  name: 'massdm',
  //m stands for message | a stands for acc
  execute: async function(m, a) {
    const args = m.content.split(' ');
    if(!args[1] || args[1].replace(' ', '').length < 1)
      return m.reply('Invalid text to mass dm!');
      
    m.guild.members.cache.forEach(async mem => {
      if(mem.user.bot) return;
      try {
        await mem.send(args.slice(1).join(' '))
      } catch(err) {}
    })
  }
}