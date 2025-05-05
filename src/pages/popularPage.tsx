import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getPopularMovies } from "../api/tmdb-api";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  languageFilter,
} from "../components/movieFilterUI";
import useFiltering from "../hooks/useFiltering";
import { DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';

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

const PopularPage: React.FC = () => {
  const [ currentPage, setCurrentPage ] = useState(1);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering, languageFiltering,]
  );

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(["popular-movies", { currentPage, filters: filterValues }],
    ()=> getPopularMovies(currentPage),
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
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const updatedFilterSet = filterValues.map((f) =>
      f.name === type ? { ...f, value } : f
    );
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const totalPages = data?.total_pages;
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title="Most Popular Movies"
        movies={displayedMovies}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        action={(movie: BaseMovieProps) => {
          return (
            <>
              <AddToFavouritesIcon {...movie} />
              <AddToPlaylistIcon {...movie} />
            </>
          );
        } } selectFavourite={function (): void {
          throw new Error("Function not implemented.");
        } }      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        languageFilter={filterValues[2].value}
      />
    </>
  );
};

export default PopularPage;