// MOVIES

export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    production_countries?: string;
    genre_ids?: number[];
  }

export interface BaseActorProps {
   name: string,
   original_name?: string, 
   id: number,
   popularity: number,
   profile_path: string,
   gender: number,

}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  selectFavourite: (movieId: number) => void;
}


export interface MovieDetailsProps extends BaseMovieProps {
  results: any;
  genres: {
    id: number;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export type FilterOption = "title" | "genre" | "language";

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface Review{
  id: string;
  content: string
  author: string
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: any;
  total_results: number;
  results: BaseMovieProps[];
}

export interface Review {
  author: string,
  content: string,
  agree: boolean,
  rating: number,
  movieId: number,
}

// ACTOR

export interface BaseActorListProps {
  actors: BaseActorProps[];
  action: (a: BaseActorProps) => React.ReactNode;
}


export interface BaseActorCardProps {
  id: number;
  name: string;
  gender?: number;
  known_for_department?: String;
  popularity?: number; 
  profile_path?: string;
  biography?: string;
  birthday?: string;
  awards: string;
  imdb_id: number;
}

export interface ActorPageProps {
  actor: ActorDetailsProps;
}

export interface DiscoverActors {
  page: number;	
  total_pages: any;
  total_results: number;
  results: BaseActorProps[];
}


export interface ActorDetailsProps extends BaseActorCardProps {
  place_of_birth: any;
  genres: {
    id: number;
    title: string;
  }[];
}

export interface ActorImage {
  poster_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
  profile_path?: string;
}

// SERIES

export interface SeriesProps {
  title: string;
  id: number;
  name: string;
  poster_path: string | null;
  overview: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  homepage: string | undefined;
  tagline: string;
};

export interface DiscoverSeries {
  page: number;	
  total_pages: any;
  total_results: number;
  results: SeriesProps[];
}

export interface SeriesProps {
  name: string;
  series: SeriesProps[];
  action: (s: SeriesProps) => React.ReactNode;
};

export interface SeriesDetailsProps extends SeriesProps {
  genres: {
    id: number;
    name: string;
  }[];
}

// CASTS

export interface CastMemberProps {
  adult: boolean;
  id: number;
  original_language: string;
  backdrop_path?: string;
  poster_path?: string;
  title: string;
  
}

export interface CrewMember {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  title: string;
  job: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface CastMember {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  title: string;
  character: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface CreditsResponse {
  cast: CastMember[];
  crew: CrewMember[];
  id: number;
}

export interface CastDetailsProps extends CastMemberProps {
  results: any;
  cast: {
    id: number;
    name: string;
  }[];
}

// FANTASY

export interface BaseFantasyMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  production_countries?: string;
  genre_ids?: number[];
}