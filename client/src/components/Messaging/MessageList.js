import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";

import ChatDetails from "./ChatDetails";
import ChatConversations from "./ChatConversations";
import InputBox from "./InputBox";

import Header from "../Layout/Header";

const styles = theme => ({});

class MessageList extends React.Component {
  render() {
    //const { classes } = this.props;

    return (
      <div
        style={{
          background: "white"
        }}
      >
        <Header />
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
              background: "white"
            }}
          >
            <ChatDetails />
            <InputBox />
          </Grid>
        </Grid>
      </div>
    );
  }
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MessageList);
