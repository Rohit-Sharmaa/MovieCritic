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
exports.createMovie = void 0;
const movie_1 = __importDefault(require("../../models/movie"));
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, releaseDate } = req.body;
    try {
        console.log(name, releaseDate, "getting request  ");
        const movie = yield movie_1.default.create({
            name,
            releaseDate,
        });
        res.json(movie);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating movie", error });
    }
});
exports.createMovie = createMovie;
