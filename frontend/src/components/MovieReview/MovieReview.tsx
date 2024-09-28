import React, { FC, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const MovieReview: FC = () => {
  const [movies, setMovies] = useState<{ id: number; name: string }[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [comments, setComments] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get<
          { id: number; name: string }[]
        >("/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewData = {
      movieId: parseInt(selectedMovie),
      reviewer: name,
      rating,
      comments,
    };

    try {
      await axiosInstance.post("/reviews", reviewData);
      console.log("Review submitted:", reviewData);

      setSelectedMovie("");
      setName("");
      setRating(0);
      setComments("");
      alert("Review submitted");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="mt-28 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4">Add new review</h2>
        <div className="mb-4">
          <label htmlFor="movie" className="block text-gray-700 font-bold mb-2">
            Select a movie
          </label>
          <select
            id="movie"
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select movie</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-bold mb-2"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value, 10))}
            placeholder="Rating out of 10"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comments"
            className="block text-gray-700 font-bold mb-2"
          >
            Comments
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Review comments"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto block"
        >
          Add review
        </button>
      </form>
    </div>
  );
};

export default MovieReview;
