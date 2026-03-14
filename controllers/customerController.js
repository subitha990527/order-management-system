const { getDB } = require("../config/db");

exports.addCustomer = async (req, res) => {
  try {

    const db = getDB();

    const customer = {
      name: req.body.name,
      email: req.body.email
    };

    const result = await db.collection("customers").insertOne(customer);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};