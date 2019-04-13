import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";

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
  },
  avatar: {
    margin: 10
  }
});

function Suggestions(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <Typography
            component="h5"
            variant="subtitle2"
            style={{ marginLeft: 20, marginTop: 5 }}
          >
            People you may know
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={2}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/7.jpg"
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 50,
                  height: 50,
                  border: "5px solid red"
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} style={{ marginTop: 15 }}>
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
              >
                Otim Tony
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} style={{ marginTop: 15 }}>
              <Typography variant="caption">@otim_tony</Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            style={{ marginLeft: 200, marginTop: -20 }}
          >
            <Typography variant="caption" style={{ color: "#ffffff" }}>
              Follow
            </Typography>
          </Button>
        </CardActionArea>
        <hr />
        <CardActionArea style={{ marginBottom: "10px" }}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={2}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/7.jpg"
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 50,
                  height: 50,
                  border: "5px solid red"
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} style={{ marginTop: 15 }}>
              <Typography
                component="h5"
                variant="subtitle2"
                style={{ marginLeft: 20 }}
              >
                Otim Tony
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} style={{ marginTop: 15 }}>
              <Typography variant="caption">@otim_tony</Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            style={{ marginLeft: 200, marginTop: -20 }}
          >
            <Typography variant="caption" style={{ color: "#ffffff" }}>
              Follow
            </Typography>
          </Button>
        </CardActionArea>
      </Card>
    </div>
  );
}

Suggestions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Suggestions);
