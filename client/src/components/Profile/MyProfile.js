import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  media: {
    height: 140
  }
});

function CoverProfile(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container justify="center" alignItems="center" />

        <Typography variant="title" gutterBottom align="center">
          Otim Tony
        </Typography>
        <Typography
          variant="subheading"
          gutterBottom
          align="center"
          color="primary"
        >
          Ugandan
        </Typography>

        <Typography component="p" align="center" variant="subheading">
          Am the best Point Guard. I make CP3 look like a clown
        </Typography>

        <div>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <Link to="/personal-ratings" className={classes.link}>
                <Typography variant="title" gutterBottom align="center">
                  Ratings
                </Typography>

                <Typography
                  variant="title"
                  gutterBottom
                  align="center"
                  color="Primary"
                >
                  700
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Link to="/following" className={classes.link}>
                <Typography variant="title" gutterBottom align="center">
                  Following
                </Typography>
                <Typography
                  variant="title"
                  gutterBottom
                  align="center"
                  color="Primary"
                >
                  190
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Link to="/followers" className={classes.link}>
                <Typography variant="title" gutterBottom align="center">
                  Followers
                </Typography>
                <Typography
                  variant="title"
                  gutterBottom
                  align="center"
                  color="Primary"
                >
                  243
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverProfile);
