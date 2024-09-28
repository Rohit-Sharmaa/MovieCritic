import { DataTypes, Model, Sequelize } from "sequelize";

class Review extends Model {
  public id!: number;
  public movieId!: number;
  public rating!: number;
  public reviewer?: string;
  public comments!: string;
  public readonly movie?: any;
}

export const initReviewModel = (sequelize: Sequelize) => {
  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "movies",
          key: "id",
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reviewer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "reviews",
    }
  );
};

export default Review;
