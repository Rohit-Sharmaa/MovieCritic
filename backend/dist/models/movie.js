"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const review_1 = __importDefault(require("./review"));
class Movie extends sequelize_1.Model {
}
Movie.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    averageRating: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: "movies",
});
Movie.hasMany(review_1.default, { foreignKey: "movieId", onDelete: "CASCADE" });
exports.default = Movie;
