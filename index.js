const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () =>{
    console.log("Logged!")
})

client.on("message", (message) =>{
    if (message.content == "Hi"){
        message.reply("Hello " + message.author.username + "!")
    }
})

client.login(process.env.TOKEN)