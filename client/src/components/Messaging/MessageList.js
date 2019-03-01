import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import ChatConversations from "../Messaging/ChatConversations";

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
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid
            item
            xs={3}
            sm={3}
            style={{ borderRight: "1px solid #d4d4d4", height: "100vh" }}
          >
            <TextField
              id="outlined-bare"
              className={classes.textField}
              defaultValue="Search person..."
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Divider />
            <ChatConversations />
          </Grid>
          <Grid item xs={9} sm={9}>
            <Typography component="h1" variant="h6" align="center">
              Select your category and proceed to register
            </Typography>
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
