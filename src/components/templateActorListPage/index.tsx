import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import { BaseActorListProps } from "../../types/interfaces";

const styles = {
    root: { 
      backgroundColor: "#bfbfbf",
    }
  };

interface ActorListPageTemplateProps extends BaseActorListProps {
  title: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const ActorListPageTemplate: React.FC<ActorListPageTemplateProps> = ({
  actors,
  title,
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
        <ActorList action={action} actors={actors}></ActorList>
        </Grid>
      </Grid>
    );
  }
  export default ActorListPageTemplate;
