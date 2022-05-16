//Importing discord.js
const {
  Client,
  Intents,
  Collection
} = require('discord.js-selfbot-v13');

const acc = new Client({ //acc stands for account
  intents: [
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

//Importing fs
const fs = require('fs');

console.log('- Importin Config');
acc.config = require('./config.json');
console.log('- Finished Importing Config');

console.log('- Importing Commands');
acc.commands = new Collection(); //Setting acc.commands to discord's collectoion
fs.readdirSync('./Commands')
  .forEach(dir => { //Importing commands from each directory in Commands folder
    fs.readdirSync(`./Commands/${dir}`)
      .filter(file => file.endsWith('.js'))
      .forEach(file => {
        const command = require(`./Commands/${dir}/${file}`);
        acc.commands.set(command.name, command);
        //Create aliases for the command, if they exist
        command.aliases?.forEach(a => acc.commands.set(a, command));
      });
  });
console.log('- Finished Importing Commands');

console.log('- Creating Handlers');
fs.readdirSync('./Handlers')
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    require(`./Handlers/${file}`)(acc);
  });
console.log('- Finished Creating Handlers')

acc.login(process.env.TOKEN);

process.on('unhandledRejection', rejection => {
  console.log('- UNHANDLED REJECTION -');
  console.error(rejection);
});

process.on('uncaughtException', exception => {
  console.log('- UNCAUGHT EXCEPTION -');
  console.error(exception)
});