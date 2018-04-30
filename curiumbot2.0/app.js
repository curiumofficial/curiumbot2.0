const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


const prefix = "!";


client.on('message', (message) => {
  // our new check:
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // [rest of the code]
    if (message.content.startsWith(prefix + "help")) {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Bot Commands",
            description: "These are commands for the bot Beep Boop",
            fields: [{
              name: "!help", value: "This will give you a list of commands for the bot!" },
            { name: "!cru", value: "These command will give you curiums price" },
            { name: "!difficulty", value: "This will give you curiums current difficulty" },
            { name: "!blockcount", value: "This will give you the current block curium is on" },
            { name: "!hashrate", value: "These command will give you curiums price" },
            { name: "!supply", value: "This command will give you the amount of coins what have ever been made" },
            { name: "!installguide", value: "These is a guide on how to setup a curium masternode" },
            { name: "!cruinfo", value: "These command will give you information based on curium" }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© crubot"
            }
        }
        }
    });
});

client.on('message', (message) => {
  // our new check:
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // [rest of the code]
    if (message.content.startsWith(prefix + "cru")) {

    var price = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';
    var pprice = getJSON(price);
    var kprice = JSON.parse(pprice);
    kprice.price_usd = new pri(kprice.price_usd)
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "CRU price",
            description: "This is the prices for curium",
            fields: [{
                value: "This will give you a list of commands for the bot!" + kprice.price_usd
            }

            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© crubot"
            }
        }
        }
    });
});





client.login('token');
