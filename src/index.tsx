import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingPage from "./pages/upcomingPage";
import PopularPage from "./pages/popularPage";
import ActorsPage from "./pages/actorsPage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorsBioPage from "./pages/actorsBioPage";
import ActorMoviePage from "./pages/actorMoviePage";
import TvSeriesPage from "./pages/tvSeriesPage";
import TvSeriesDetailsPage from "./pages/tvSeriesDetailsPage";
import FantasyPage from "./pages/myFantasyMoviePage";
import LoginPage from "./pages/loginPage";
import ProtectedRoute from "./routes/protectedRoute";
import { AuthContextProvider } from './contexts/authContext';
import FavouriteActorsPage from "./pages/favouriteActorsPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthContextProvider>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={
          <ProtectedRoute>
            <MoviePage />
            </ProtectedRoute>
            }
          />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movies/upcoming" element={<UpcomingPage />} />
        <Route path="/movies/popular" element={<PopularPage />} />
        <Route path="/movies/tvseries" element={<TvSeriesPage />} />
        <Route path="/movies/tvseries/:id" element={<TvSeriesDetailsPage />} />
        <Route path="/movies/fantasy" element={<FantasyPage />} />
        <Route path="/movies/actors" element={<ActorsPage />} />
        <Route path="/movies/actors/:id" element={<ActorsBioPage/>} />
        <Route path="/movies/actor/:id/movies" element={<ActorMoviePage/>} />
        <Route path="/movies/actors/favourites" element={<FavouriteActorsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      </Routes>
      </MoviesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

