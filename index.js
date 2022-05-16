const {
  Client,
  Intents
} = require('discord.js-selfbot-v13');

const acc = new Client({ //acc stands for account
  intents: [
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

acc