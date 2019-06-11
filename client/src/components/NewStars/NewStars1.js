import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import OneStar from "./OneStar";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  avatar: {},
  bigAvatar: {
    width: 100,
    height: 100
  }
});

function NewStars(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <br />

      <Grid container spacing={24}>
        <Grid item lg={4} xs={12} sm={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <OneStar />
        </Grid>
      </Grid>
    </div>
  );
}

NewStars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewStars);
