import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

type Actor = {
  id: string;
  name: string;
};

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<{ results: Actor[] }, Error>("actors", getActors);

  console.log("Actor data", data);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  const actors = data?.results ?? [];

  return (
    <>
      <PageTemplate
        title="Discover Actors"
        actors={actors}
        action={(actor) => {
          //console.log(actor)
        }}
      />
    </>
  );
};
export default ActorsPage;
