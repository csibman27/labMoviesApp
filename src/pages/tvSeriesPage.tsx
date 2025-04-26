import React from "react";
import PageTemplate from '../components/templateSeriesListPage';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTVSeries } from "../api/tmdb-api";
import { DiscoverSeries } from "../types/interfaces";


const TvSeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>("series", getTVSeries);


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }


  const series = data ?.results ?? [];

  
  return (
    <>
      <PageTemplate
        title="series"
        series={series}
        action={(series) => {
            // console.log(series)
        }}
      />

    </>
    // console.log(series)
  );
};

export default TvSeriesPage;