import { Request, Response } from "express";
import Review from "../../models/review";
export const addReview = async (req: Request, res: Response) => {
  const { movieId, rating, reviewer, comments } = req.body;
  try {
    const review = await Review.create({
      movieId,
      rating,
      reviewer,
      comments,
    });
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Error adding review", error });
  }
};
