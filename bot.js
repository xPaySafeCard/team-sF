const discord = require("discord.js");
const bot = new discord.bot();

bot.on('ready', () => {
  console.log(`${bot.user.tag} is online!`)

  bot.user.setActivity("with xPaySafeCard", { type: "PLAYING" });

});

bot.on('message', async message => {
if (message.content === `Hello`){
message.reply(`Hello!`);
});
bot.login(process.env.BOT_TOKEN)
