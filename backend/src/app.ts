import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cryptoRoutes from "./routes/crypto.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/crypto", cryptoRoutes);
app.get("/", (req, res) => {
  res.send("API working properly");
});

export default app;
