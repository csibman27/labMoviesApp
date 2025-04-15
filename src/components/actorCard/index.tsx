import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import React from "react";
import img from '../../images/film-poster-placeholder.png';

const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
  };
  
// Define the actor type
interface Actor {
  id: number;
  name: string;
  profile_path?: string;
}

// Define props for the component
interface ActorCardProps {
  actor: Actor;
  action?: (actor: Actor) => React.ReactNode;
}

// Functional component
const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
        title={actor.name}
      />
      <CardActions disableSpacing>
        {action && action(actor)}
        <Link to={`/actor/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Actor Bio
          </Button>
        </Link>
        <Link to={`/actor/${actor.id}/movies`}>
          <Button variant="outlined" size="medium" color="primary">
            Actor Movies
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
