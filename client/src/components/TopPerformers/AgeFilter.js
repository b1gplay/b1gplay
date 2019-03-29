import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 600,
  },
  slider: {
    padding: '22px 0px',
  },
};

class AgeFilter extends React.Component {
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Age Filter</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          align="center"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

AgeFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AgeFilter);
