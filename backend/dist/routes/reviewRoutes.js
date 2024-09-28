"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getReviewsByMovieController_1 = require("../controllers/review/getReviewsByMovieController");
const addReviewController_1 = require("../controllers/review/addReviewController");
const router = (0, express_1.Router)();
router.get("/:movieId", getReviewsByMovieController_1.getReviewsByMovie);
router.post("/", addReviewController_1.addReview);
exports.default = router;
