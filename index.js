const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds]
})

client.on("ready",  () => {
    console.log(`Logged in as ${client.user.tag}!`);
    if (!role) {
        console.error("يجب عليك وضع الرتبة")
        client.destroy()
    }
    
})

const role = "" /// الرتبة الي بتعطيها الشخص


client.on("guildMemberAdd", (member) => {
    member.roles.add(role) 

})

client.login("YOUR-BOT-TOKEN")