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
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    margin: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit
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
            <Grid item xs={5} sm={5}>
              <Typography variant="body1" gutterBottom align="left">
                Date of birth:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Nationality:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Club:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Country:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Position:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Height:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Wingspan:
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Vertical leap:
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7}>
              <Typography variant="body1" gutterBottom align="left">
                12th Dec, 1997
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Ugandan
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Tigerhead
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Uganda
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                Point guard
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                6'4"
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                3m
              </Typography>
              <Typography variant="body1" gutterBottom align="left">
                3m
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
