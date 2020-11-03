import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();

const randString = uuidv4();

const outputHash = () => {
  fs.readFile("/usr/src/app/files/timestamp.txt", "utf8", (err, data) => {
    return `${data}: ${randString}`;
  });
};
app.get("/", (req, res) => {
  res.send(outputHash());
});

app.listen("8080", () => {
  console.log("Server started in port 8080");
});
