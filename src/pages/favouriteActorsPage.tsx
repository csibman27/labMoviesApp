import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveActorFromFavourites from "../components/cardIcons/removeActorFromFavourites";

const FavouriteActorsPage: React.FC = () => {
  const { favouriteActors } = useContext(MoviesContext);

  return (
    <PageTemplate
      title="Favourite Actors"
      actors={favouriteActors}
      action={(actor) => <RemoveActorFromFavourites actor={actor} />}
      currentPage={1}
      setCurrentPage={() => {}}
      totalPages={1}
    />
  );
};

export default FavouriteActorsPage;
