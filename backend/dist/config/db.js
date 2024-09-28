"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Database connection is established successfully");
})
    .catch((error) => {
    console.log("Unable to connect to the database: " + error.message);
    process.exit(1);
});
exports.default = sequelize;
