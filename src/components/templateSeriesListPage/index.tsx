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

interface SeriesListPageTemplateProps extends SeriesProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const SeriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = ({
  title,
  series,
  action,
  currentPage,
  setCurrentPage,
  totalPages
})=> {
  
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header
                  title={title}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}        />
      </Grid>
      <Grid item container spacing={5}>
      <SeriesList action={action} series={series} id={0} name={""} poster_path={null} overview={""} first_air_date={""} vote_average={0} vote_count={0} revenue={0} runtime={0} homepage={undefined} tagline={""} title={""}></SeriesList>
      </Grid>
    </Grid>
  );
}
export default SeriesListPageTemplate;
