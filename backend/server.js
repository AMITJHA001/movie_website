import express from "express";
import cors from "cors";
import movieRoutes from "./route/movieRoute.js";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running properly!");
  res.end();
});

app.use("/api/movies", movieRoutes);

mongoose
  .connect("mongodb://localhost:27017/movies")
  .then(() => console.log("Mongo is connected!"))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
