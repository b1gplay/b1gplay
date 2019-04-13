import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Female from "./Female";
import Male from "./Male";
import AgeFilter from "./AgeFilter";
import CountryFilter from "./CountryFilter";
import Map from "./Map";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Female />
        <Grid item xs={6}>
          <CountryFilter />
          <Map />
          <br />
          <AgeFilter />
        </Grid>
        <Male />
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
