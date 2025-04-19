import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import React from "react";
import img from '../../images/film-poster-placeholder.png';
import { BaseActorProps } from "../../types/interfaces";

const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    objectFit: "cover",
    avatar: {
      backgroundColor: "rgb(255, 255, 255)",
    },
  };


interface ActorCardProps {
  actor: BaseActorProps;
  action?: (actor: BaseActorProps) => React.ReactNode;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.avatar}
        title={
          <Typography
            variant="h5" component="p">
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
        <Link to={`/movies/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Actor Bio
          </Button>
        </Link>
        <Link to={`/movies/actor/${actor.id}/movies`}>
          <Button variant="outlined" size="medium" color="primary">
            Actor Movies
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
