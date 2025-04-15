import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";



const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<Error>("actors", getActors);

  console.log("Actor data", data);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const actors = data.results.map((actor) => {
    return actor;
  });

  return (
    <>
      <PageTemplate
        title="Discover Actors"
        actors={actors}
        action={(actor) => {null}}
      />
    </>
  );
};
export default ActorsPage;
