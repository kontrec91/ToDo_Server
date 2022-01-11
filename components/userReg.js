import { db, collectionInDBUsers } from "../db.js";

export async function userReg(body, response) {
  const userEmail = JSON.parse(body).email;
  const userInDB = await db.collection(collectionInDBUsers).find({ email: userEmail }).toArray();
  if (!userInDB.length) {
    db.collection(collectionInDBUsers).insertOne(JSON.parse(body));
    response.statusCode = 201;
    response.end(JSON.stringify(body));
  } else {
    response.statusCode = 401;
    response.end(JSON.stringify({ message: "User is alredy registered. Please log in" }));
  }
}
