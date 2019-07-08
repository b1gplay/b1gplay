import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

//import Header from "./components/Layout/Header";
//import Header1 from "./components/Layout/Header1";

import Analytics from "./components/Analytics/Analytics";

import MessageList from "./components/Messaging/MessageList";
import ViewProfile from "./components/Profile/ViewProfile";
import ProfilePage from "./components/Profile/ProfilePage";
import Profile from "./components/NewProfile/Profile";
import TopPerformers from "./components/TopPerformers/TopPerformers";

import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
//import Home from "./components/Home/Home";
import Stars from "./components/Stars/Stars";
import NewStars1 from "./components/NewStars/NewStars1";
import Followers from "./components/Followers/Followers";
import NewFollowers from "./components/NewFollowers/NewFollowers";
import Following from "./components/Following/Following";
import NewFollowing from "./components/NewFollowing/NewFollowing";
import PersonalRating from "./components/Ratings/PersonalRating";
import PersonalRatings from "./components/PersonalRatings/PersonalRatings";

import NewPersonalRatings from "./components/NewRatings/NewPersonalRating";

import PrivateRoute from "./components/common/PrivateRoute";

import store from "./store";
import { loadUser } from "./actions/auth";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

class App extends Component {
  state = {};

  componentDidMount() {
    store.dispatch(loadUser);
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />

        <main className={classes.main} style={{ background: "#F5F5F5" }}>
          {/* <Header1 /> */}
          <br />
          <br />
          <br />

          <Switch>
            <PrivateRoute path="/data-analytics" component={Analytics} />
            <PrivateRoute path="/messages" component={MessageList} />
            <PrivateRoute path="/following" component={NewFollowing} />
            <PrivateRoute path="/followers" component={NewFollowers} />
            <PrivateRoute
              path="/personal-ratings"
              component={PersonalRatings}
            />

            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={ProfilePage} />

            <Route path="/notifications" />

            <Route path="/personalrating" component={PersonalRating} />
            <Route path="/personalrating1" component={NewPersonalRatings} />
            <Route path="/myhome" component={Profile} />

            <Route path="/followers1" component={Followers} />

            <Route path="/following1" component={Following} />

            <Route path="/profile" component={ViewProfile} />
            <Route path="/stars" component={Stars} />

            <Route path="/stars2" component={NewStars1} />

            <Route path="/top-performers" component={TopPerformers} />
            {/* <Route path="/" component={Profile} /> */}

            <Route path="/notifications" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
