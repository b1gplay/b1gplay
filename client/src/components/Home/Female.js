import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import 'typeface-roboto';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    marginLeft: 10,
    marginRight: 10,
    width: 60,
    height: 60,
  },
});

function Female(props) {
  const { classes } = props;

  return (
	<Grid item xs={3}>
	  <Typography variant="h6" gutterBottom>
	    Female
	  </Typography>

      <Paper className={classes.paper}>
      	<Grid container spacing={24}>
          
      	  <Grid item xs={6}>
      			<Typography component="p" align="left">
      			  Point Guard
      			</Typography>
            <Link to="/stars">
            <Paper className={classes.paper}>
      		    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
      			  <Typography variant="subtitle2" gutterBottom color="#D23E56">
      			    Aliyah Naki
      			  </Typography>
      			  <Typography variant="button" gutterBottom align="center">
      			    89.65
      			  </Typography>
            </Paper>
            </Link>
          </Grid>
          <Grid item xs={6}>
          	<Typography component="p" align="left">
			  Shooting Guard
			</Typography>
            <Paper className={classes.paper}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
              <Typography variant="subtitle2" gutterBottom>
			    Aliyah Naki
			  </Typography>
			  <Typography variant="button" gutterBottom align="center">
			    89.65
			  </Typography>
            </Paper>
          </Grid>
      	</Grid>
      	<Grid container spacing={24}>
      	  <Grid item xs={6}>
      	  	<Typography component="p" align="left">
			  Power Forward
			</Typography>
            <Paper className={classes.paper}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
              <Typography variant="subtitle2" gutterBottom>
			    Aliyah Naki
			  </Typography>
			  <Typography variant="button" gutterBottom align="center">
			    89.65
			  </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
          	<Typography component="p" align="left">
			  Small Forward
			</Typography>
            <Paper className={classes.paper}>
      		  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
      		  <Typography variant="subtitle2" gutterBottom>
			    Aliyah Naki
			  </Typography>
			  <Typography variant="button" gutterBottom align="center">
			    89.65
			  </Typography>
            </Paper>
          </Grid>
      	</Grid>
      	<Grid container spacing={24}>
      	  <Grid item xs={6}>
      	  	<Typography component="p" align="left">
			  Center Forward
			</Typography>
      	    <Paper className={classes.paper}>
      		  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
      		  <Typography variant="subtitle2" gutterBottom>
			    Aliyah Naki
			  </Typography>
			  <Typography variant="button" gutterBottom align="center">
			    89.65
			  </Typography>
      	    </Paper>
          </Grid>
          <Grid item xs={6}>
          </Grid>
      	</Grid>
      </Paper>
    </Grid>
  );
}

Female.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Female);