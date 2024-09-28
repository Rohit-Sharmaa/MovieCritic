import { Request, Response } from "express";
import Movie from "../../models/movie";
import Review from "../../models/review";

export const createMovie = async (req: Request, res: Response) => {
  const { name, releaseDate } = req.body;
  try {
    console.log(name, releaseDate, "getting request  ");
    const movie = await Movie.create({
      name,
      releaseDate,
    });
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating movie", error });
  }
};
