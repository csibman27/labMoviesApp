import React, { useState } from "react";
import PageTemplate from "../components/templateFantasyMovieListPage";
import { fantasyMovies } from "../seed/fantasyMovies";
import MovieForm from "../components/fantasyMovieForm";
import { BaseFantasyMovieProps } from "../types/interfaces";

const FantasyPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseFantasyMovieProps[]>(fantasyMovies);

  // Function to handle new movie submission
  const handleAddMovie = (movie: BaseFantasyMovieProps) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <div>
      <h1>Fantasy Movies</h1>
      <MovieForm onSubmit={handleAddMovie} />  {/* Form to add new movie */}
      <PageTemplate
        title="Fantasy Movies"
        movies={movies}
        action={(movie) => <></>}
      />
    </div>
  );
};

export default FantasyPage;

