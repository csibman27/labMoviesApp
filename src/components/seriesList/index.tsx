import React from "react";
import Series from "../seriesCard/";
import Grid from "@mui/material/Grid";
import { SeriesProps } from "../../types/interfaces";

const SeriesList: React.FC<SeriesProps> = ({series, action}) => {
  let seriesCards = series.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Series key={s.id} series={s} action={action}/>
    </Grid>
  ));
  return seriesCards;
}

  export default SeriesList;
