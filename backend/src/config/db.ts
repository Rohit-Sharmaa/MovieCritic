import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { setupModels } from "../models/relation";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
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

setupModels(sequelize);

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();

export default sequelize;
