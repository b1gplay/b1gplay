import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Female from "./Female";
import Male from "./Male";
import AgeFilter from "./AgeFilter";
import CountryFilter from "./CountryFilter";
import Map from "./Map";

const styles = theme => ({
  // Styled scrollbar
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.6em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },
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
          <Map />
          <br />
          <Grid item xs={12} sm={6}>
            <Typography variant="headline" align="left" color="inherit">
              Filter:
            </Typography>
            <CountryFilter />
            <br />
            <AgeFilter />
          </Grid>
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
