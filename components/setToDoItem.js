import { db, collectionInDBTodos, collectionInDBUsers } from "../db.js";
import { ObjectID } from "bson";

export async function setToDoItem(body, response) {
  const id = new ObjectID(body.userId);

  const currentUser = await db.collection(collectionInDBUsers).find({ _id: id }).toArray();

  if (currentUser.length) {
    db.collection(collectionInDBTodos).insertOne(body);
    response.statusCode = 201;
    response.end(JSON.stringify({ message: "Status 201: OK" }));
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({ message: "Status 404: Not Found" }));
  }
}
