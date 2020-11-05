import express from "express";
import fs from "fs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const app = express();

const randString = uuidv4();

const outputHash = async () => {
  let response = await axios.get("http://localhost:8081/time");
  return `${response.data.time}: ${randString}`;
};
const outputPong = async () => {
  let response = await axios.get("http://pingpong-svc:2346/api/pong");
  return `Ping / Pongs: ${response.data.pong}`;
};
app.get("/", async (req, res) => {
  let output = `${await outputHash()}
         <br>
         ${await outputPong()}
         <br>
         <img src="/animal.png">
         <br>
         <input type="text" max="140">
         <input type="submit" value="Create Todo">
         <ul>
           <li>Todo 1</li>
           <li>Todo 2</li>
         </ul>`;
  res.send(output);
});

app.get("/animal.png", (req, res) => {
  res.sendFile("/usr/src/app/files/animal.png");
});
app.listen("8080", () => {
  console.log("Server started in port 8080");
});
