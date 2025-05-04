import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseActorProps } from "../../types/interfaces";

interface Props {
  actor: BaseActorProps;
}

const RemoveActorFromFavourites: React.FC<Props> = ({ actor }) => {
  const { removeActorFromFavourites } = useContext(MoviesContext);

  const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeActorFromFavourites(actor);
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={handleRemove}>
      <FavoriteIcon color="error" fontSize="large" />
    </IconButton>
  );
};

export default RemoveActorFromFavourites;
