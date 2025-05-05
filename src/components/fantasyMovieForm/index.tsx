import React, { useState } from "react";
import { BaseFantasyMovieProps } from "../../types/interfaces";
import { Box, Button, Stack, TextField } from "@mui/material";

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
        id: Date.now(),
        title,
        release_date: releaseDate,
        vote_average: voteAverage,
        overview,
        poster_path: posterPath,
        budget,
        imdb_id: "",
        original_language: "en", 
        tagline: "",
        runtime: 120,
        revenue: 0,
        vote_count: 0,
        popularity: 0,
        favourite: false,
        production_countries: "USA", 
        genre_ids: [14] 
        ,
        homepage: undefined
    };

    onSubmit(newMovie);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
      <Stack spacing={3}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Release Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <TextField
          label="Vote Average"
          type="number"
          variant="outlined"
          fullWidth
          value={voteAverage}
          onChange={(e) => setVoteAverage(Number(e.target.value))}
        />
        <TextField
          label="Overview"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
        <TextField
          label="Poster Path (URL)"
          variant="outlined"
          fullWidth
          value={posterPath}
          onChange={(e) => setPosterPath(e.target.value)}
        />
        <TextField
          label="Budget"
          type="number"
          variant="outlined"
          fullWidth
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Movie
        </Button>
      </Stack>
    </Box>
  );
};

export default MovieForm;
