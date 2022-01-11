import { db, collectionInDBUsers } from "../db.js";

export async function userLogin(body, response) {
  const usersInDB = await db.collection(collectionInDBUsers).find(JSON.parse(body)).toArray();
  if (!usersInDB.length) {
    response.statusCode = 401;
    response.end(JSON.stringify({ message: "Status 401: Not found" }));
  } else {
    response.end(JSON.stringify({ message: "Status 200: OK" }));
  }
}
