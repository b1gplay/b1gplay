import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = {
  avatar: {
    margin: 10
  }
};

function PersonalInfo(props) {
  //const { classes } = props;
  return (
    <div>
      <Typography variant="title" gutterBottom align="left">
        Personal Info
        <Divider />
      </Typography>

      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Position:</b> Point guard
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Number:</b> 23
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Height:</b> 6.3"
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Weight:</b> 230 Lbs
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Wingspan:</b> 200
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Vertical Leap:</b> 90 cm
      </Typography>

      <br />
      <Typography variant="title" gutterBottom align="left">
        Club
        <Divider />
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Affiliation:</b> Powerhead
      </Typography>
      <Typography variant="body1" gutterBottom align="left" color="Primary">
        <b style={{ color: "black" }}>Country:</b> Uganda
      </Typography>
    </div>
  );
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
