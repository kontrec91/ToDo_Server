import { db, collectionInDBTodos } from "../db.js";

export async function getToDoList(response, userID) {
  db.collection(collectionInDBTodos)
    .find()
    .toArray((err, user) => {
      const userToDoListArray = user.filter((item) => {
        return item.userId === userID;
      });
      if (userToDoListArray.length) {
        response.statusCode = 200;
        response.end(JSON.stringify(userToDoListArray)); //show todos
      } else {
        response.statusCode = 404;
        response.end(JSON.stringify({ message: "Status 404: Not Found. User haven`t any data yet" }));
      }
    });
}
