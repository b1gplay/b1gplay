import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import MyProfile from "../Profile/MyProfile";
import PersonalInfo from "../Profile/PersonalInfo";
import PhotoVideoFeed from "../Profile/PhotoVideoFeed";
import TopFiveImages from "../Gallery/TopFiveImages";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

function Timeline(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={5} sm={5}>
          <div>
            <MyProfile />
          </div>
          <br />
          <br />
          <div>
            <Paper className={classes.root} elevation={1}>
              <PersonalInfo />
            </Paper>
          </div>
          <br />
          <br />
          <div>
            <Paper className={classes.root} elevation={1}>
              <TopFiveImages />
            </Paper>
          </div>
        </Grid>
        <Grid item xs={7} sm={7}>
          <PhotoVideoFeed />
        </Grid>
      </Grid>
    </div>
  );
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Timeline);
