import React from "react";
import { withStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

import SendIcon from "@material-ui/icons/Send";

const styles = theme => ({});

const InputBox = ({ classes }) => (
  <React.Fragment>
    <div>
      <Grid container spacing={8} style={{ background: "white" }}>
        <Grid item xs={11} sm={11}>
          <TextField
            id="outlined-full-width"
            style={{ fontSize: "18px" }}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} style={{ marginTop: "20px" }}>
          <SendIcon style={{ fontSize: "38px" }} />
        </Grid>
      </Grid>
    </div>
  </React.Fragment>
);

export default withStyles(styles)(InputBox);
