// import { MongoClient } from "./db.js";

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const arr = [];

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.setHeader("Content-Type", "application/json");
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   response.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   response.setHeader("Access-Control-Allow-Credentials", true);

//   let body = "";
//   if (request.method === "POST") {
//     request.on("data", (chunk) => {
//       console.log('A chunk of data has arrived: ', chunk);
//       // body += JSON.stringify(chunk);
//       body += chunk;
//       arr.push(body)
//       response.end(JSON.stringify(arr));
//     });
//   } else if (request.method === "GET") {
//     response.end(JSON.stringify(arr));
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const MongoClient = require("mongodb").MongoClient;
// // const url = "mongodb://localhost/Blog";
// const url = "mongodb://localhost:27017/";

// console.log("yes")

// http.createServer(function (req, res) {
//   console.log(1)
//   MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       console.log(db)
//       console.log(2)
//   });
// }).listen(27017);

// import { createDB, getRequest } from "./db.js";
import { getRequest } from "./db.js";

import * as http from 'http';
import bodyParser from "body-parser";

// const http = require("http");
// const mongoClient = require("mongodb").MongoClient;
// const bodyParser = require("body-parser");

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
  let collection = "ToDoCollectionTodos";

  // createDB();

      if (request.method === "POST") {
        request.on("data", (chunk) => {
          console.log("chunk: ", request);
          body += chunk;
          console.log(typeof body);
          // db.collection(collection).insertOne(JSON.parse(body));
          getRequest(body, collection);
          response.end(JSON.stringify(body));
        });
      } else if (request.method === "GET") {
      }

      console.log("nice");

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
