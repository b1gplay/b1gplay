import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 140
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});
function PlayerOfWeek(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          Player of the week
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/3.jpg"
            className={classes.bigAvatar}
          />
        </Grid>

        <Typography variant="title" gutterBottom align="center">
          Otim Tony
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          Tigerhead Power
        </Typography>

        <div>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <Typography variant="title" gutterBottom align="center">
                Total Votes
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
    </div>
  );
}

PlayerOfWeek.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerOfWeek);
