import { DataTypes, Model, Sequelize } from "sequelize";

class Movie extends Model {
  public id!: number;
  public name!: string;
  public releaseDate!: Date;
  public averageRating?: number;
  public readonly reviews?: any[];
}

export const initMovieModel = (sequelize: Sequelize) => {
  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      averageRating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "movies",
    }
  );
};

export default Movie;
