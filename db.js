import * as mongodb from "mongodb";

  const dbName = "ToDoDatabase";
  const uri = `mongodb://127.0.0.1:27017/${dbName}`;

  const mongoClient = mongodb.MongoClient;

export function getRequest(body, collectionInDB, response) {
  mongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      const db = client.db(dbName);

      if (body !== "") {
        db.collection(collectionInDB).insertOne(JSON.parse(body));
      } else if(response !== undefined){
        db.collection(collectionInDB).find().toArray((err, user)=>{
          console.log(user);
          response.end(JSON.stringify(user));
        })
      }

      if (err) {
        console.log("can not connect to database");
      }
      console.log("nice");
    }
  );
}
