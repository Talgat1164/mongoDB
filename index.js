const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://Talgat:Talgat2000@cluster0.9bio9ra.mongodb.net/?retryWrites=true&w=majority"
);

const start = async () => {
  try {
    await client.connect();
    console.log("Соединение установлено");
    await client.db().createCollection("users");
    const users = client.db().collection("users");
    await users.insertOne({ name: "Talgat", age: 22 });
    const user = await users.findOne({ name: "Talgat" });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

start();
