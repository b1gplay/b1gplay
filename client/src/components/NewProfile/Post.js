import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import classNames from 'classnames';
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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


class Post extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      
        <Tab
          onClick={this.handleClickOpen}
          label="Post"
          icon={<VideoLibraryIcon />}
          style={{
            color: "#D23E56",
            fontWeight: "bold",
            borderRight: "1px solid #d4d4d4",
            width: "175px",

          }}
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >

        <DialogTitle id="form-dialog-title">Leave a post</DialogTitle>
          <DialogContent>
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={1} sm={1} style={{ marginRight: "5px", marginTop: "10px" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
                </Grid>
                <Grid item xs={6} sm={6} >
                  <TextField
                    margin="dense"
                    id="outlined-dense"
                    label="What's on your mind?"
                    fullWidth
                    variant="outlined"
                    style={{ width: "465px" }}
                  />
                </Grid>
                <Grid item xs={2} sm={2}>
                  <PhotoCameraIcon style={{ marginLeft: "180px", width: "40px", height: "40px", marginTop: "10px" }} />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={1} sm={1}>
                  <AddAPhotoIcon style={{  width: "25px", height: "25px" }} />
                </Grid>
                <Grid item xs={1} sm={1} style={{ marginLeft: "-20px" }}>
                  <AddPhotoAlternateIcon style={{  width: "25px", height: "25px" }} />
                </Grid>
                <Grid item xs={1} sm={1} style={{ marginLeft: "-20px" }}>
                  <VideoLibraryIcon style={{  width: "25px", height: "25px" }} />
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}


Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);