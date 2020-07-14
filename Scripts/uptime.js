//copy this in:
//"client.on("message", async function (message) {}"
//preferably after:
//"const command = args.shift().toLowerCase();

if (command === 'uptime') {
	var milliseconds = parseInt((message.client.uptime % 1000) / 100),
		seconds = parseInt((message.client.uptime / 1000) % 60),
		minutes = parseInt((message.client.uptime / (1000 * 60)) % 60),
		hours = parseInt((message.client.uptime / (1000 * 60 * 60)) % 24);

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	message.channel.send(
		"⏲️ I've been running for " +
			hours +
			' hours, ' +
			minutes +
			' minutes and ' +
			seconds +
			'.' +
			milliseconds +
			' seconds! ⏲️'
	);
}
