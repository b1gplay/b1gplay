import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import OneRater from "./OneRater";
import Filter from "./Filter"

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 100
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  avatar: {
    margin: 10
  }
});

function Following(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3} >
          <Filter />
          <br />
        </Grid>
        <Grid item xs={3} sm={3}>
          <OneRater />
        </Grid>
        <Grid item xs={3} sm={3}>
          <OneRater />
        </Grid>
        <Grid item xs={3} sm={3}>
          <OneRater />
        </Grid>
      </Grid>
    </div>
  );
}

Following.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Following);
