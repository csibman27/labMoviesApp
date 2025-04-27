import React from "react";
import PageTemplate from "../components/templateFantasyMovieListPage";
import { BaseFantasyMovieProps } from "../types/interfaces";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";



const FantasyPage: React.FC = () => {

const { error, isLoading, isError } = useQuery<Error>
const fantasyMovies: BaseFantasyMovieProps[] = [];


  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <PageTemplate
       title="Fantasy Movies"
       movies={fantasyMovies}
       action={(movie) => <></>}
       />
    </>
  );
};

export default FantasyPage;
