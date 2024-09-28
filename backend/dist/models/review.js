"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initReviewModel = void 0;
const sequelize_1 = require("sequelize");
class Review extends sequelize_1.Model {
}
const initReviewModel = (sequelize) => {
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
                model: "movies",
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
        sequelize,
        tableName: "reviews",
    });
};
exports.initReviewModel = initReviewModel;
exports.default = Review;
