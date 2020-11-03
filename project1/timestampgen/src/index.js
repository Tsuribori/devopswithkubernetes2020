import express from "express";
import fs from "fs";

const app = express();

const outputTime = () => {
  const now = new Date();
  fs.writeFileSync("/usr/src/app/files/timestamp.txt", now);
  console.log(now);
};

setInterval(outputTime, 5000);

//app.listen("8081", () => {
//  console.log("Server started in port 8081");
//  setInterval(outputTime, 5000);
//});
