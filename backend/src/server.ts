import express from "express";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import sequelize from "./config/db";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(
      "Unable to connect to the database: " +
        (error instanceof Error ? error.message : String(error))
    );
  }
};

startServer();
