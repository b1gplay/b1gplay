import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { VectorMap } from "react-jvectormap";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function Map(props) {
  //const { classes } = props;

  return (
    <Grid item xs={12}>
      <div style={{ width: 819, height: 410 }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#3b96ce"
          containerStyle={{
            width: "100%",
            height: "100%"
          }}
          containerClassName="map"
        />
      </div>
    </Grid>
  );
}

Map.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Map);
