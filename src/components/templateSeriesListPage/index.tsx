import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import SeriesList from "../seriesList";
import { SeriesProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const MovieListPageTemplate: React.FC<SeriesProps> = ({ name, series, action })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
      <SeriesList action={action} series={series} id={0} name={""} poster_path={null} overview={""} first_air_date={""} vote_average={0}></SeriesList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
