export const getMovies = (currentPage: number) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

  
export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};


  export const getUpcomingMovies = (currentPage: number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${currentPage}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get upcoming movie data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
    ).then( (response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  
  export const getMovieImages = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch images");
      }
      return response.json();
    }).then((json) => json.posters)
      .catch((error) => {
        throw error
      });
  };
  

  export const getMovieReviews = (id: string | number) => { //movie id can be string or number
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };


  export const getPopularMovies = (currentPage: number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${currentPage}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get popular movie data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getActors = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get actors data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getActorsBio = (id: String) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get actors bio data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getActorImages = (id: String) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get actor images data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getActorMovies = (id: String) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get actor movies data. Response status: ${response.status}`);
      }
      //console.log(response.json());
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
 

  export const getTVSeries = () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get tv series data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getSingleTVSeries = (id: String) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get tv series data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
