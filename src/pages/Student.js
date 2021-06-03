import React from "react";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
const Student = () => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction='row'
      >
        <Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='2019BCS-049' />
        </Grid>
        <Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='2019BCS-049' />
        </Grid>
        <Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='2019BCS-049' />
        </Grid>
        <Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='2019BCS-049' />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card name='prafful agrawal' subHeading='2019BCS-049' />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card name='prafful agrawal' subHeading='2019BCS-049' />
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Student;
