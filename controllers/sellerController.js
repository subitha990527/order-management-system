const { getDB } = require("../config/db");

exports.addSeller = async (req, res) => {
  try {

    const db = getDB();

    const seller = {
      name: req.body.name,
      location: req.body.location
    };

    const result = await db.collection("sellers").insertOne(seller);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};