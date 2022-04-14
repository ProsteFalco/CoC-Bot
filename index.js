const Discord = require("discord.js")

require("dotenv").config()

const prefix = "-"

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
    
    if(!message.content.startsWith(prefix) || message.content.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'status'){
        message.channel.send("Fully working!")
    }

    if(command === 'hi'){
        message.channel.send('Hello!')
    }

    if(command === 'help'){
        message.channel.send("I'm here to help!\n\nHere is the list of command you can try: hi, status.")
    }

    
    
})





client.login(process.env.TOKEN)