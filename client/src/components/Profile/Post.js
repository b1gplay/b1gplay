import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { Typography } from "@material-ui/core";

import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  chip: {
    margin: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Post extends React.Component {
  state = {
    open: false,

    images: [],
    videos: []
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUpload = () => {
    alert("Hi");
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Tab
          onClick={this.handleClickOpen}
          label="Post"
          style={{
            color: "black",
            fontWeight: "bold",
            borderRight: "1px solid #d4d4d4",
            width: "175px"
          }}
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="simple-dialog-title"
            color="default"
            style={{
              backgroundColor: "#F5F5F5",
              height: 20,
              borderBottom: "1px solid #d4d4d4",
              padding: "34px"
            }}
          >
            <Typography
              //component="h4"
              variant="title"
              align="left"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Leave a post
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={0}>
              <Grid item lg={12}>
                <br />
                <TextField
                  margin="dense"
                  id="outlined-dense"
                  label="What's on your mind?"
                  fullWidth
                  variant="outlined"
                  multiline={true}
                  rows={3}
                  rowsMax={10}
                />
                <br /> <br />
              </Grid>

              <Grid item lg={12}>
                <input
                  accept="image/*"
                  className={classes.input}
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Chip
                    icon={<AddAPhotoIcon />}
                    label="Photo/ Video"
                    //onClick={this.handleUpload}
                    className={classes.chip}
                    color="primary"
                  />
                  {/*  <Button
                    variant="raised"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    <AddAPhotoIcon />   Photo/ Video
                  </Button> */}
                </label>
              </Grid>

              <Grid item lg={12}>
                <br />

                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                >
                  Share
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
