import { MongoClient } from "mongodb";

const dbName = "ToDoDatabase";
const uri = `mongodb://127.0.0.1:27017/${dbName}`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function main() {
  await client.connect();
}

const db = client.db(dbName);

export const option = { id: "user_id" };

export async function getToDoList(collectionInDB, response = undefined, userID) {
  //GET user-data in collection
  db.collection(collectionInDB)
    .find()
    .toArray((err, user) => {
      if (userID) {
        const userToDoListArray = user.filter((item) => item.userId === userID);
        response.end(JSON.stringify(userToDoListArray)); //show todos
      } else {
        response.end(JSON.stringify("Please registered or log in"));
      }
    });
}

export function setToDoItem(body, collectionInDB, response) {
  //is body valid? if body have.....
  body = JSON.parse(body);
  body.userId = option.id;
  db.collection(collectionInDB).insertOne(body); //отдельная функция Post data in ToDoList
  getToDoList(collectionInDB, response, option.id);
} //response 200 if ok,show  {} in collection

export function createUser(body, collectionInDB, response) {
  db.collection(collectionInDB).insertOne(JSON.parse(body)); //отдельная функция Post user in ToDoUser
  response.end(JSON.stringify(body));
  // response.end(JSON.stringify("Status 200", body));
} //response 200 if ok,show  {} in collection

export async function checkUser(body, collectionInDBUsers, collectionInDBTodos, response) {
  const usersInDB = await db.collection(collectionInDBUsers).find(JSON.parse(body)).toArray();
  if(!usersInDB.length){
    response.end("Status 400: Not found");
  } else {
    option.id = usersInDB[0]._id.toString();
    getToDoList(collectionInDBTodos, response, usersInDB[0]._id.toString());
  }
}