import Movie, { initMovieModel } from "./movie";
import Review, { initReviewModel } from "./review";

export const setupModels = (sequelize: any) => {
  initMovieModel(sequelize);
  initReviewModel(sequelize);

  Movie.hasMany(Review, { foreignKey: "movieId", onDelete: "CASCADE" });
  Review.belongsTo(Movie, { foreignKey: "movieId" });
};
