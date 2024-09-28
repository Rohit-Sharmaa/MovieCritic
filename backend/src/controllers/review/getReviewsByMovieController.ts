import { Request, Response } from "express";
import Review from "../../models/review";

export const getReviewsByMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    const reviews = await Review.findAll({ where: { movieId } });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};
