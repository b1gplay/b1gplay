import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Suggestions from "./Suggestions";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 100
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  avatar: {
    margin: 10
  }
});

function Followers(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/bb.jpg"
                title="Contemplative Reptile"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{ marginLeft: 200, marginTop: 10 }}
              >
                <Typography variant="caption" style={{ color: "#ffffff" }}>
                  Follow
                </Typography>
              </Button>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/7.jpg"
                style={{
                  marginLeft: 20,
                  marginTop: -80,
                  width: 70,
                  height: 70,
                  border: "5px solid red"
                }}
              />
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
              >
                Otim Tony
              </Typography>
              <Typography variant="caption" style={{ marginLeft: 20 }}>
                @otim_tony
              </Typography>
              <hr />
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
                gutterBottom
              >
                I am trying to set up my React.js app so that it only renders if
                a variable
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/bb.jpg"
                title="Contemplative Reptile"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{ marginLeft: 200, marginTop: 10 }}
              >
                <Typography variant="caption" style={{ color: "#ffffff" }}>
                  Follow
                </Typography>
              </Button>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/7.jpg"
                style={{
                  marginLeft: 20,
                  marginTop: -80,
                  width: 70,
                  height: 70,
                  border: "5px solid red"
                }}
              />
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
              >
                Otim Tony
              </Typography>
              <Typography variant="caption" style={{ marginLeft: 20 }}>
                @otim_tony
              </Typography>
              <hr />
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
                gutterBottom
              >
                I am trying to set up my React.js app so that it only renders if
                a variable
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/bb.jpg"
                title="Contemplative Reptile"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{ marginLeft: 200, marginTop: 10 }}
              >
                <Typography variant="caption" style={{ color: "#ffffff" }}>
                  Follow
                </Typography>
              </Button>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/7.jpg"
                style={{
                  marginLeft: 20,
                  marginTop: -80,
                  width: 70,
                  height: 70,
                  border: "5px solid red"
                }}
              />
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
              >
                Otim Tony
              </Typography>
              <Typography variant="caption" style={{ marginLeft: 20 }}>
                @otim_tony
              </Typography>
              <hr />
              <Typography
                component="h5"
                variant="subtitle2"
                gutterBottom
                style={{ marginLeft: 20 }}
              >
                I am trying to set up my React.js app so that it only renders if
                a variable
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Suggestions />
        </Grid>
      </Grid>
    </div>
  );
}

Followers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Followers);
