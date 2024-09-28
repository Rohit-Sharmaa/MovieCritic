import { Request, Response } from "express";
import Movie from "../../models/movie";
import Review from "../../models/review";
export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Movie.destroy({ where: { id } });
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting movie", error });
  }
};
