import React from "react";
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { ActorDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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

interface TemplateActorPageProps {
    actor: ActorDetailsProps;
    children: React.ReactElement;
}


const TemplateActorPage: React.FC<TemplateActorPageProps> = ({actor, children}) => {
    const { data, error, isLoading, isError } = useQuery<Error>(
        ["actor_images", actor.id],
        () => getActorImages(actor.id.toString())
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error as Error).message}</h1>;
    }

    return (
        <>
            <ActorHeader {...actor} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        <ImageList cols={1}>
                                <ImageListItem
                                    key={actor.profile_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                        </ImageList>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                {/* <p>{actor.biography || 'Biography not available.'}</p> */}
                <Link to={`/movies/actor/${actor.id}/movies`}>
                              <Button variant="contained" size="large" color="success">
                                {actor.name}'s Movies ...
                              </Button>
                </Link>  
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorPage;
