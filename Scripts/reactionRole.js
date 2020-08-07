//Fill the "CHANNEL ID OF MESSAGE" with your channel id -> developer mode active -> right click on the channel -> copy channel id
//Fill the "ID OF MESSAGE" with your message id -> developer mode active -> right click on the message -> copy message id
//Fill the "EMOJI ID HERE" with your emoji id -> how to get a custom emoji id: https://support.discord.com/hc/en-us/community/posts/360043210111/comments/360008563772
//Fill the "YOUR ROLE NAME HERE" with the name of your role

let channel_id = "CHANNEL ID OF MESSAGE"; 
let message_id = "ID OF MESSAGE";

client.on("ready", (reaction, user) => { //<-- This is already in your bot.js file, copy the rest of the code below

client.channels.get(channel_id).fetchMessage(message_id).then(m => {
        console.log("Cached reaction message.");
    }).catch(e => {
    console.error("Error loading message.");
    console.error(e);
    });

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.emoji.id == "EMOJI ID HERE" && reaction.message.id === message_id) 
        {
            guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
                {
                    let role = (member.guild.roles.find(role => role.name === "YOUR ROLE NAME HERE"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    }
                    );
                });
        }
}
