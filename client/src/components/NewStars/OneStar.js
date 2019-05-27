import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    margin: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit
  },

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "18px"
  },
  subheader: {
    fontSize: "16px"
  }
});

class OneStar extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title,
            subheader: classes.subheader
          }}
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/7.jpg"
              className={classes.bigAvatar}
            />
          }
          action={
            <Fab color="secondary" className={classes.fab}>
              <Typography variant="h5" gutterBottom color="inherit">
                34
              </Typography>
            </Fab>
          }
          title="Otim Tony"
          subheader="@otim.tony"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/bb.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={6}>
              <Typography variant="subheading" gutterBottom align="left">
                <b>Date of birth:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Nationality:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Club:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Country:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Position:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Height:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Wingspan:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Vertical leap:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Time to run 40m:</b>
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                <b> Time to run 100m:</b>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="subheading" gutterBottom align="left">
                12th Dec, 1997
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                Ugandan
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                Tigerhead
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                Uganda
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                Point guard
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                6'4"
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                3m
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                3m
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                4.5 Seconds
              </Typography>
              <Typography variant="subheading" gutterBottom align="left">
                10.5 Seconds
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing />
      </Card>
    );
  }
}

OneStar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OneStar);
