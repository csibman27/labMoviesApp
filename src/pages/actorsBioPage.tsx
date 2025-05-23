import React from "react";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActorsBio } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import { ActorDetailsProps } from "../types/interfaces";

const ActorBioPage: React.FC = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery<ActorDetailsProps, Error>(
    ["actors", id],
  ()=> getActorsBio(id||"")
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} children={undefined} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
    // <p>This is the actors bio page</p>
  );
};

export default ActorBioPage;
