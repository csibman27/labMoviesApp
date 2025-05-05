import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";
import {  BaseMovieListProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};


interface MovieListPageTemplateProps extends BaseMovieListProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const MovieListPageTemplate: React.FC<MovieListPageTemplateProps> = ({
  movies,
  title,
  action,
  currentPage,
  setCurrentPage,
  totalPages
})=> {
  
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header
          title={title}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}        />
      </Grid>
      <Grid item container spacing={5}>
      <MovieList action={action} movies={movies} selectFavourite={function (): void {
          throw new Error("Function not implemented.");
        } } title={""} />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
