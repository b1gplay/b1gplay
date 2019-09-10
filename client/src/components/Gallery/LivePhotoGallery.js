import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";

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

class LivePhotoGallery extends Component {
  state = {
    open: false
  };

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <Fragment className={classes.root}>
        <br />
        <Grid container spacing={8}>
          {this.props.picture.map(pic => (
            <img
              src={pic.photo}
              alt={pic.profile_name}
              style={{ height: "100%", width: "100%" }}
            />
          ))}
        </Grid>
      </Fragment>
    );
  }
}

LivePhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  getPhotoGallery: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  picture: state.photoGallery.liveGallery
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(LivePhotoGallery));
