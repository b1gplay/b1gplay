import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import LivePhotoGallery from "./LivePhotoGallery";

import { connect } from "react-redux";
import { getPhotoGallery, getPhoto } from "../../actions/photoGallery";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: "100%",
    height: "100%"
  }
});

class PhotoGallery extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    this.props.getPhotoGallery();
  }

  handleOpen = picture => {
    this.props.getPhoto(picture);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment className={classes.root}>
        <br />
        <Typography
          variant="h5"
          component="h3"
          align="center"
          style={{ color: "#D23E56", fontWeight: "bold" }}
        >
          Photo gallery
        </Typography>
        <br />
        <br />

        <Grid container spacing={8}>
          {this.props.photos.map(pic => (
            <Grid
              item
              lg={3}
              style={{
                background: "#FFFFFF",
                border: "1px solid #d4d4d4",
                padding: 8
              }}
            >
              <img
                src={pic.photo}
                alt={pic.profile_name}
                style={{ height: "260px", width: "100%" }}
                onClick={this.handleOpen.bind(this, pic.id)}
              />
            </Grid>
          ))}
        </Grid>

        <Dialog
          id="myDialog"
          maxWidth="sm"
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleClose}
        >
          <DialogContent>
            <LivePhotoGallery />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

PhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  getPhotoGallery: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  photos: state.photoGallery.photos
});

export default connect(
  mapStateToProps,
  { getPhotoGallery, getPhoto }
)(withStyles(styles)(PhotoGallery));
