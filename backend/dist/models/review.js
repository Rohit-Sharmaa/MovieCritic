"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const movie_1 = __importDefault(require("./movie"));
class Review extends sequelize_1.Model {
}
Review.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    movieId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: movie_1.default,
            key: "id",
        },
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    reviewer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    comments: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: "reviews",
});
Review.belongsTo(movie_1.default, { foreignKey: "movieId" });
exports.default = Review;
