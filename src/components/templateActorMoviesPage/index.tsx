import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorMovies } from "../../api/tmdb-api";
import { CastDetailsProps, CreditsResponse } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { useParams } from "react-router-dom";

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateCastPageProps {
    cast: CastDetailsProps;
    children: React.ReactElement;
}


const TemplateActorMoviePage: React.FC<TemplateCastPageProps> = ({cast, children}) => {
    const { id } = useParams();
    const { data: casts, error, isLoading, isError } = useQuery<CreditsResponse, Error>(
        ["actor_movies", id],
      ()=> getActorMovies(id||"")
      );
    

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error).message}</h1>;
    }

    const m1 = cast ? cast.results : [];

    return (
        <>
            <MovieHeader {...cast} />

            



            
            
            <p>test</p>
            <p>{casts?.original_language}</p>
            <p>{cast.original_language}</p>
            <p>{m1}</p>

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                    {casts?.cast.map((movie) => (
                        <div key={movie.id}>
                            <p><strong>{movie.title}</strong> as {movie.character}</p>
                            <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            />
                        </div>
                        ))}
                 
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorMoviePage;
