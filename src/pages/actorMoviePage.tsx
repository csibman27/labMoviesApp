import React from "react";
import PageTemplate from "../components/templateActorMoviesPage";
import { getActorMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import { ActorDetailsProps } from "../types/interfaces";


const ActorMoviePage: React.FC = () => {
  const { id } = useParams();
  const { data: cast, error, isLoading, isError } = useQuery<ActorDetailsProps, Error>(
    ["actor movies", id],
  ()=> getActorMovies(id||"")
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  console.log(cast)
  
  return (
  
          <PageTemplate
            title="Actor Movies Page"
            cast={cast}>
              
            
    
          </PageTemplate>
    
    // <p>This is the actors movie page</p>
  );
};

export default ActorMoviePage;
