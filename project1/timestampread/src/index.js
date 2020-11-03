import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();

const randString = uuidv4();

const outputHash = () => {
  let data = fs.readFileSync("/usr/src/app/files/timestamp.txt", "utf8");
  return `${data}: ${randString}`;
};
const outputPong = () => {
  let data = fs.readFileSync("/usr/src/app/files/pong.txt", "utf8");
  return `Ping / Pongs: : ${data}`;
};
app.get("/", (req, res) => {
  let output = outputHash() + "<br>" + outputPong();
  res.send(output);
});

app.listen("8080", () => {
  console.log("Server started in port 8080");
});
