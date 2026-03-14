const { getDB } = require("../config/db");

exports.addManufacturer = async (req, res) => {
  try {

    const db = getDB();

    const manufacturer = {
      name: req.body.name,
      location: req.body.location
    };

    const result = await db.collection("manufacturers").insertOne(manufacturer);

    res.json(result);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};