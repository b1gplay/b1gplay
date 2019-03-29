import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
    paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function Comment(props) {
  const { classes } = props;

    return (
    	<Grid item xs={12} style={{ marginBottom: "5px" }}>
    	  	<Grid container spacing={24}>
              <Grid item xs={1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" className={classes.avatar} style={{ marginLeft: "10px", marginRight: "10px" }}/>
              </Grid>
              <Grid item xs={10}>
                <form className={classes.container} noValidate autoComplete="off" style={{ marginTop: "-20px" }}>
    	          <TextField
    	          id="outlined-dense"
    	          label="What's on your mind?"
    	          className={classNames(classes.textField, classes.dense)}
    	          margin="dense"
    	          variant="outlined"
    	          fullWidth 
    	          />
                </form>
              </Grid>
              <Grid item xs={1}>
              	<PhotoCameraIcon style={{ marginLeft: "-30px", width: "40px", height: "40px" }} />
              </Grid>
      		</Grid> 
    	</Grid>
    );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
