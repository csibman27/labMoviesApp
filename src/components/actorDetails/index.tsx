import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ActorDetailsProps } from "../../types/interfaces";
import { Cake, Face, Work } from "@mui/icons-material";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1,
        padding: 2,
        marginTop: 2,
        backgroundColor: "#f5f5f5",
    },
};

interface TemplateActorPageProps {
    actor: ActorDetailsProps;
    children?: React.ReactElement;
}

const ActorDetails: React.FC<TemplateActorPageProps> = ({ actor }) => {
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
            </Paper>

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
