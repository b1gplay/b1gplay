import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Switch, Route } from "react-router-dom";
import Timeline from "./Timeline";
import CoverProfile from "./CoverProfile";
import PhotoGallery from "../Gallery/PhotoGallery";
import VideoGallery from "../Gallery/VideoGallery";

import Rating from "./Rating";
import OnlineChats from "./OnlineChats";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  ratingChatColumn: {
    position: "fixed",
    top: "8%",
    bottom: 0,
    right: 0,
    width: "100%"
  }
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={8}>
            <CoverProfile />

            <Switch>
              <Route path="/profile1/videos" component={VideoGallery} />
              <Route path="/profile1/photos" component={PhotoGallery} />
              <Route path="/profile1" component={Timeline} />
            </Switch>
          </Grid>
          {/* <Grid item xs={1} /> */}
          <Grid item xs={4} className={classes.ratingChatColumn}>
            <Rating />
            <OnlineChats />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
