import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

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
    <main className={classes.main}>
      <Switch>
        <Route path="/find-players" />
        <Route path="/" />
        <Route path="/profile" />
        <Route path="/messages" />
        <Route path="/notifications" />
        <Route path="/talent-suggestions" />
      </Switch>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
