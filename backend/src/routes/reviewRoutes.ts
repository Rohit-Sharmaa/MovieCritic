import { Router } from "express";
import { getReviewsByMovie } from "../controllers/review/getReviewsByMovieController";
import { addReview } from "../controllers/review/addReviewController";
import { getAverageRating } from "../controllers/review/getAverageRating";

const router = Router();

router.get("/:movieId", getReviewsByMovie);
router.post("/", addReview);
router.get("/:movieId/average-rating", getAverageRating);

export default router;
