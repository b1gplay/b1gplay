import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import image from "../Gallery/bb.jpg";
import image1 from "../Gallery/cc.jpg";
import image2 from "../Gallery/dd.jpg";
import image3 from "../Gallery/ee.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
    //backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "100%"
  }
});

const tileData = [
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: image1,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: image2,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: image3,
    title: "Image",
    author: "author",
    cols: 2
  }
];

function TopFourVideos(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <br />

      <Typography variant="title" gutterBottom align="center">
        Top 4 videos
      </Typography>
      <br />
      <br />

      <GridList cellHeight={140} className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TopFourVideos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopFourVideos);
