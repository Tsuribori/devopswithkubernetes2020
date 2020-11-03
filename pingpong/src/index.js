import express from "express";
import fs from "fs";
const app = express();

let pong = new Object();
pong = 0;
fs.writeFileSync("/usr/src/app/files/pong.txt", pong);

app.get("/", (req, res) => {
  res.send(`pong ${pong}`);
  pong += 1;
  fs.writeFileSync("/usr/src/app/files/pong.txt", pong);
});

app.listen("8080", () => {
  console.log("Server started in port 8080");
});
