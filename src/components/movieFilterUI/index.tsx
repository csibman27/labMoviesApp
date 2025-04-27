import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseMovieProps } from "../../types/interfaces";

// Updated to support both movies (title) and series (name)
export const titleFilter = (item: BaseMovieProps, value: string): boolean => {
  const title = item.title || item.name || ""; // fallback if both undefined, needed this to filter series
  return title.toLowerCase().includes(value.toLowerCase());
};

// Updated to safely check genre_ids
export const genreFilter = (item: BaseMovieProps, value: string): boolean => {
  const genreId = Number(value);
  const genreIds = item.genre_ids;
  return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

// New language filter for the movies
export const languageFilter = (item: BaseMovieProps, value: string): boolean => {
  const language = item.original_language || "";
  return value === "all" || language.toLowerCase() === value.toLowerCase();
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

// Add languageFilter prop to the interface
interface MovieFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  titleFilter: string;
  genreFilter: string;
  languageFilter: string;  // Add languageFilter here
}

const MovieFilterUI: React.FC<MovieFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter, languageFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          languageFilter={languageFilter}  // Pass the language filter to the FilterCard
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
