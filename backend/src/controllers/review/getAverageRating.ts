import { Request, Response } from "express";
import { Op } from "sequelize";
import sequelize from "../../config/db";
import Review from "../../models/review";

export const getAverageRating = async (
  req: Request,
  res: Response
): Promise<void> => {
  const movieId = parseInt(req.params.movieId, 10);

  try {
    const averageRating = await Review.findOne({
      where: { movieId },
      attributes: [
        [sequelize.fn("AVG", sequelize.col("rating")), "averageRating"],
      ],
    });

    if (averageRating) {
      res.json({ averageRating: averageRating.get("averageRating") });
    } else {
      res.status(404).json({ message: "No reviews found for this movie." });
    }
  } catch (error) {
    console.error("Error fetching average rating:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
