import { Router } from "express";
import { getMovies } from "../controllers/movie/getMoviesController";
import { createMovie } from "../controllers/movie/createMoviesController";
import { deleteMovie } from "../controllers/movie/deleteMoviesController";

const router = Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);

export default router;
