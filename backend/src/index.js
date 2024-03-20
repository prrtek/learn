import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";
dotenv.config({
  path: "../.env",
});
app.use(express.json());
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 1000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
