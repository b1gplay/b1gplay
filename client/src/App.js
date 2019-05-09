import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";

import MessageList from "./components/Messaging/MessageList";
import ViewProfile from "./components/Profile/ViewProfile";
import ProfilePage from "./components/Profile/ProfilePage";
import Profile from "./components/NewProfile/Profile";
import TopPerformers from "./components/TopPerformers/TopPerformers";

import SignOn from "./components/NewAuthentication/SignOn";
import Join from "./components/Authentication/Join";
import Home from "./components/Home/Home";
import Stars from "./components/Stars/Stars";
import NewStars1 from "./components/NewStars/NewStars1";
import Followers from "./components/Followers/Followers";
import NewFollowers from "./components/NewFollowers/NewFollowers";
import Following from "./components/Following/Following";
import NewFollowing from "./components/NewFollowing/NewFollowing";
import PersonalRating from "./components/Ratings/PersonalRating";
import NewPersonalRatings from "./components/NewRatings/NewPersonalRating";

import PersonalRatings from "./components/PersonalRatings/PersonalRatings";

import Tab1 from "./components/PersonalRatings/Tab1";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    {/* ['#F0F0F0','#F5F5F5','#F8F8F8','#F5F5F5']  */}
    <main className={classes.main} style={{ background: "#F5F5F5" }}>
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/profile1" component={ProfilePage} />
        <Route path="/personal-ratings" component={PersonalRatings} />
        <Route path="/personalrating" component={PersonalRating} />
        <Route path="/personalrating1" component={NewPersonalRatings} />
        <Route path="/myhome" component={Profile} />
        <Route path="/log" component={SignOn} />
        <Route path="/join" component={Join} />
        <Route path="/followers" component={Followers} />
        <Route path="/followers1" component={NewFollowers} />
        <Route path="/following" component={Following} />
        <Route path="/following1" component={NewFollowing} />
        <Route path="/profile" component={ViewProfile} />
        <Route path="/stars" component={Stars} />

        <Route path="/data-analytics" component={Tab1} />

        <Route path="/stars2" component={NewStars1} />
        <Route path="/messages" component={MessageList} />

        <Route path="/top-performers" component={TopPerformers} />
        <Route path="/" component={Profile} />

        <Route path="/notifications" component={MessageList} />
        <Route path="/logout" component={SignOn} />
      </Switch>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
