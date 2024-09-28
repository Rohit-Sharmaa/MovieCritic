"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMovieModel = void 0;
const sequelize_1 = require("sequelize");
class Movie extends sequelize_1.Model {
}
const initMovieModel = (sequelize) => {
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
        sequelize,
        tableName: "movies",
    });
};
exports.initMovieModel = initMovieModel;
exports.default = Movie;
