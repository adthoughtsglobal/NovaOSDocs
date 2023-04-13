const WebSocket = require('ws');

CLIENTS = [];
const wss = new WebSocket.Server({ port: 80 });
wss.on('connection', (ws) => {
	CLIENTS.push(ws);
	console.log("New Client Login Suspected");
	ws.on('message', (data) => {
		wss.clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(data);
			}
		});
	});
});
