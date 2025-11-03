
import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/products.js"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

app.get("/api/Home/subs/:subcategory", async (req, res) => {
  const { subcategory } = req.params;

  try {
    const currProducts = await Product.find({ subcategory });
    res.json(currProducts);
  } catch (err) {
    console.error("Error fetching subcategory products:", err);
    res.status(500).json({ message: "Server Error" });
  }
});




app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params; 

  try {
    const currProduct = await Product.findById(id);
    if (!currProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(currProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/Home/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const subcategories = await Product.distinct("subcategory", { category });
    res.json({ category, subcategories });
  } catch (err) {
    console.error("Error fetching subcategories:", err);
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/api/Home/:category/:subcategory", async (req, res) => {
  const { category, subcategory } = req.params;

  try {
    let products;

    if (subcategory === "All") {
      products = await Product.find({ category: category });
    } else {
      products = await Product.find({ category: category, subcategory: subcategory });
    }

    res.json(products); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});









const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
