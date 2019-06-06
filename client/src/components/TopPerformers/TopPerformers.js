import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Performers from "./Performers";
import Filter from "./Filter";

const styles = theme => ({
  // Styled scrollbar
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.6em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  }
});

class TopPerformers extends React.Component {
  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid
            item
            xs={3}
            sm={3}
            style={{
              //position: "fixed",
              margin: 0
            }}
          >
            <Filter />
          </Grid>
          <Grid
            item
            xs={9}
            sm={9}
            style={
              {
                //marginLeft: "16%"
              }
            }
          >
            <Performers />
          </Grid>
        </Grid>
      </div>
    );
  }
}

TopPerformers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPerformers);
