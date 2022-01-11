import { MongoClient } from "mongodb";
import { ObjectID } from "bson";

const dbName = "ToDoDatabase";
const uri = `mongodb://127.0.0.1:27017/${dbName}`;
export const collectionInDBTodos = "ToDoCollectionTodos";
export const collectionInDBUsers = "ToDoCollectionUser";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function main() {
  await client.connect();
}

export const db = client.db(dbName);

export async function isValidID(body, response, callback) {
  const todo = JSON.parse(body);
  if (ObjectID.isValid(todo.userId)) {
    await callback(todo, response);
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({ message: "Incorrect ID, please check it" }));
  }
}

