import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";



interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);
    addMustWatch: ((movie: BaseMovieProps) => void);
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review},
    addMustWatch: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);


// Add a new state variable (of type array) to the MoviesContext
//      for storing the ids of the movies tagged as ‘must watch’,
//      and add a function for updating this state variable.

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>( [] );
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [favouriteActors, setFavouriteActors] = useState<ActorType[]>([]);

    const addActorToFavourites = (actor: ActorType) => {
    if (!favouriteActors.find((a) => a.id === actor.id)) {
        setFavouriteActors([...favouriteActors, actor]);
    }
    };

    // console.log("Must Watch Array", mustWatch);

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const addMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((newMustWatch) => {
            if (!newMustWatch.includes(movie.id)) {
                return [...newMustWatch, movie.id];
            }
            return newMustWatch;
        });
    }, []);

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addMustWatch,
                favouriteActors,
                addActorToFavourites
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
