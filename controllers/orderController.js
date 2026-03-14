const { ObjectId } = require("mongodb");
// const getDB = require("../config/db");
const { getDB } = require("../config/db");


// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const db = getDB();

    const {
      productId,
      manufacturerId,
      sellerId,
      customerId,
      quantity,
      price
    } = req.body;

    const order = {
      productId: new ObjectId(productId),
      manufacturerId: new ObjectId(manufacturerId),
      sellerId: new ObjectId(sellerId),
      customerId: new ObjectId(customerId),
      quantity: quantity,
      price: price,
      createdAt: new Date()
    };

    const result = await db.collection("orders").insertOne(order);

    res.json({
      message: "Order created successfully",
      orderId: result.insertedId
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// GET ALL ORDERS (Pagination)
exports.getAllOrders = async (req, res) => {
  try {
    const db = getDB();

    const page = parseInt(req.query.page) || 1;
    const limit = 5;

    const orders = await db.collection("orders")
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "product"
          }
        },
        { $unwind: "$product" },

        {
          $lookup: {
            from: "manufacturers",
            localField: "manufacturerId",
            foreignField: "_id",
            as: "manufacturer"
          }
        },
        { $unwind: "$manufacturer" },

        {
          $lookup: {
            from: "sellers",
            localField: "sellerId",
            foreignField: "_id",
            as: "seller"
          }
        },
        { $unwind: "$seller" },

        {
          $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "_id",
            as: "customer"
          }
        },
        { $unwind: "$customer" },

        { $skip: (page - 1) * limit },
        { $limit: limit }

      ])
      .toArray();

    res.json(orders);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// MOST ORDERED PRODUCTS
exports.getMostOrderedProducts = async (req, res) => {
  try {
    const db = getDB();

    const result = await db.collection("orders")
      .aggregate([
        {
          $group: {
            _id: "$productId",
            totalOrders: { $sum: 1 }
          }
        },
        { $sort: { totalOrders: -1 } },

        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "_id",
            as: "product"
          }
        },
        { $unwind: "$product" }
      ])
      .toArray();

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// MONTHLY REVENUE
exports.getMonthlyRevenue = async (req, res) => {
  try {
    const db = getDB();

    const result = await db.collection("orders")
      .aggregate([
        {
          $group: {
            _id: { $month: "$createdAt" },
            totalOrders: { $sum: 1 },
            revenue: { $sum: { $multiply: ["$price", "$quantity"] } }
          }
        },
        { $sort: { _id: 1 } }
      ])
      .toArray();

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};