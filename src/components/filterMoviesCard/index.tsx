import { FilterOption, GenreData } from "../../types/interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { ChangeEvent } from "react";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterMoviesCardProps {
  onUserInput: (f: FilterOption, s: string) => void;
  titleFilter: string;
  genreFilter: string;
  languageFilter: string;
}

// Hardcoded language options
const languageOptions = [
  { code: "all", name: "All Languages" },
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "ja", name: "Japanese" },
  { code: "hu", name: "Hungarian"},
];

const FilterMoviesCard: React.FC<FilterMoviesCardProps> = ({ titleFilter, genreFilter, languageFilter, onUserInput }) => {
  const { data, error, isLoading, isError } = useQuery<GenreData, Error>("genres", getGenres);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const genres = data?.genres || [];
  if (genres[0]?.name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e: SelectChangeEvent | ChangeEvent<HTMLInputElement>, type: FilterOption, value: string) => {
    e.preventDefault();
    onUserInput(type, value);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e, "title", e.target.value);
  };

  const handleGenreChange = (e: SelectChangeEvent) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleLanguageChange = (e: SelectChangeEvent) => {
    handleChange(e, "language", e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the movies.
          </Typography>

          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />

          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={styles.formControl}>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={languageFilter}
              onChange={handleLanguageChange}
            >
              {languageOptions.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  {lang.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FilterMoviesCard;
