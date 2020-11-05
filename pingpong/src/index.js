import express from "express";
const app = express();

let pong = new Object();
pong = 0;

app.get("/", (req, res) => {
  res.send(`pong ${pong}`);
  pong += 1;
});

app.get("/api/pong", (req, res) => {
  res.json({ pong: pong });
  pong += 1;
});

app.listen("8080", () => {
  console.log("Server started in port 8080");
});
