const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in...);
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login('ODczOTUxMjYzMzcxNDUyNDc2.YQ_4ig.VpONiB0X9gYkkw1iQ9g_r5Yck04');
