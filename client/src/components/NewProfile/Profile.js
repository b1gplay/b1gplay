import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Cover from "./Cover";
import MyProfile from "./MyProfile";
import Feed from "./Feed";
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
  }
});

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Cover />
            <Grid container spacing={24}>
              <MyProfile />
              <Grid item xs={8}>
                <Feed />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Rating />
            <OnlineChats />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePage);
