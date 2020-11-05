import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());

let todos = new Object();
todos = ["Test1", "Test2"];

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/todo/", (req, res) => {
  res.json({ todos: todos });
});

app.post("/todo/", (req, res) => {
  console.log(req.body);
  let new_todo = req.body.todo;
  todos.push(new_todo);
  res.redirect("/");
});

app.listen("8080", () => {
  console.log("Server started in port 8080");
});
