//Fill the "YOUR GUILD ID" with your guild id -> developer mode active -> right click on the server -> copy guild id
//Fill the "THE CHANNEL ID WHERE YOU WANT THE MEMBER COUNT" with your channel id -> developer mode active -> right click on the channel -> copy channel id

client.on(`ready`, async function() {
	let myGuild = client.guilds.get(`YOUR GUILD ID`);
	let memberCount = myGuild.memberCount;
	let memberCountChannel = myGuild.channels.get(`THE CHANNEL ID WHERE YOU WANT THE MEMBER COUNT`);
	memberCountChannel.setName(`Members: ` + memberCount)
	.catch(error => console.log(error));
	
});

client.on(`guildMemberAdd`, async function(member) {
	let myGuild = client.guilds.get(`YOUR GUILD ID`);
	let memberCount = myGuild.memberCount;
	console.log(`${member} join the server.`);
	let memberCountChannel = myGuild.channels.get(`THE CHANNEL ID WHERE YOU WANT THE MEMBER COUNT`);
	memberCountChannel.setName(`Members: ` + memberCount)
	.catch(error => console.log(error));

});

client.on(`guildMemberRemove`, async function(member) {
	let myGuild = client.guilds.get(`YOUR GUILD ID`);
	let memberCount = myGuild.memberCount;
	console.log(`${member} quit the server.`);
	let memberCountChannel = myGuild.channels.get(`THE CHANNEL ID WHERE YOU WANT THE MEMBER COUNT`);
	memberCountChannel.setName(`Members: ` + memberCount)
	.catch(error => console.log(error));

});
