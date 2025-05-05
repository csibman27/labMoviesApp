import React, { useState, useCallback } from "react";
import { BaseActorProps, BaseMovieProps, Review } from "../types/interfaces";



interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);

    addReview: ((movie: BaseMovieProps, review: Review) => void);
    addMustWatch: ((movie: BaseMovieProps) => void);

    favouriteActors: BaseActorProps[];
    addActorToFavourites: (actor: BaseActorProps) => void;
    removeActorFromFavourites: (actor: BaseActorProps) => void;
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review},
    addMustWatch: () => {},
    favouriteActors: [],
    addActorToFavourites: () => {},
    removeActorFromFavourites: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);


// Add a new state variable (of type array) to the MoviesContext
//      for storing the ids of the movies tagged as ‘must watch’,
//      and add a function for updating this state variable.

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>( [] );
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [favouriteActors, setFavouriteActors] = useState<BaseActorProps[]>([]);

    console.log("Must Watch Array: ", mustWatch);

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {
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

    const addActorToFavourites = (actor: BaseActorProps) => {
        setFavouriteActors((prev) => {
          if (!prev.find((a) => a.id === actor.id)) {
            return [...prev, actor];
          }
          return prev;
        });
      };
    
      const removeActorFromFavourites = (actor: BaseActorProps) => {
        setFavouriteActors((prev) => prev.filter((a) => a.id !== actor.id));
      };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addMustWatch,
                favouriteActors,
                addActorToFavourites,
                removeActorFromFavourites,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
