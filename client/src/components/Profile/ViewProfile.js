import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Switch, Route, Redirect } from "react-router-dom";
import ChatRoom from "../Messaging/ChatRoom";
import Clipboard from "../Clipboard/Clipboard";
import CoverProfile from "../Profile/CoverProfile";

import Followers from "../Profile/Followers";
import Following from "../Profile/Following";
import Timeline from "../Profile/Timeline";
import PhotoVideoFeed from "../Profile/PhotoVideoFeed";

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
    const { classes } = this.props;

    return (
      <div>
        <CoverProfile />
        <br />
        <br />

        <Grid container spacing={24}>
          <Grid item xs={8} sm={8} style={{ height: "100vh" }}>
            <Switch>
              <Route path="/profile/timeline" component={Timeline} />
              <Route path="/profile/followers" component={Followers} />
              <Route path="/profile/following" component={Following} />
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
            <Typography
              variant="subtitle2"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              CLIPBOARD
            </Typography>
            <Clipboard />
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
