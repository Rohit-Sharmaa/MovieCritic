import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrChapterAdd } from "react-icons/gr";
import axiosInstance from "../../utils/axiosInstance";

interface Review {
  id: number;
  movieId: number;
  rating: number;
  reviewer: string;
  comments: string;
}

interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  averageRating: number | null;
  Reviews: Review[];
}

const Cards: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get<Movie[]>("/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = async (movieId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie and its reviews?"
    );
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`/movies/${movieId}`);
        alert("Movie deleted successfully!");

        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== movieId)
        );
      } catch (error) {
        console.error("Error deleting movie:", error);
        alert("Failed to delete the movie. Please try again.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5 flex flex-wrap gap-10">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-purple-200 w-80 h-40 p-4 rounded-sm cursor-pointer"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <div className="font-bold">{movie.name}</div>
          <div className="italic">
            Released: {new Date(movie.releaseDate).toLocaleDateString()}
          </div>
          <div className="font-bold">
            Average Rating:{" "}
            {movie.averageRating !== null
              ? movie.averageRating
              : "Not rated yet"}
          </div>

          <div className="flex flex-wrap gap-1 mt-6 ml-52">
            <GrChapterAdd className="cursor-pointer" fontSize={20} />
            <MdDelete
              className="cursor-pointer"
              fontSize={20}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(movie.id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
