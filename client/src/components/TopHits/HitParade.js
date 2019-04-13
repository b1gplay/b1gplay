import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PictureOfWeek from "./PictureOfWeek";
import VideoOfWeek from "./VideoOfWeek";
import GeneralFilter from "./GeneralFilter";

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
      <Typography variant="h5" component="h3" color="default" align="center">
        Hit Parade
      </Typography>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={6} sm={6}>
          <PictureOfWeek />
        </Grid>
        <Grid item xs={6} sm={6}>
          <VideoOfWeek />
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <br />
          <GeneralFilter />
        </Grid>
        <Grid item xs={3} sm={3}>
          <PictureOfWeek />
        </Grid>
        <Grid item xs={3} sm={3}>
          <PictureOfWeek />
        </Grid>
        <Grid item xs={3} sm={3}>
          <PictureOfWeek />
        </Grid>
        <Grid item xs={3} sm={3}>
          <VideoOfWeek />
        </Grid>
      </Grid>
    </div>
  );
}

NewStars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewStars);
