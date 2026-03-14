const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const manufacturerRoutes = require("./routes/manufacturerRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const customerRoutes = require("./routes/customerRoutes");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/manufacturers", manufacturerRoutes);
app.use("/api/sellers", sellerRoutes);
app.use("/api/customers", customerRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Order Management API is running");
});