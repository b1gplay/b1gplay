import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Switch, Route, Redirect } from "react-router-dom";
import ChatRoom from "../Messaging/ChatRoom";

import Timeline from "../Profile/Timeline";
import PhotoGallery from "../Gallery/PhotoGallery";
import VideoGallery from "../Gallery/VideoGallery";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    textTransform: "capitalize",
    fontWeight: "bold",
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  avatar: {
    margin: 10
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

class ViewProfile extends React.Component {
  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={8} sm={8} style={{ height: "100vh" }}>
            <Switch>
              <Route path="/profile/timeline" component={Timeline} />

              <Route path="/profile/photos" component={PhotoGallery} />
              <Route path="/profile/videos" component={VideoGallery} />
              {/* Accessing profile link redirects to profile > timeline */}
              <Route
                exact
                path="/profile"
                render={() => <Redirect to="/profile/timeline" />}
              />
            </Switch>
          </Grid>
          <Grid item xs={2} sm={2} style={{ height: "100vh" }} />
          <Grid
            item
            xs={2}
            sm={2}
            style={{ borderLeft: "1px solid #d4d4d4", height: "100vh" }}
          >
            <Typography
              variant="subtitle2"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              CHAT
            </Typography>
            <ChatRoom />
            <br />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ViewProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewProfile);
