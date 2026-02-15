import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  rating: Number,
  poster: String,
});

export default mongoose.model("movies", movieSchema);
