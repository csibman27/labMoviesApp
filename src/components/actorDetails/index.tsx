import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ActorDetailsProps } from "../../types/interfaces";
import { Cake, Face, Work } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1,
        padding: 2,
        marginTop: 2,
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    },
    socialLinksContainer: {
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        marginTop: '10px',
    },
    box: {
        padding: 3,
        marginTop: 3,
        backgroundColor: "#e0f7fa",
        borderRadius: "8px",
    },
    button: {
        backgroundColor: "#00796b",
        color: "white",
        '&:hover': {
            backgroundColor: "#004d40",
        },
    },
};

interface TemplateActorPageProps {
    actor: ActorDetailsProps;
    children?: React.ReactElement;
}

const calculateAge = (birthday: string): number | null => {
    if (!birthday) return null;
    const birthDate = new Date(birthday);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const ActorDetails: React.FC<TemplateActorPageProps> = ({ actor }) => {

    console.log(actor);
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Biography
            </Typography>

            {actor.biography && (
                <Typography variant="body1" paragraph>
                    {actor.biography}
                </Typography>
            )}

            <Paper elevation={2} sx={styles.chipSet}>
                <Chip icon={<Face />} label={actor.name} color="primary" />
                {actor.birthday && <Chip icon={<Cake />} label={actor.birthday} />}
                {actor.known_for_department && (
                    <Chip icon={<Work />} label={actor.known_for_department} />
                )}
                {actor.birthday && (
                    <Chip icon={<Cake />} label={`Age: ${calculateAge(actor.birthday)}`} />
                )}
                {actor.popularity !== undefined && (
                    <Chip label={`Popularity: ${actor.popularity.toFixed(1)}`} color="secondary" />
                )}
            </Paper>

            <Typography variant="subtitle1" gutterBottom>
                Social Links
            </Typography>
            <Box sx={styles.socialLinksContainer}>
                {actor.imdb_id && (
                    <a href={`https://www.imdb.com/name/${actor.imdb_id}`} target="_blank" rel="noopener noreferrer">
                        <Chip label="IMDb" clickable color="primary" />
                    </a>
                )}
            </Box>

            {actor.genres?.length > 0 && (
                <Paper elevation={2} sx={styles.chipSet}>
                    {actor.genres.map((genre) => (
                        <Chip key={genre.id} label={genre.title} />
                    ))}
                </Paper>
            )}
        </>
    );
};

export default ActorDetails;
