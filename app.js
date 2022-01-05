import { getToDoList } from "./db.js";
import { setToDoItem } from "./db.js";
import { createUser } from "./db.js";
import { checkUser } from "./db.js";
import main from "./db.js";
import { option } from "./db.js";

import { ENDPOINTS } from "./const.js";

import * as http from "http";
import * as url from "url";

import bodyParser from "body-parser";

const hostname = "127.0.0.1";
const port = 3000;

main();

const server = http.createServer((request, response) => {
  const queryObject = url.parse(request.url, true);

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  response.setHeader("Access-Control-Allow-Credentials", true);

  let body = "";
  let collectionInDBTodos = "ToDoCollectionTodos";
  let collectionInDBUsers = "ToDoCollectionUser";

  if (request.method === "POST" && request.url === ENDPOINTS.ADD_DATA) {
    //switch case instead if else???
    request.on("data", (chunk) => {
      body += chunk;
      setToDoItem(body, collectionInDBTodos, response);
    });
  } else if (request.method === "GET" && request.url === ENDPOINTS.GET_DATA) {
    getToDoList(collectionInDBTodos, response, option.id);
  } else if (request.method === "POST" && request.url === ENDPOINTS.REGISTRATION) {
    request.on("data", (chunk) => {
      body += chunk;
      createUser(body, collectionInDBUsers, response);
    });
  } else if (request.method === "POST" && request.url === ENDPOINTS.AUTHORIZATION) {
    //authorization user && show all todos user
    request.on("data", (chunk) => {
      body += chunk;
      checkUser(body, collectionInDBUsers, collectionInDBTodos, response);
    });
  } else if (request.method === "GET" && queryObject.pathname === ENDPOINTS.GET_DATA) {
    getToDoList(collectionInDBTodos, response, queryObject.query.user_id);
  } else {
    response.end("Encorrect url or incorrect request method. Please check it");
    console.log("Encorrect url or incorrect request method. Please check it");
  }
  console.log("nice");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
