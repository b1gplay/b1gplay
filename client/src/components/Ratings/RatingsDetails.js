import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';

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
  },
});

function RatingsDetails(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Personal Ratings Summary
          </Typography>
          <hr />
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average Total Rating: 80.34
          </Typography>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average players ratings: 56
          </Typography>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average coaches ratings: 56
          </Typography>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average fans ratings: 56
          </Typography>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average agents ratings: 56
          </Typography>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average media ratings: 56
          </Typography>
          <Typography component="h5" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Average scourt ratings: 56
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}

RatingsDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RatingsDetails);