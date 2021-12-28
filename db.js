// const MongoClient = require("mongodb").MongoClient;

// // создаем объект MongoClient и передаем ему строку подключения
// const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
// mongoClient.connect(function (err, client) {
//   if (err) {
//     return console.log(err);
//   }
//   // взаимодействие с базой данных
//   client.close();
// });
// // "proxy": "http://127.0.0.1:3000/",
// // "Access-Control-Allow-Origin": "http://127.0.0.1:3000/",

// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);

// // const db = client.db("ToDoDatabase");

// // Подключаемся к серверу
// mongoClient.connect(function(err, client){
//        debugger
//   // обращаемся к базе данных admin
//   const db = client.db("admin");
//   // const db = client.db("ToDoDatabase");

//   db.command({ping: 1}, function(err, result){
//       if(!err){
//           console.log("Подключение с сервером успешно установлено");
//           console.log(result);
//       }
//       // Закрываем подключение
//       // client.close();
//       console.log("Подключение закрыто");
//   });
// });

//добить подключение сервака как в ствтье https://metanit.com/web/nodejs/6.1.php
//пересоздать базу данных(пересохранить)

// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//   try {
//     // Подключаемся к серверу
//     await mongoClient.connect();
//     // обращаемся к базе данных admin
//     const db = mongoClient.db("admin");
//     // выполняем пинг для проверки подключения
//     const result = await db.command({ ping: 1 });
//     console.log("Подключение с сервером успешно установлено");
//     console.log(result);
//   } catch (err) {
//     console.log("Возникла ошибка");
//     console.log(err);
//   } finally {
//     // Закрываем подключение при завершении работы или при ошибке
//     // await mongoClient.close();
//     console.log("Подключение закрыто");
//   }
// }
// run();



// export const MongoClient = require("mongodb").MongoClient;
    
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
 
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("ToDoDatabase");
//         const collection = db.collection("ToDoCollectionUser");
//         const count = await collection.countDocuments();
//         console.log(`В коллекции users ${count} документов`);
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();