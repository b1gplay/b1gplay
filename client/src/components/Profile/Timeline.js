import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//import MyProfile from "../Profile/MyProfile";
import PersonalInfo from "../Profile/PersonalInfo";
import PhotoVideoFeed from "../Profile/PhotoVideoFeed";
import TopFourImages from "../Gallery/TopFourImages";
import TopFourVideos from "../Gallery/TopFourVideos";

const styles = theme => ({
  root: {
    //padding: theme.spacing.unit * 2
  }
});

function Timeline(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} />
        <Grid item xs={5} sm={5}>
          <div>{/*    <MyProfile /> */}</div>

          <div>
            <PersonalInfo />
          </div>
          <br />

          <div>
            <br />
            <TopFourImages />
            <br />
            <br />
            <TopFourVideos />
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
