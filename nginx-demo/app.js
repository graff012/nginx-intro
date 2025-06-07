const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const hostname = os.hostname();
  res.send(`
    <h1>Server: ${hostname}</h1>
    <p>This server is responding to you</p>
    <p>The time is: ${new Date().toLocaleString()}</p>
`);
});

app.listen(PORT, () => console.log("Server running port, ", PORT));
