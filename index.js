const Discord = require("discord.js")

require("dotenv").config()

const TOKEN = "OTY0MjUzNDAyOTAzMjI4NTE2.Ylh89g.iOai-keufe1iZTJDVsbw0V_n2sI"

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