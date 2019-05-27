import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";

import FollowerList from "./FollowerList";
import Suggestions from "./Suggestions";

const styles = theme => ({});

class NewFollowers extends React.Component {
  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid
            item
            xs={4}
            sm={4}
            style={{
              marginTop: "-1%",
              marginLeft: "-2%"
              //position: "fixed"

              //backgroundColor: "white"
            }}
          >
            <Suggestions />
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            style={
              {
                //marginLeft: "1%"
              }
            }
          >
            <FollowerList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

NewFollowers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewFollowers);
