const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

app.get("/", (req, res) => {
  res.status(200).send(`Count of clietns: ${wss.clients.size.toString()}`);
});

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    const parseObject = JSON.parse(message);
    wss.clients.forEach((client) =>
      client.send(JSON.stringify({ date: new Date(), ...parseObject }))
    );
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
