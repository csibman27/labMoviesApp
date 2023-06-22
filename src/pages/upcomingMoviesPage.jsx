import React, {useEffect, useState} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getMovies, getUpcomingMovies} from "../api/tmdb-api";



const UpcomingMoviesPage = (props) => {
    const [upMovies, setMovies] = useState([]);
    const favourites = upMovies.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))

    const addToFavourites = (movieId) => {
        const updatedMovies = upMovies.map((m) =>
            m.id === movieId ? { ...m, favourite: true } : m
        );
        setMovies(updatedMovies);
    };

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={upMovies}
            selectFavourite={addToFavourites}
        />
    );
};
export default UpcomingMoviesPage;
