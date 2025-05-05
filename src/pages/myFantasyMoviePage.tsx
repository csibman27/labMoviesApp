import React, { useState } from "react";
import PageTemplate from "../components/templateFantasyMovieListPage";
import { fantasyMovies } from "../seed/fantasyMovies";
import MovieForm from "../components/fantasyMovieForm";
import { BaseFantasyMovieProps } from "../types/interfaces";
import { Box, Typography } from "@mui/material";

const FantasyPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseFantasyMovieProps[]>(fantasyMovies);

  // Function to handle new movie submission
  const handleAddMovie = (movie: BaseFantasyMovieProps) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <Box>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1">
          Fantasy Movies Form
        </Typography>
      </Box>
  
      <MovieForm onSubmit={handleAddMovie} />
  
      <PageTemplate
        title="Fantasy Movies"
        movies={movies}
        action={() => <></>} selectFavourite={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    </Box>
  );
}

export default FantasyPage;

