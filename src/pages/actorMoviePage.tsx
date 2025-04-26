import React from "react";
import PageTemplate from "../components/templateActorMoviesPage";
import { getActorMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";

const ActorMoviePage: React.FC = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery<ActorDetailsProps, Error>(
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
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
            <Link to={`/movies/actor/${actor.id}/movies`}>
              <Button variant="contained" size="large" color="success">
                {actor.name}'s Movies ...
              </Button>
            </Link>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorMoviePage;
