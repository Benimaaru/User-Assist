module.exports = (acc) => {
  acc.on('messageCreate', async message => {
    if(!acc.initialized ||
       message.author.id !== acc.user.id) return;

    const { config } = acc;
    if(!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    acc.commands.get(message.content.slice(config.prefix.length).split(' ')[0].toLowerCase())
      ?.execute(message, acc);
  });
}