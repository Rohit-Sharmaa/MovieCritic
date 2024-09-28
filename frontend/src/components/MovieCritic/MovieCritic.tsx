import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { MdDelete } from "react-icons/md";
import { GrChapterAdd } from "react-icons/gr";

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

const MovieDetail: FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosInstance.get<Review[]>(
          `/reviews/${movieId}`
        );

        if (response.data.length > 0) {
          const reviewData = response.data;
          const firstReview = reviewData[0];
          setMovie({
            id: firstReview.movieId,
            name: "Movie Title Here",
            releaseDate: "Release Date Here",
            averageRating:
              reviewData.reduce((acc, review) => acc + review.rating, 0) /
              reviewData.length,
            Reviews: reviewData,
          });
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>No reviews available for this movie.</div>;
  }

  return (
    <div className="p-5">
      <div className="mt-5">
        <h2 className="text-2xl">Reviews:</h2>
        {movie.Reviews.length > 0 ? (
          movie.Reviews.map((review) => (
            <div key={review.id} className="border-2 p-2 mt-2">
              <div className="flex justify-between items-center">
                <p>{review.comments}</p>
                <p className="text-purple-500">{review.rating}/10</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="italic">By {review.reviewer}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <GrChapterAdd className="cursor-pointer" />
                  <MdDelete className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available for this movie.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
