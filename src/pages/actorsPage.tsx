import React, { useState } from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { DiscoverActors } from "../types/interfaces";
import AddActorToFavourites from "../components/cardIcons/addActorToFavourites";


const ActorsPage: React.FC = () => {

  const [ currentPage, setCurrentPage ] = useState(1);
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>(["actors", { currentPage }],
    ()=> getActors(currentPage),
    {
      keepPreviousData: true,
    }
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); 
  };

  // console.log("Actor data", data);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  const actors = data ? data.results : [];
  const totalPages = data?.total_pages;

  return (
    <>
      <PageTemplate
        title="Discover Actors"
        actors={actors}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        action={(actor) => 
          <AddActorToFavourites {...actor} />
        }
      />
    </>
  );
};
export default ActorsPage;
