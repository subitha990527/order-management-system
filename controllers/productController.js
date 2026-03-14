const { getDB } = require("../config/db");

exports.addProduct = async (req, res) => {

  const db = getDB();

  const product = {
    name: req.body.name,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    seller: req.body.seller,
    status: "instock",
    lastUpdatedBy: null
  };

  const result = await db.collection("products").insertOne(product);

  res.json(result);
};


const { ObjectId } = require("mongodb");

exports.updateProductStatus = async (req, res) => {

  const db = getDB();

  const result = await db.collection("products").updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        status: req.body.status,
        lastUpdatedBy: req.body.updatedBy
      }
    }
  );

  res.json(result);
};


exports.getFaultyProducts = async (req, res) => {

  const db = getDB();

  const products = await db
    .collection("products")
    .find({ status: "faulty" })
    .toArray();

  res.json(products);
};