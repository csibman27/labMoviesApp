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

export interface BaseActorListProps {
  actors: BaseActorProps[];
  action: (a: BaseActorProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
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

export type FilterOption = "title" | "genre";

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
  total_pages: number;
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

export interface BaseActorCardProps {
  id: number;
  name: string;
  gender?: number;
  known_for_department?: String;
  popularity?: number; 
  profile_path?: string;
  biography?: string;
}

export interface ActorPageProps {
  actor: ActorDetailsProps[];
}


export interface ActorDetailsProps extends BaseActorCardProps {
  known_for: {
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