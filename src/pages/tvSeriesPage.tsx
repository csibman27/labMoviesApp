import React, { useState } from "react";
import PageTemplate from '../components/templateSeriesListPage';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTVSeries } from "../api/tmdb-api";
import { DiscoverSeries, SeriesProps } from "../types/interfaces";


const TvSeriesPage: React.FC = () => {

  const [ currentPage, setCurrentPage ] = useState(1);
  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>(["series", { currentPage }],
    ()=> getTVSeries(currentPage),
    {
      keepPreviousData: true,
    }
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); 
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }


  const series = data ?.results ?? [];
  const totalPages = data?.total_pages;
  
  return (
    <>
      <PageTemplate
        title="TV Series"
        series={series}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        action={(series: SeriesProps) => {
            null
        }}
      />

    </>
    // console.log(series)
  );
};

export default TvSeriesPage;