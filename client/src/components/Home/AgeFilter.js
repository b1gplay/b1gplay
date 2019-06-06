import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//import Slider from '@material-ui/lab/Slider';
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const styles = {
  /* root: {
    width: 600
  }, */
  slider: {
    padding: "22px 0px"
  }
};

class AgeFilter extends React.Component {
  state = {
    value: 50
  };

  constructor(props) {
    super(props);

    this.state = {
      value: { min: 5, max: 45 }
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    //const { classes } = this.props;
    //const { value } = this.state;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography id="label" style={{ marginBottom: 20 }}>
              Age Filter
            </Typography>
            <InputRange
              maxValue={50}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

AgeFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AgeFilter);
