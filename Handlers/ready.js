module.exports = (acc) => {
  acc.on('ready', async () => {
    console.log(`- Logged in as ${acc.user.tag}`);
    acc.initialized = true;
  });
}