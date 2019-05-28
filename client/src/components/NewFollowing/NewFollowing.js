import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";

import FollowingList from "./FollowingList";
import Suggestions1 from "./Suggestions1";

const styles = theme => ({});

class ClientDetails1 extends React.Component {
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
              marginTop: "-1%",
              marginLeft: "-2%"
              //position: "fixed"

              //backgroundColor: "white"
            }}
          >
            <Suggestions1 />
          </Grid>
          <Grid
            item
            xs={9}
            sm={9}
            style={{
              marginLeft: "28%"
            }}
          >
            <FollowingList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ClientDetails1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientDetails1);
