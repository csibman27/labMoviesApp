import React, {useEffect, useState} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovies} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddPlaylistAddIcon from "../components/cardIcons/playlistAddIcon";



const UpcomingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("movie", getUpcomingMovies);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                    <AddToFavouritesIcon movie={movie} />
                        <AddPlaylistAddIcon color="primary" fontSize="large" movie={movie} />
                    </>
                )
            }}
        />
    );
};
export default UpcomingMoviesPage;
