import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  },

  gridContainer: {
    marginTop: -20,
    marginLeft: -24,
    marginRight: -70,
    //marginRight: "auto",
    //marginLeft: "auto",
    height: "auto",
    backgroundSize: "100vw 100vh",
    minHeight: "100%",
    minWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"/static/images/s.jpg"})`,
    zIndex: 1000,
    position: "fixed"
  }
});

function Login(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24} className={classes.gridContainer}>
        <Grid item xs={6} sm={1} />
        <Grid item xs={6} sm={6}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} style={{ marginTop: 30 }}>
              <Typography variant="h4" style={{ color: "#ffffff" }}>
                Where sports and society meet
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ fontSize: "17px", color: "#ffffff" }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={1} />
        <Grid item xs={6} sm={4}>
          <br />
          <br />
          <Paper
            className={classes.paper}
            style={{
              marginRight: 80,
              marginTop: 40
            }}
          >
            <Grid container spacing={24} />
            <br /> <br />
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h5"
                style={
                  {
                    //color: "white"
                  }
                }
              >
                Login
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-uncontrolled"
                label="Email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  color: "black"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-uncontrolled"
                label="Password"
                className={classes.textField}
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  color: "black"
                }}
              />
            </Grid>
            <br /> <br /> <br />
            <Button
              variant="contained"
              size="large"
              color="secondary"
              fullWidth
              className={classes.button}
              style={{ marginTop: "5px" }}
            >
              Login
            </Button>
            <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
