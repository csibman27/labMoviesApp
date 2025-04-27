import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  languageFilter,
} from "../components/movieFilterUI";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

// Filter objects
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

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    languageFiltering,
  ]);

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["discover", { currentPage, filters: filterValues }],
    () =>
      getMovies(currentPage),
    {
      keepPreviousData: true,
    }
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const changeFilterValues = (type: string, value: string) => {
    const updatedFilterSet = filterValues.map((f) =>
      f.name === type ? { ...f, value } : f
    );
    setFilterValues(updatedFilterSet);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data ? data.results : [];
  const totalPages = data?.total_pages;
  const displayedMovies = filterFunction(movies);
  // console.log(movies)

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => <AddToFavouritesIcon {...movie} />}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        languageFilter={filterValues[2].value}  
      />
    </>
  );
};

export default HomePage;
