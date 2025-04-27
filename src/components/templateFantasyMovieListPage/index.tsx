import React from "react";
import Header from "../headerFantasyMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../fantasyMovieList";
import {  BaseMovieListProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const MovieListPageTemplate: React.FC<BaseMovieListProps> = ({
  movies,
  title,
  action,
})=> {
  
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header
          title={title}
        />
      </Grid>
      <Grid item container spacing={5}>
      <MovieList action={action} movies={movies} selectFavourite={function (movieId: number): void {
          throw new Error("Function not implemented.");
        } } />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
