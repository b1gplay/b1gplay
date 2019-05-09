import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ChatConversations from "../Messaging/ChatConversations";
import ChatDetails from "../Messaging/ChatDetails";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  textField: {
    padding: "8px",
    borderRadius: "20px"
  }
});

class MessageList extends React.Component {
  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid
            item
            xs={4}
            sm={4}
            style={{
              marginTop: "-1%",
              marginLeft: "-2%",
              position: "fixed"
            }}
          >
            <ChatConversations />
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            style={{
              marginLeft: "34%"
              //position: "fixed"
            }}
          >
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
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
