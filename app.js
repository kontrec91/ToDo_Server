import main, { isValidID } from "./db.js";

import { getToDoList } from "./components/getToDoList.js";
import { setToDoItem } from "./components/setToDoItem.js";
import { userReg } from "./components/userReg.js";
import { userLogin } from "./components/userLogin.js";
import { ENDPOINTS } from "./const.js";

import * as http from "http";
import * as url from "url";

const hostname = "127.0.0.1";
const port = 3000;

main();

const server = http.createServer((request, response) => {
  const queryObject = url.parse(request.url, true);

  response.setHeader("Content-Type", "text/plain");
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  response.setHeader("Access-Control-Allow-Credentials", true);

  if (request.method === "POST" && request.url === ENDPOINTS.ADD_DATA) {
    request.on("data", (chunk) => {
      isValidID(chunk, response, setToDoItem);
    });
  } else if (request.method === "POST" && request.url === ENDPOINTS.REGISTRATION) {
    request.on("data", (chunk) => {
      userReg(chunk, response);
    });
  } else if (request.method === "POST" && request.url === ENDPOINTS.AUTHORIZATION) {
    request.on("data", (chunk) => {
      userLogin(chunk, response);
    });
  } else if (request.method === "GET" && queryObject.pathname === ENDPOINTS.GET_DATA) {
    getToDoList(response, queryObject.query.user_id);
  } else {
    response.end(JSON.stringify({ message: "Encorrect url or incorrect request method. Please check it" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
