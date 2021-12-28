import * as mongodb from "mongodb";

// export function createDB() {
  const dbName = "ToDoDatabase";
  const uri = `mongodb://127.0.0.1:27017/${dbName}`;

  const mongoClient = mongodb.MongoClient;
// }

export function getRequest(body, collection) {
  mongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      const db = client.db(dbName);

      console.log("client", client);
      //   if (request.method === "POST") {
      //     request.on("data", (chunk) => {
      //       console.log("chunk: ", request);
      //       body += chunk;
      //       console.log(typeof body);
      if (body !== "") {
        db.collection(collection).insertOne(JSON.parse(body));
      }
      //       response.end(JSON.stringify(body));
      //     });
      //   } else if (request.method === "GET") {
      //   }

      if (err) {
        console.log("can not connect to database");
      }
      console.log("nice");
    }
  );
}
