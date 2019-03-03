import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

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

class SignOn extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid
            item
            xs={8}
            sm={8}
            style={{ borderRight: "1px solid #d4d4d4", height: "100vh" }}
          >
            <Typography component="h1" variant="h6" align="center">
              Select your category and proceed to register
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography component="h1" variant="h6" align="center">
              Create an account
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignOn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignOn);
