import React from "react";
import Header from "../headerSeriesList";
import Grid from "@mui/material/Grid";
import SeriesList from "../seriesList";
import { SeriesProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const SeriesListPageTemplate: React.FC<SeriesProps> = ({ title, series, action })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <SeriesList action={action} series={series} id={0} name={""} poster_path={null} overview={""} first_air_date={""} vote_average={0} vote_count={0} revenue={0} runtime={0} homepage={undefined} tagline={""} title={""}></SeriesList>
      </Grid>
    </Grid>
  );
}
export default SeriesListPageTemplate;
