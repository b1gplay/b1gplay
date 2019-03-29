import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { VectorMap } from "react-jvectormap"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Map(props) {
  const { classes } = props;

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
		<div style={{width: 570, height: 300}}>
		  <VectorMap map={'world_mill'}
		    backgroundColor="#3b96ce"
		    containerStyle={{
		      width: "100%",
		      height: "100%"
		    }}
		    containerClassName="map"/>
        </div>
      </Paper>
    </Grid>
  );
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);
