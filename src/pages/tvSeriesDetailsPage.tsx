import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
import { getSingleTVSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { SeriesDetailsProps } from "../types/interfaces";


const SeriesDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery<SeriesDetailsProps, Error>(
    ["series", id],
    ()=> getSingleTVSeries(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
        <PageTemplate series={series}> 
          <SeriesDetails {...series} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
    // <p>TEST</p>
  );
};

export default SeriesDetailsPage;
