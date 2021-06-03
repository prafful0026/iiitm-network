import React from "react";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
const Faculty = () => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction='row'
      >
        <Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='professor' />
        </Grid><Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='professor' />
        </Grid><Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='professor' />
        </Grid><Grid item lg={3} md={4}  xs={12}>
          <Card name='prafful agrawal' subHeading='professor' />
        </Grid><Grid item lg={3} md={4} sm={6} xs={12}>
          <Card name='prafful agrawal' subHeading='professor' />
        </Grid><Grid item lg={3} md={4} sm={6} xs={12}>
          <Card name='prafful agrawal' subHeading='professor' />
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Faculty;
