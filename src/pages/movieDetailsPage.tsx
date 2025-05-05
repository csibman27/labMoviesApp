import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { MovieDetailsProps } from "../types/interfaces";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  
  const { data: movie, error, isLoading, isError } = useQuery<MovieDetailsProps, Error>(
    ["movie", id],
    () => getMovie(id || "")
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      {movie ? (
        <PageTemplate
        movie={movie}>
        <>
          <div style={{ color: "green", marginBottom: "1rem" }}>
            Protected route: You are logged in.
          </div>
          <MovieDetails {...movie} />
        </>
      </PageTemplate>
      
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;

