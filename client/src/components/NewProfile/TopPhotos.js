import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 100,
  },
});

function TopPhotos(props) {
  const { classes } = props;

  return (

    <Paper className={classes.paper} style={{ marginTop: "10px" }}>
      <Typography variant="button" gutterBottom align="left">
        Top 4 Images
        <hr/>
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.media}
            image="/static/images/avatar/1.jpg"
            title="Paella dish"/>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            className={classes.media}
            image="/static/images/avatar/2.jpg"
            title="Paella dish"/>
        </Grid>
      </Grid> 
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.media}
            image="/static/images/avatar/3.jpg"
            title="Paella dish"/>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            className={classes.media}
            image="/static/images/avatar/4.jpg"
            title="Paella dish"/>
        </Grid>
      </Grid> 
    </Paper>
  );
}

TopPhotos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopPhotos);