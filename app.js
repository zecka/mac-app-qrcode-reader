var connect = require("connect");
const path = require("path");
const express = require("express");
const app = express();
const port = require("./port");
const getIpLocal = require("./iplocal");
const writer = require("./controllers/writer");
const serveStatic = require("serve-static");
const electronController = require("./controllers/electron");

app.get("/api/iplocal", function (req, res) {
  writer();
  res.json({ iplocal: getIpLocal() });
});
app.get("/api/**", function (req, res) {
  console.log("404");
  writer();
  res.send(404);
});
app.use(express.static(path.join(__dirname, "vue/dist")));
app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "vue/dist/index.html"));
});
app.use(function (req, res) {
  res.send(404);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

electronController.run();
