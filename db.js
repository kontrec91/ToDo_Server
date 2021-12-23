const MongoClient = require("mongodb").MongoClient;

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
mongoClient.connect(function (err, client) {
  if (err) {
    return console.log(err);
  }
  // взаимодействие с базой данных
  client.close();
});
// "proxy": "http://127.0.0.1:3000/",
// "Access-Control-Allow-Origin": "http://127.0.0.1:3000/",