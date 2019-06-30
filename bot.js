const discord = require("discord.js");
const Client = new discord.Client();

Client.on('ready', () => {
  console.log(`${bot.user.tag} is online!`)

  Client.user.setActivity("with xPaySafeCard", { type: "PLAYING" });

});

Client.on('message', async message => {
if (message.content === `Hello`){
message.reply(`Hello!`);
});
Client.login(process.env.BOT_TOKEN)
