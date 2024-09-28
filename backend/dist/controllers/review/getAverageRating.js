"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageRating = void 0;
const db_1 = __importDefault(require("../../config/db"));
const review_1 = __importDefault(require("../../models/review"));
const getAverageRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieId = parseInt(req.params.movieId, 10);
    try {
        const averageRating = yield review_1.default.findOne({
            where: { movieId },
            attributes: [
                [db_1.default.fn("AVG", db_1.default.col("rating")), "averageRating"],
            ],
        });
        if (averageRating) {
            res.json({ averageRating: averageRating.get("averageRating") });
        }
        else {
            res.status(404).json({ message: "No reviews found for this movie." });
        }
    }
    catch (error) {
        console.error("Error fetching average rating:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getAverageRating = getAverageRating;
