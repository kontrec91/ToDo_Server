import { getRequest } from "./db.js";

import * as http from "http";
import bodyParser from "body-parser";

const hostname = "127.0.0.1";
const port = 3000;

const arr = [];

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  response.setHeader("Access-Control-Allow-Credentials", true);

  let body = "";
  let collectionInDB = "ToDoCollectionTodos";

  if (request.method === "POST") {
    request.on("data", (chunk) => {
      body += chunk;
      getRequest(body, collectionInDB);
      response.end(JSON.stringify(body));
    });
  } else if (request.method === "GET") {
    getRequest(body, collectionInDB, response);
  }

  console.log("nice");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
