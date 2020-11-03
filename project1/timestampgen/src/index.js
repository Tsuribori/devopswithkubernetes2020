import express from "express";
import fs from "fs";

const app = express();

const outputTime = () => {
  const now = new Date();
  fs.writeFile("/usr/src/app/files/timestamp.txt", now);
  console.log(date);
};

app.listen("8080", () => {
  console.log("Server started in port 8080");
  setInterval(outputTime, 5000);
});
