import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";

import MessageList from "./components/Messaging/MessageList";
import ViewProfile from "./components/Profile/ViewProfile";
import TopPerformers from "./components/TopPerformers/TopPerformers";
import SignOn from "./components/Authentication/SignOn";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

const App = ({ classes }) => (
  <>
    <CssBaseline />
    <Header />
    {/* ['#F0F0F0','#F5F5F5','#F8F8F8','#F5F5F5']  */}
    <main className={classes.main} style={{ background: "#F5F5F5" }}>
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/profile" component={ViewProfile} />
        <Route path="/messages" component={MessageList} />
        <Route path="/top-performers" component={TopPerformers} />
        <Route path="/" />
        <Route path="/notifications" component={MessageList} />
        <Route path="/logout" component={SignOn} />
      </Switch>
    </main>
  </>
);

export default withStyles(styles)(App);
