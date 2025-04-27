import React from "react";
import Movie from "../fantasyMovieCard/";
import Grid from "@mui/material/Grid";
import { BaseFantasyMovieProps } from "../../types/interfaces";

interface MovieListProps {
  movies: BaseFantasyMovieProps[];
  action?: (movie: BaseFantasyMovieProps) => JSX.Element;
  selectFavourite: (movieId: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, action = () => <></>, selectFavourite }) => {
  return (
    <>
      {movies.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Movie movie={m} action={action(m)} />
        </Grid>
      ))}
    </>
  );
};

export default MovieList;