import { Request, Response } from "express";
import Movie from "../../models/movie";
import Review from "../../models/review";
export const getMovies = async (req: Request, res: Response) => {
  try {
    console.log("getting request");
    const movies = await Movie.findAll({ include: Review });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error });
  }
};
