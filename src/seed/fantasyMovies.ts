
import { BaseFantasyMovieProps } from "../types/interfaces";

export const fantasyMovies: BaseFantasyMovieProps[] = [
  {
    id: 1,
    title: "Dragons of Dawn",
    budget: 150000000,
    homepage: "https://dragons-of-dawn.com",
    imdb_id: "tt1234567",
    original_language: "en",
    overview: "A magical journey to stop a rogue dragon from destroying the realms.",
    release_date: "2023-12-15",
    vote_average: 7.8,
    popularity: 1200,
    poster_path: "", // use "" to show placeholder
    tagline: "Let the fire rise.",
    runtime: 135,
    revenue: 450000000,
    vote_count: 2300,
    favourite: false,
    production_countries: "USA",
    genre_ids: [14]
  },
  {
    id: 2,
    title: "Elven Shadows",
    budget: 80000000,
    homepage: "https://elvenshadows.com",
    imdb_id: "tt7654321",
    original_language: "en",
    overview: "An elven assassin must protect the last ancient tree from darkness.",
    release_date: "2022-08-10",
    vote_average: 8.2,
    popularity: 980,
    poster_path: "",
    tagline: "Every shadow tells a story.",
    runtime: 112,
    revenue: 210000000,
    vote_count: 1700,
    favourite: false,
    production_countries: "UK",
    genre_ids: [14]
  }
];