module.exports = {
  name: 'purge',
  aliases: ['bulkdel', 'bulkdelete'],
  //m stands for message | a stands for acc
  execute: async function(m, a) {
    const args = m.content.split(' ');
    const amount = Number(args[1]);
    if(!amount || amount < 1 || amount > 49 || Math.ceil(amount) !== amount)
      return m.reply('The amount must be a valid integer from 1 to 50!');

    const fetched = await m.channel.messages.fetch({limit: amount});
    fetched.forEach(msg => msg.author.id === m.author.id ? msg.delete() : msg);
  }
}