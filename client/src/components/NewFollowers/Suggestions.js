import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";

import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 60,
    height: 60
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

function Followers(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/3.jpg"
                className={classes.bigAvatar}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom>@nathan.baleeta</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Follow
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/3.jpg"
                className={classes.bigAvatar}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom>@nathan.baleeta</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Follow
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/3.jpg"
                className={classes.bigAvatar}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom>@nathan.baleeta</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Follow
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Followers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Followers);
