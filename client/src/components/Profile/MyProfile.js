import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    border: "3px solid black"
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
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/7.jpg"
            className={classes.bigAvatar}
          />
        </Grid>

        <Typography variant="title" gutterBottom align="center">
          Otim Tony
        </Typography>
        <Typography
          component="p"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          @otimtony
        </Typography>
        <Typography component="p" align="center">
          Am the chosen one.
        </Typography>

        <div>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <Typography variant="title" gutterBottom align="center">
                Posts
              </Typography>
              <Typography
                variant="title"
                gutterBottom
                align="center"
                color="Primary"
              >
                700
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
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
            </Grid>
            <Grid item xs={4} sm={4}>
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
            </Grid>
          </Grid>
        </div>
      </Paper>
      <br />
      <br />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Intro
        </Typography>
        <br />
        <Typography component="p">
          Im the best point guard in the game since <b>December 2017</b>
        </Typography>
      </Paper>
    </div>
  );
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverProfile);
