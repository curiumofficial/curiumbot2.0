const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const prefix = "!"; 



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', !help => {
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
            { name: "!supply", value: "You can put [masked links](http://google.com) inside of rich embeds." },
            { name: "!installguide", value: "You can put all the *usual* **__Markdown__** inside of them." },
            { name: "!cruinfo", value: "These command will give you curiums price" }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© crubot"
            }
        }
    });
});






client.login('token');
