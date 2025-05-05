import React from "react";
import PageTemplate from "../components/templateActorMoviesPage";
import { getActorMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import { CreditsResponse } from "../types/interfaces";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { BaseMovieProps } from "../types/interfaces";

const ActorMoviePage: React.FC = () => {
  const { id } = useParams();
  const { data: cast, error, isLoading, isError } = useQuery<CreditsResponse, Error>(
    ["actor movies", id],
  ()=> getActorMovies(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }
  
  return (
    <PageTemplate
      cast={cast}
      action={(movie: BaseMovieProps) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};  

export default ActorMoviePage;
