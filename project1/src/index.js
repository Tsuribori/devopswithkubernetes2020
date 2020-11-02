import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

const randString = uuidv4();

let dateHash = new Object();

const outputRandom = () => {
  const now = new Date();
  const hashString = `${now}: ${randString}`;
  dateHash = hashString;
  console.log(hashString);
};

app.get("/", (req, res) => {
  res.send(dateHash);
});

app.listen("8080", () => {
  console.log("Server started in port 8080");
  setInterval(outputRandom, 5000);
});
