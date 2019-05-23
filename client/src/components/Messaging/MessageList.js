import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";

import ChatDetails from "./ChatDetails";
import ChatConversations from "./ChatConversations";

const styles = theme => ({});

class ClientDetails1 extends React.Component {
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

              //backgroundColor: "white"
            }}
          >
            <ChatConversations />
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            style={{
              marginLeft: "1%"
            }}
          >
            <ChatDetails />
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
