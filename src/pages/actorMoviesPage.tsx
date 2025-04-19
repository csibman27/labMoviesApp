// import React from "react";
// import ActorDetails from "../components/actorDetails";
// import PageTemplate from "../components/templateActorPage";
// import { getActorsBio } from "../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from "../components/spinner";
// import { Link, useParams } from "react-router-dom";
// import Button from "@mui/material/Button";

// const ActorMoviePage: React.FC = () => {
//   const { id } = useParams();
//   const { data, error, isLoading, isError } = useQuery<Error>(
//     ["actors", id],
//   ()=> getActorsBio(id||"")
//   );


//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{(error as Error).message}</h1>;
//   }

//   const movies = movie.cast.map((movie) => {
//     movie.type = "MOVIE";
//     return movie;
//   });

//   return (
//     <>
//       {/* {actor ? (
//         <>
//           <PageTemplate
//             title="Actor Movies">
//             <ActorDetails actor={actor} />
//             <Link to={`/movies/actor/${actor.id}/movies`}>
//               <Button variant="contained" size="large" color="success">
//                 {actor.name}'s Movies ...
//               </Button>
//             </Link>
//           </PageTemplate>
//         </>
//       ) : (
//         <p>Waiting for actor details</p>
//       )} */}
//     </>
//   );
// };

// export default ActorMoviePage;
