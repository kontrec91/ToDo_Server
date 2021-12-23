const http = require("http");

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
  if (request.method === "POST") {
    request.on("data", (chunk) => {
      console.log('A chunk of data has arrived: ', chunk);
      // body += JSON.stringify(chunk);
      body += chunk;
      arr.push(body)
      response.end(JSON.stringify(arr));
    });
  } else if (request.method === "GET") {
    response.end(JSON.stringify(arr));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


