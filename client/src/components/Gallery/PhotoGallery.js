import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { connect } from "react-redux";
import { getPhotoGallery } from "../../actions/photoGallery";

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

  handleOpen = () => {
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
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #d4d4d4"
          }}
        >
          <GridList cellHeight={260} className={classes.gridList} cols={8}>
            {this.props.photos.map(picture => (
              <GridListTile key={picture.id} cols={picture.cols || 1}>
                <img
                  src={picture.photo}
                  alt={picture.profile_name}
                  style={{
                    padding: 4
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
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
  { getPhotoGallery }
)(withStyles(styles)(PhotoGallery));
