import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//import Divider from "@material-ui/core/Divider";
//import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";

import Avatar from "@material-ui/core/Avatar";

import Fab from "@material-ui/core/Fab";

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
  },
  fab: {
    margin: theme.spacing.unit
  },
  text: {
    fontWeight: "bold"
  }
});

function Male(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        component="h3"
        color="default"
        align="center"
        className={classes.text}
      >
        Males
      </Typography>
      <Paper className={classes.paper} elevation="0">
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
                <Typography gutterBottom variant="h6" className={classes.text}>
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom variant="subheading">
                  Point guard
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Fab color="secondary" className={classes.fab}>
                <Typography variant="h5" gutterBottom color="inherit">
                  34
                </Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <br />
        {/*  <Divider /> */}

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
                <Typography gutterBottom variant="h6" className={classes.text}>
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom variant="subheading">
                  Shooting guard
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Fab color="secondary" className={classes.fab}>
                <Typography variant="h5" gutterBottom color="inherit">
                  34
                </Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <br />
        {/*  <Divider /> */}

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
                <Typography gutterBottom variant="h6" className={classes.text}>
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom variant="subheading">
                  Small forward
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Fab color="secondary" className={classes.fab}>
                <Typography variant="h5" gutterBottom color="inherit">
                  34
                </Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <br />
        {/*  <Divider /> */}

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
                <Typography gutterBottom variant="h6" className={classes.text}>
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom variant="subheading">
                  Power forward
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Fab color="secondary" className={classes.fab}>
                <Typography variant="h6" gutterBottom color="inherit">
                  34
                </Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <br />
        {/*  <Divider /> */}

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
                <Typography gutterBottom variant="h6" className={classes.text}>
                  Nathan Baleeta
                </Typography>
                <Typography gutterBottom variant="subheading">
                  Center forward
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Fab color="secondary" className={classes.fab}>
                <Typography variant="h6" gutterBottom color="inherit">
                  34
                </Typography>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Male.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Male);
