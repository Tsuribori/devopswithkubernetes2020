import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

const randString = uuidv4();

const outputRandom = () => {
  const now = new Date();
  console.log(`${now}: ${randString}`);
};

app.listen("8080", () => {
  setInterval(outputRandom, 5000);
});
