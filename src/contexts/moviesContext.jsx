import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [myReviews, setMyReviews] = useState( {} )  // NEW
    const [mustWatch, setMustWatch] = useState([]);

    console.log("Must Watch Array", mustWatch);

    const addToFavourites = (movie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie, review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    const addToMustWatchList = (movie) => {
        if (!mustWatch.includes(movie.id)) {
            let newMustWatch = [...mustWatch, movie.id];
            setMustWatch(newMustWatch);
        }
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addToMustWatchList,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
