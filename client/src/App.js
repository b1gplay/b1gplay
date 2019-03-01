import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";

import MessageList from "./components/Messaging/MessageList";
import ViewProfile from "./components/Profile/ViewProfile";
import TopPerformers from "./components/TopPerformers/TopPerformers";

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
    <main className={classes.main} style={{ background: "white" }}>
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/profile" component={ViewProfile} />
        <Route path="/messages" component={MessageList} />
        <Route path="/top-performers" component={TopPerformers} />
        <Route path="/" component={MessageList} />
        <Route path="/notifications" component={MessageList} />
      </Switch>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
