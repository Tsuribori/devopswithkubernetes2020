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

const getTodos = async () => {
  let response = await axios.get("http://backend-svc.dwk-namespace:2347/todo");
  let todos = response.data.todos;
  return `<ul>${todos.map((todo) => `<li>${todo}</li>`)}</ul>`;
};

app.get("/", async (req, res) => {
  let output = `
         ${process.env.MESSAGE}
         <br>
         ${await outputHash()}
         <br>
         ${await outputPong()}
         <br>
         <img src="/animal.png">
         <br>
         <form action="/backend/todo" method="POST">
         <input type="text" name="todo" max="140">
         <input type="submit" value="Create Todo">
         </form>
         ${await getTodos()}`;
  res.send(output);
});

app.get("/animal.png", (req, res) => {
  res.sendFile("/usr/src/app/files/animal.png");
});
app.listen("8080", () => {
  console.log("Server started in port 8080");
});
