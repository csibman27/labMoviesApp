import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieDetailsProps } from "../../types/interfaces";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Avatar from "@mui/material/Avatar";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

// [Hint: The only file you need to edit to complete this exercise is
// components/headerMovie/index.tsx. The movies tagged as favourites are stored in localstorage, which any component can access.]

interface MovieHeaderProps extends MovieDetailsProps {
  customTitle?: string;
}


const MovieHeader: React.FC<MovieHeaderProps> = ({ title, homepage, tagline, customTitle }) => {
  const stored = localStorage.getItem("favourites");
  let isFavourite = true;

  if (stored === "[]") {
    isFavourite = false;
  } else {
    console.log("Data is stored:", stored);
  }

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {/* {isFavourite && (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      )} */}

      <Typography variant="h4" component="h3">
        {customTitle ?? title}{"   "}
        {homepage && (
          <a href={homepage}>
            <HomeIcon color="primary" fontSize="large" />
          </a>
        )}
        <br />
        <span>{tagline}</span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
