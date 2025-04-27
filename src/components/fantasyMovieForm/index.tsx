import React, { useState } from "react";
import { BaseFantasyMovieProps } from "../../types/interfaces";

interface MovieFormProps {
  onSubmit: (movie: BaseFantasyMovieProps) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [voteAverage, setVoteAverage] = useState<number>(0);
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [budget, setBudget] = useState<number>(0);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovie: BaseFantasyMovieProps = {
        id: Date.now(), // Unique ID based on timestamp
        title,
        release_date: releaseDate,
        vote_average: voteAverage,
        overview,
        poster_path: posterPath,
        budget,
        imdb_id: "", // can be empty
        original_language: "en", // eng by default
        tagline: "",
        runtime: 120, // fix runtime
        revenue: 0,
        vote_count: 0,
        popularity: 0,
        favourite: false,
        production_countries: "USA", // fix county
        genre_ids: [14] // fantasy genre by default
        ,
        homepage: undefined
    };

    onSubmit(newMovie);  // pass new movie to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="releaseDate">Release Date:</label>
        <input 
          type="date" 
          id="releaseDate" 
          value={releaseDate} 
          onChange={(e) => setReleaseDate(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="voteAverage">Vote Average:</label>
        <input 
          type="number" 
          id="voteAverage" 
          value={voteAverage} 
          onChange={(e) => setVoteAverage(Number(e.target.value))} 
        />
      </div>
      <div>
        <label htmlFor="overview">Overview:</label>
        <textarea 
          id="overview" 
          value={overview} 
          onChange={(e) => setOverview(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="posterPath">Poster Path (URL):</label>
        <input 
          type="text" 
          id="posterPath" 
          value={posterPath} 
          onChange={(e) => setPosterPath(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="budget">Budget:</label>
        <input 
          type="number" 
          id="budget" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))} 
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
