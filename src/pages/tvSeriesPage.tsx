import React, { useState } from "react";
import PageTemplate from '../components/templateSeriesListPage';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTVSeries } from "../api/tmdb-api";
import { DiscoverSeries } from "../types/interfaces";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  languageFilter,
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
const languageFiltering = {
  name: "language",
  value: "all",
  condition: languageFilter,
};

const TvSeriesPage: React.FC = () => {

  const [ currentPage, setCurrentPage ] = useState(1);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering, languageFiltering,]
  );

  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>(
    ["series", { currentPage, filters: filterValues }],
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

  const changeFilterValues = (type: string, value: string) => {
    const updatedFilterSet = filterValues.map((f) =>
      f.name === type ? { ...f, value } : f
    );
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
        action={() => {
          return null;
        } } id={0} name={""} poster_path={null} overview={""} first_air_date={""} vote_average={0} vote_count={0} revenue={0} runtime={0} homepage={undefined} tagline={""}      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        languageFilter={filterValues[2].value}
      />
    </>
    // console.log(series)
  );
};

export default TvSeriesPage;