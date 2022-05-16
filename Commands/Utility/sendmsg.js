module.exports = {
  name: 'sendmsg',
  //m stands for message | a stands for acc
  execute: async function(m, a) {
    const args = m.content.split(' ');
    const user = a.users.cache.find(u => 
      u.id === args[1] || u.tag === args[1] || u.id === args[1]?.slice(2).slice(0, -1));

    if(!user)
      return m.reply('You must provide a valid UserID/Tag/Mention !');

    if(!args[2] || args[2].replace(' ', '').length < 1)
      return m.reply('Invalid text to mass dm!');
    
    await user.send(args.slice(2).join(' '));
  }
}