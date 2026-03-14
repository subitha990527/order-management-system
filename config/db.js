// const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// let database;

// async function connectDB() {
//   await client.connect();
//   database = client.db("order_management");
//   console.log("MongoDB Connected");
// }

// function getDB() {
//   return database;
// }

// module.exports = { connectDB, getDB };

// const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017";
// const dbName = "order-management";

// let db;

// const connectDB = async () => {
//   const client = new MongoClient(url);

//   await client.connect();
//   console.log("MongoDB Connected");

//   db = client.db(dbName);
// };

// const getDB = () => {
//   return db;
// };

// module.exports = { connectDB, getDB };

const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let database;

async function connectDB() {
  await client.connect();
  database = client.db("order_management"); // same DB
  console.log("MongoDB Connected");
}

function getDB() {
  return database;
}

module.exports = { connectDB, getDB };