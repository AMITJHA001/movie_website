import Movie from "../model/movies.js";

const getList = async (req, res) => {
  const movies = await Movie.find();
  return res.json(movies);
};

export { getList };
