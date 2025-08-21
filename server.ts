import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(
  cors({
    origin: "https://invoice-frontend-taupe.vercel.app",
    credentials: true,
  })
);

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/products/invoice", invoiceRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    isConnected = true;
    console.log("MongoDB Atlas Connected");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}
connectDB();

module.exports = app;
