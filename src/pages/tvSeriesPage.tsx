import React, { useState } from "react";
import PageTemplate from '../components/templateSeriesListPage';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTVSeries } from "../api/tmdb-api";
import { DiscoverSeries, SeriesProps } from "../types/interfaces";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import useFiltering from "../hooks/useFiltering";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

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

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const series = data ? data.results : [];
  const totalPages = data?.total_pages;
  const displayedSeries = filterFunction(series);
  
  return (
    <>
      <PageTemplate
        title="TV Series"
        series={displayedSeries}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        action={(series: SeriesProps) => {
            null
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
    // console.log(series)
  );
};

export default TvSeriesPage;