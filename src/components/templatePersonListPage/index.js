import React from "react";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";

function PersonListPageTemplate({ people }) {
  let displayedPeople = people

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <p>test</p>
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        </Grid>
        <PersonList people={displayedPeople}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;