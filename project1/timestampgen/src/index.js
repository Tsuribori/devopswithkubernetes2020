import express from "express";
import axios from "axios";
import fs from "fs";

const app = express();

const writeAnimal = async () => {
  const response = await axios({
    method: "GET",
    url: "https://picsum.photos/1200",
    responseType: "stream",
  });

  response.data.pipe(fs.createWriteStream("/usr/src/app/files/animal.png"));
};

writeAnimal();

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
