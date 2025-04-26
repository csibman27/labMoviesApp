import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import { getActorMovies } from "../../api/tmdb-api";
import { CastDetailsProps, CreditsResponse } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import img from '../../images/film-poster-placeholder.png';
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
    card: { maxWidth: 345 },
    media: { height: 300 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
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
          <MovieHeader
            title="Inception"
            customTitle="🎬 Actor Movies"
            results={undefined}
            genres={[]}
            budget={0}
            homepage={undefined}
            id={0}
            imdb_id={""}
            original_language={""}
            overview={""}
            release_date={""}
            vote_average={0}
            popularity={0}
            tagline={""}
            runtime={0}
            revenue={0}
            vote_count={0}
          />
      
      <Grid container spacing={3} style={{ padding: '15px' }}>
      {casts?.cast.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
                    sx={styles.media}
                    image={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : img
                    }
                  />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                as {movie.character}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }} disableSpacing>
              <Link to={`/movies/${movie.id}`} style={{ width: '100%' }}>
                <Button variant="outlined" size="medium" color="primary" fullWidth>
                  More Info ...
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
      
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={12}>{children}</Grid>
          </Grid>
        </>
      );
};

export default TemplateActorMoviePage;
